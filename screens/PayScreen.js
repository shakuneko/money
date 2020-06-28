import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

const PayScreen = ({ navigation }) => {
  return (
  
    <View style={styles.container}>
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
      <View style={styles.content}>
          <View style={{width:"100%",alignItems:"center"}}>
          <View style={{width:330,flexDirection:"row",justifyContent:"space-around"}}>
              <View style={styles.square}>
                <Image style = {{width:45,height:45}} source = {require("../assets/images/point.png")}/>
                <Text style={{fontSize:12,color:"#707070",marginTop:5}}>紅利兌換</Text>
              </View>
              <View style={styles.square}>
                <Image style = {{width:45,height:45}} source = {require("../assets/images/envelope.png")}/>
                <Text style={{fontSize:12,color:"#707070",marginTop:5}}>紅包</Text>
              </View>
              <View style={styles.square}>
                <Image style = {{width:45,height:45}} source = {require("../assets/images/pay.png")}/>
                <Text style={{fontSize:12,color:"#707070",marginTop:5}}>繳費</Text>
              </View>
          </View>
          <View style={{width:330,flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity
                      onPress={() => navigation.push('TransferScreen')}>
              <View style={styles.square}>
                <Image style = {{width:45,height:45}} source = {require("../assets/images/transfer.png")}/>
                <Text style={{fontSize:12,color:"#707070",marginTop:5}}>轉帳</Text>
              </View>
            </TouchableOpacity>
              <View style={styles.square}>
                <Image style = {{width:45,height:45}} source = {require("../assets/images/withdrawal.png")}/>
                <Text style={{fontSize:12,color:"#707070",marginTop:5}}>無卡提款</Text>
              </View>
              <View style={styles.square}>
                <Image style = {{width:45,height:45}} source = {require("../assets/images/earn.png")}/>
                <Text style={{fontSize:12,color:"#707070",marginTop:5}}>收款</Text>
              </View>
              </View>
        </View>
        
          <View style={{height:30,alignItems:"center",justifyContent:"center"}}>
              <View style={{width:300,height:1.5,backgroundColor:"#F1AB86A1",borderRadius:10}}></View>
          </View>
      </View>
      <ScrollView >
      <View style={styles.cost}>
          <View style={{width:300,justifyContent:"flex-start"}}>
            <Text style={{fontSize:15,color:"#15A7CC"}}>06/26</Text>
          </View>
            <View style={styles.day}>
              <View style={styles.project}>
                <Image style = {{width:42,height:42}} source = {require("../assets/images/starbucks.png")}/>
                <Text style={{fontSize:15,color:"#707070"}}>星巴克-冷萃咖啡</Text>
                <Text style={{fontSize:15,color:"#707070"}}>$-150</Text>
              </View>
              <View style={styles.project}>
              <Image style = {{width:42,height:42}} source = {require("../assets/images/uniqlo.png")}/>
                <Text style={{fontSize:15,color:"#707070"}}>Uniqlo-衣服</Text>
                <Text style={{fontSize:15,color:"#707070"}}>$-2298</Text>
              </View>
            </View>

            <View style={{width:300,justifyContent:"flex-start"}}>
            <Text style={{fontSize:15,color:"#15A7CC"}}>06/27</Text>
          </View>
            <View style={styles.day}>
              <View style={styles.project}>
                <Image style = {{width:42,height:42}} source = {require("../assets/images/rainbow.png")}/>
                <Text style={{fontSize:15,color:"#707070"}}>Rainbow-褲子</Text>
                <Text style={{fontSize:15,color:"#707070"}}>$-790</Text>
              </View>
              <View style={styles.project}>
              <Image style = {{width:42,height:42}} source = {require("../assets/images/mrt.png")}/>
                <Text style={{fontSize:15,color:"#707070"}}>通勤</Text>
                <Text style={{fontSize:15,color:"#707070"}}>$-60</Text>
              </View>
            </View>
            

      </View>
      </ScrollView> 
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
    backgroundColor:"#F1AB86"
  },
  content:{
    height:250,
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
  }
});
export default PayScreen;