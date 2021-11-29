import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';

//import firestore from '@react-native-firebase/firestore';

import {dialogflowConfig} from '../env';

const botAvatar = require('.././../assets/images/mascot.png');
const BOT = {
  _id: 2,
  name: 'Mr.Bot',
  avatar: botAvatar,
};

class Chatbot extends Component {
  state = {
    messages: [{_id: 3 ,
      text: 'With one of our professionals we help you be the best of you.',
      createdAt: new Date().getTime(),user: BOT },{ _id: 2 ,
      text: 'My name is TOM from GBV helpline, am here to help you to find the service you deserve.',
      createdAt: new Date().getTime(),user: BOT},
    {_id: 1 ,
      text: 'Hi!',
      createdAt: new Date().getTime(),user: BOT }],
    id: 1,
    name: '',
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];

    this.sendBotResponse(text);
  }

  sendBotResponse(text) {
    let msg;
      msg = {
        _id: this.state.messages.length + 1 ,
        text: text,
        createdAt: new Date().getTime(),
        user: BOT,
      };
      
    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.messages, [msg]),
    }));

    };

  onSend(messages = []) {
    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.messages, messages),
    }));

    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error),
    );

  }

  onQuickReply(quickReply) {
    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.messages, quickReply),
    }));

    let message = quickReply[0].value;

    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error),
    );
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <GiftedChat
          loadingEnabled={true}
          messages={this.state.messages}
          onSend={(message) => this.onSend(message)}
          onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
          renderBubble={this.renderBubble}
          user={{_id: 1}}
        />
      </View>
    );
  }
}

export default Chatbot;
