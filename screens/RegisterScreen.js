import React,{Component} from 'react'
import { Text, View, TouchableOpacity,Image} from 'react-native';

export default function RegisterScreen ({navigation}) {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image style = {{width:40,height:40}} source = {require("../assets/images/moo.png")}/>
                </TouchableOpacity>
                <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                  <Text>Register Screen!</Text>
                </View>
            </View>
          );
    
}