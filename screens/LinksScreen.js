import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function BagScreen() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <View style={{alignItems:"center"}}>
        <Text style={{fontSize:20,color:"#FFFFFF",marginTop:25}}>收付</Text>
          <View style={{width:300,height:80,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
            <View style={{alignItems:"center"}}>
              <Text style={{fontSize:15,color:"#FFFFFF"}}>本月支出</Text>
              <Text style={{fontSize:15,color:"#FFFFFF"}}>$6780</Text>
            </View>
            <View style={{width:0.5,height:44,backgroundColor:"#fff",borderRadius:10}}></View>
            <View style={{alignItems:"center"}}>
              <Text style={{fontSize:15,color:"#FFFFFF"}}>本月收入</Text>
              <Text style={{fontSize:15,color:"#FFFFFF"}}>$2000</Text>
            </View>
          </View>
      </View>
      </View>
    </View>
  )
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    width:375,
    height:150,
    backgroundColor:"#F1AB86"
  }
});
