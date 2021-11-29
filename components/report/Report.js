import React ,{useState} from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import { StyleSheet,
   Dimensions,
   Image, 
   View, 
   Text, 
   Pressable, 
   Alert, 
   TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { schedulePushNotification } from '../notification/notification';


//const height = Dimensions.get('window').height
    
    const response = [
      {
        id: '1',
        coordinates: {
          latitude: -26.59611,
          longitude: 28.09667,
        },
        title: 'Agent',
        description: 'Location',
        icon: require('../../assets/images/mascot.png')
      },
      {
        id: '2',
        coordinates: {
          latitude: -25.44278,
          longitude: 28.64639,
        },
        title: 'Agent',
        description: 'Location',
        category: 1,
        icon: require('../../assets/images/mascot.png')
      },
      {
        id: '3',
        coordinates: {
          latitude: -26.5489,
          longitude: 28.6388,
        },
        title: 'Agent',
        description: 'Location',
        category: 1,
        icon: require('../../assets/images/mascot.png')
      },
      {
        id: '4',
        coordinates: {
          latitude: -26.9035,
          longitude: 28.2096,
        },
        title: 'Agent',
        description: 'Location',
        category: 1,
        icon: require('../../assets/images/mascot.png')
      },
      {
        id: '5',
        coordinates: {
          latitude: -26.71839,
          longitude: 29.5434,
        },
        title: 'Agent',
        description: 'Location',
        category: 1,
        icon: require('../../assets/images/mascot.png')
      },
      {
        id: '6',
        coordinates: {
          latitude: -26.0277,
          longitude: 27.2287,
        },
        title: 'Agent',
        description: 'Location',
        category: 1,
        icon: require('../../assets/images/mascot.png')
      },
      {
        id: '7',
        coordinates: {
          latitude: -28.974,
          longitude: -28.8076,
        },
        title: 'Acre',
        description: 'Acred',
        category: 1,
        icon: require('../../assets/images/mascot.png')
      }
    ]

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert!",
      "Hang on help is on the way. Your request has been sent.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK" }
      ]
    );
    
    const Map = () => {
      const [text, setText] = useState('Report Emergency')

     const handleText = () => {
        setText("Reported");
      }
      return (
        <SafeAreaView>
        <>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: -26.974,
            longitude: 28.8076,
            latitudeDelta: 5.0922,
            longitudeDelta: 0.0421
          }}
        >
          {response.map(marker => (
            <MapView.Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            >
              <Image source={ marker.icon } style={{ height: 32, width: 32 }} />
            </MapView.Marker>
          ))}
        </MapView>
        <View style={styles.searchBox}>
        <TextInput 
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{flex:1,padding:0}}
        />
        <Ionicons name="ios-search" size={20} />
      </View>
        <Pressable style={styles.card} onPress={async () => {await schedulePushNotification()}} >
        <Text style={styles.btnText}>{text}</Text>

        <MaterialCommunityIcons name="bell" size={26} style={styles.btnText} />
        </Pressable>
       </>
       </SafeAreaView>
      )
    }
    
    const styles = StyleSheet.create({
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      card: {
        backgroundColor: 'red',
        height: 65,
        width: Dimensions.get('window').width - 20,
        position: "absolute",
        overflow: "hidden",
        margin: 10,
        bottom: 63,
        shadowRadius: 20,
        borderRadius: 25,
      },
    btnText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 25,
    },
    searchBox: {
      position:'absolute', 
      marginTop: Platform.OS === 'ios' ? 40 : 30, 
      flexDirection:"row",
      backgroundColor: '#fff',
      width: '90%',
      alignSelf:'center',
      borderRadius: 5,
      padding: 8,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    }

    })
    
    export default Map