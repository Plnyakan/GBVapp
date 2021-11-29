import React from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import { Card, Button } from "react-native-elements";

const images = [
  {
    key: 1,
    name: "What is GBV?",
    image: require("../../assets/images/1.jpg"),
    url: "https://gbv.wilsoncenter.org/what-gender-based-violence"
  },
  {
    key: 2,
    name: "How can we stop GBV?",
    image: require("../../assets/images/2.jpg"),
    url: "https://www.care.org/news-and-stories/health/5-actions-needed-now-to-end-gender-based-violence/"
  },
  {
    key: 3,
    name: "Types of GBV.",
    image: require("../../assets/images/3.jpg"),
    url: "https://www.coe.int/en/web/gender-matters/types-of-gender-based-violence"
  },
  {
    key: 4,
    name: "Why should we stop GBV?",
    image: require("../../assets/images/4.jpg"),
    url: "https://www.worldvisionphilanthropy.org/news/gender-based-violence"
  },
  {
    key: 5,
    name: "Who are the victims of GBV?",
    image: require("../../assets/images/4.jpg"),
    url: "https://www.worldbank.org/en/topic/socialsustainability/brief/violence-against-women-and-girls"
  },
  {
    key: 6,
    name: "What are issues surrounding GBV?",
    image: require("../../assets/images/4.jpg"),
    url: "https://plan-international.org/ending-violence/gbv-gender-based-violence"
  }
];

export default () => (
  <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {images.map(({ name, image, url, key }) => (
        <Card title={`CARD ${key}`} image={image} key={key}>
          <Text style={{ marginBottom: 10 }}>
            {name}
          </Text>
          <Button
            backgroundColor="#03A9F4"
            title="LEARN NOW"
            onPress={() => Linking.openURL(url)}
          />
        </Card>
      ))}
    </ScrollView>
  </View>
);