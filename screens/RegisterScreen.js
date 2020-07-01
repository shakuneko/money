import React,{Component} from 'react'
import { Text, View, TouchableOpacity,Image, StyleSheet} from 'react-native';

export default function RegisterScreen ({navigation}) {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image style = {{width:40,height:40}} source = {require("../assets/images/moo.png")}/>
                </TouchableOpacity>
                <View style={styles.container}>
        <View style={{flex:1,zIndex:3}}> 
         {data.map((_, i) => (
                          <View
                              key={i}
                              style={{
                                  position: 'absolute',
                                  backgroundColor: gradientBackground,
                                  height: 1,
                                  bottom: (gradientHeight - i),
                                  right: 0,
                                  left: 0,
                                  zIndex: 0,
                                  opacity: (1 / gradientHeight) * (i + 1)
                              }}
                          />
                      ))} 
        
            <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
            <Image style = {{width:100,height:125}} source = {require("../assets/images/FUR.png")}/>
                <Text style={{fontSize:30,color:"#707070"}}>錢之所向</Text>
                <View>
                <TextInput 
                        style={styles.frame}
                        placeholder="信箱 (Email)"
                        secureTextEntry
                        onChangeText={(password)=>this.setState({password})}
                        value={this.state.password}
                    />
                    <TextInput 
                        style={styles.frame}
                        placeholder="使用者名稱 (User Name)"
                        onChangeText={(username)=>this.setState({username})}
                        value={this.state.username}
                        autoCapitalize="none"
                    />
                    <TextInput 
                        style={styles.frame}
                        placeholder="密碼 (Passwords)"
                        secureTextEntry
                        onChangeText={(password)=>this.setState({password})}
                        value={this.state.password}
                    />
                    
                </View>
                <View style={{width:300,flexDirection:"row",marginTop:28,justifyContent:"space-around"}}>
                    <View style={styles.frame2}>
                        <TouchableOpacity 
                        style={{marginTop:0}}
                        onPress={this._login}
                        //onPress={()=>this.props.navigation.navigation.navigate(" ")}
                        >
                            <Text style={{fontSize:20,color:"#FFF"}}>登入</Text>
                            <Text style={{fontSize:12,color:"#FFF"}}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.frame3}>
                        <TouchableOpacity 
                        style={{marginTop:0}}
                        onPress={this._Register}
                        //onPress={()=>navigation.push("Register")}
                        >
                            <Text style={{fontSize:20,color:"#FFF"}}>註冊</Text>
                            <Text style={{fontSize:12,color:"#FFF"}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
              </View>
            </View>
            </View>
         </View>
   
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCE2',
  },
  frame:{
    width:274,
    height:41,
    backgroundColor:"#fff",
    marginTop:20,
    paddingLeft:16
  },
  frame2:{
    width:118,
    height:54,
    backgroundColor:"#F1AB86",
    alignItems:"center",
    justifyContent:"center"
  },
  frame3:{
      width:118,
      height:54,
      backgroundColor:"#F8CB60",
      alignItems:"center",
      justifyContent:"center"
    },
});
