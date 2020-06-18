import React,{Component} from 'react'
import { Text, View, TouchableOpacity} from 'react-native';
//import {CustomHeader} from '../index'

export class RegisterScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
             
                <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                  <Text>Register Screen!</Text>
                </View>
            </View>
          );
    }
}


//<CustomHeader title="Register" navigation={this.props.navigation}/>