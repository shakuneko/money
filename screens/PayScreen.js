import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Checkbox from 'react-native-custom-checkbox';

const gradientHeight=300;
const gradientBackground  = '#FFF4AD';
const data = Array.from({ length: gradientHeight+1 });

const PayScreen = ({ navigation }) => {
  return (
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
    
     <View style={styles.header}>
      <View style={{alignItems:"center"}}>
        <Text style={{fontSize:20,color:"#FFFFFF",marginTop:15}}>收付</Text>
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
      <ScrollView >
      <View style={styles.content}>
          <View style={{width:"100%",alignItems:"center"}}>
          <View style={{width:330,flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity>
              <View style={styles.square}>
                <Image style = {{width:45,height:45}} source = {require("../assets/images/point.png")}/>
                <Text style={{fontSize:12,color:"#707070",marginTop:5}}>紅利兌換</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.square}>
                <Image style = {{width:45,height:45}} source = {require("../assets/images/envelope.png")}/>
                <Text style={{fontSize:12,color:"#707070",marginTop:5}}>紅包</Text>
              </View>
            </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.square}>
                  <Image style = {{width:45,height:45}} source = {require("../assets/images/pay.png")}/>
                  <Text style={{fontSize:12,color:"#707070",marginTop:5}}>繳費</Text>
                </View>
              </TouchableOpacity>
          </View>
          <View style={{width:330,flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity
                      onPress={() => navigation.push('TransferScreen')}>
              <View style={styles.square}>
                <Image style = {{width:45,height:45}} source = {require("../assets/images/transfer.png")}/>
                <Text style={{fontSize:12,color:"#707070",marginTop:5}}>轉帳</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.square}>
                <Image style = {{width:45,height:45}} source = {require("../assets/images/withdrawal.png")}/>
                <Text style={{fontSize:12,color:"#707070",marginTop:5}}>無卡提款</Text>
              </View>
            </TouchableOpacity> 
            <TouchableOpacity> 
              <View style={styles.square}>
                <Image style = {{width:45,height:45}} source = {require("../assets/images/earn.png")}/>
                <Text style={{fontSize:12,color:"#707070",marginTop:5}}>收款</Text>
              </View>
            </TouchableOpacity>  
              </View>

            <View style={{height:30,alignItems:"center",justifyContent:"center"}}>
              <View style={{width:300,height:1.5,backgroundColor:"#F1AB86A1",borderRadius:10}}></View>
            </View>

            <View style={styles.frame}>
                <View>
                    <Text style={{fontSize:20,color:"#2D2D2D",marginTop:15}}>延遲項目</Text>
                </View>
                <View style={{width:296,height:1.5,backgroundColor:"#F1AB86A1",borderRadius:10,marginTop:13}}></View>
                
                    <View style={styles.title}>
                        <View style={{flex:1}}>
                            <Text style={styles.titleword}>目標</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.titleword}>對象</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.titleword}>金額</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.titleword}>狀態</Text>
                        </View>
                     </View>
                <View style={{width:296,height:1.5,backgroundColor:"#F1AB86A1",borderRadius:10}}></View>

                <View style={{width:280,justifyContent:"flex-start",marginTop:10}}>
                    <Text style={styles.label}>延遲中</Text>
                </View>

                <View style={styles.text}>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword}>06/27</Text>
                        </View>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword}>建商</Text>
                        </View>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword}>$12,400</Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row",height:25,alignItems:"center"}}>
                            <Text style={styles.label2}>延遲</Text>
                            <Checkbox
                                checked={true}
                                style={{backgroundColor: '#fff', color:'#15A7CC',borderRadius:2,borderColor:"#FFEB6C"}}/>
                        </View>
                </View>

                <View style={{width:280,justifyContent:"flex-start",marginTop:20,marginBottom:5}}>
                    <Text style={styles.label}>延遲過的項目</Text>
                </View>

                <View style={styles.text}>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword}>06/24</Text>
                        </View>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword}>建商</Text>
                        </View>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword}>$12,400</Text>
                        </View>
                        <View style={{flex:1,}}>
                            <Text style={styles.label3}>已轉帳</Text>
                        </View>
                </View>
                <View style={styles.text}>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword}>06/07</Text>
                        </View>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword}>女兒</Text>
                        </View>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword2}>$1500</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.label4}>取消轉帳</Text>
                        </View>
                </View>
                <View style={styles.text}>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword}>06/07</Text>
                        </View>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword}>女兒</Text>
                        </View>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Text style={styles.textword2}>$1000</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.label3}>已轉帳</Text>
                        </View>
                </View>


            </View>
             
        </View>
        
      </View>
      </ScrollView>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCE2',
  },
  header:{
    width:"100%",
    height:117,
    backgroundColor:"#F1AB86",
    elevation:10
  },
  content:{
    //height:250,
    //backgroundColor:"#000000",
    justifyContent:"center",
  },
  square:{
    justifyContent:"center",
    alignItems:"center",
    width:83,
    height:83,
    backgroundColor:"#fff",
    borderRadius:16,
    marginTop:25
  },
  cost:{
    height:330,
    marginTop:0,
    alignItems:"center",
     //backgroundColor:"pink",
  },
  day:{
    height:150,
    alignItems:"center",
    justifyContent:"flex-start",
    //backgroundColor:"pink",
    
  },
  project:{
    marginTop:20,
    width:290,
    height:50,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    //backgroundColor:"black",
  },
  frame:{
      width:319,
      height:306,
      backgroundColor:"#fff",
      borderRadius:26,
      alignItems:"center",
      marginBottom:30
  },
  title:{
    width:325,
    height:30,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    paddingLeft:45
  },
  titleword:{
      fontSize:10,
      color:"#15A7CC"
  },
  label:{
    fontSize:10,
    color:"#F1AB86"
  },
  label2:{
    fontSize:10,
    color:"#F1AB86",
    paddingRight:5,
    paddingLeft:10
  },
  label3:{
    fontSize:10,
    color:"#F1AB86",
    paddingLeft:17
  },
  label4:{
    fontSize:10,
    color:"#F1AB86",
    paddingLeft:7
  },
  text:{
    width:296,
    height:30,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    paddingLeft:3,
    //backgroundColor:"red"
  },
  textword:{
    fontSize:13,
    color:"#2D2D2D"
  },
  textword2:{
    fontSize:13,
    color:"#2D2D2D",
    paddingLeft:11
  }
});
export default PayScreen;