import React from "react";
import ReactLoading from "react-loading";
import { View, StyleSheet, Text, SafeAreaView, ActivityIndicator } from "react-native";
  
export default function Loading() {

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center'
  },
});