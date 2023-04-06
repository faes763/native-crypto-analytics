import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const Coin = ({coin,nav}) => {
    const {name,symbol,image,current_price,high_24h,low_24h,price_change_24h} = coin;
    const loadScene = ()=>{
      nav.navigate("Coin",coin);
    }
  return (
    <TouchableOpacity style={{padding:10,paddingRight:0,borderWidth:1,borderRadius: 14,margin:10,borderColor:"#fff"}} onPress={loadScene}>
      <View style={styles.box}>
        <View style={styles.container}>
          <Image source={{
            width:25,
            height:25,
            uri:image
          }}/>
          <Text style={{fontSize:16,color:"#fff"}}>{name}</Text>
        </View>
        <View>
          <Text style={{textAlign:"right",paddingRight:25,color:"#fff"}}>Price: {current_price}$</Text>
          <Text style={{fontSize:12,textAlign:'right',paddingRight:7,color:"#fff"}}>{price_change_24h}$ {price_change_24h > 0 ?  <AntDesign name="caretup" color="#00FF00" size={16}  />: <AntDesign name="caretdown" size={16} color="red" />}</Text>
        </View>
        
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  box: {
    display:"flex",
    flexDirection: "row",
    gap:7,
    alignItems: 'center',
    justifyContent:"space-between",
    

  },
  container: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:7
  }
});
export default Coin