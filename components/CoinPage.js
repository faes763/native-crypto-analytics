import { View, Text, Image, Button,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';
import CustomButton from './CustomButton';
const CoinPage = ({route}) => {
    const navigation = useNavigation();
    
    const [translate,setTranstate] = useState(false);
    const coin = route.params;
    React.useLayoutEffect(() => {
      navigation.setOptions({
        title: coin.name,
      });
    }, [navigation]);
    let {price_change_24h} = coin;
    if(Math.trunc(coin.price_change_24h*1000000)/1000000 != 0) price_change_24h = Math.trunc(coin.price_change_24h*10000)/10000;
    if(translate) {
      return <View style={styles.box}>
        <View style={styles.sym}>
          <Shadow style={{borderRadius:50}} distance="5" startColor='#ccc'>
            <Image style={{borderRadius:50}} source={{
                width:50,
                height:50,
                uri:coin.image
            }}/> 
          </Shadow>
          
          <View style={styles.test}>
            <Text style={styles.h1}>{coin.name}</Text>
            <Text style={[styles.h1, {color:"#898989"}]}>{coin.symbol}</Text>
          </View>
        </View>
         
          <Text style={styles.white}>Цена: {coin.current_price}$</Text>
          <Text style={styles.white}>Цена за последние 24ч: {price_change_24h} {coin.price_change_24h > 0 ?  <AntDesign name="caretup" color="#00FF00" size={16}  />: <AntDesign name="caretdown" size={16} color="red" />}</Text>
          <Text style={styles.white}>Высочайшая цена за 24ч: {coin.high_24h} <AntDesign name="caretup" color="#00FF00" size={16}/></Text>
          <Text style={styles.white}>Минимальная цена за 24ч: {coin.low_24h} <AntDesign name="caretdown" size={16} color="red"/></Text>
          
          <Text style={styles.white}>Количество совершенных транзакций: {coin.total_volume}</Text>
          <View>
            <Text style={styles.white}>Наивысшая цена за всё время: {coin.ath}</Text>
            <Text style={styles.white}>Насколько отличается цена: {coin.ath_change_percentage}%</Text>
            <Text style={styles.white}>День наивысшей цены: {coin.ath_date}</Text>
          </View>
          
          <View>
            <Text style={styles.white}>Наименьшая цена: {coin.atl}</Text>
            <Text style={styles.white}>Насколько отличается цена: {coin.atl_change_percentage}%</Text>
            <Text style={styles.white}>День наименьшей цены: {coin.atl_date}</Text>
          </View>
          
    
          {coin.max_supply && <Text style={styles.white}>Выпущено токенов: {coin.max_supply}</Text>}
          <Text style={styles.white}>Оборот токенов {Math.trunc(coin.circulating_supply)}</Text>
    
          <Text style={styles.white}>Данные были обновлены: {coin.last_updated}</Text>
          <CustomButton title="Translate" textColor="#fff" onPress={(()=>{setTranstate(prev=>{return !prev})})}/>

        </View>
    }
    else {
      return (
        <View style={styles.box}>
          <View style={styles.sym}>
          <Shadow style={{borderRadius:50}} distance="5" startColor='#ccc'>
            <Image style={{borderRadius:50}} source={{
                width:50,
                height:50,
                uri:coin.image
            }}/> 
          </Shadow>
            <View style={styles.test}>
              <Text style={styles.h1}>{coin.name}</Text>
              <Text style={[styles.h1, {color:"#898989"}]}>{coin.symbol}</Text>
            </View>
          </View>
          <Text style={styles.white}>Price: {coin.current_price}$</Text>
          
          <Text style={styles.white}>changed price 24h: {price_change_24h} {coin.price_change_24h > 0 ?  <AntDesign name="caretup" color="#00FF00" size={16}  />: <AntDesign name="caretdown" size={16} color="red" />}</Text>
          <Text style={styles.white}>Highest price 24h: {coin.high_24h} <AntDesign name="caretup" color="#00FF00" size={16}/></Text>
          <Text style={styles.white}>Lowest price 24h: {coin.low_24h} <AntDesign name="caretdown" size={16} color="red"/></Text>
          
          <Text style={styles.white}>All transactions count: {coin.total_volume}</Text>
          <View>
            <Text style={styles.white}>Ath price: {coin.ath}</Text>
            <Text style={styles.white}>Ath change percentage: {coin.ath_change_percentage}%</Text>
            <Text style={styles.white}>Ath date: {coin.ath_date}</Text>
          </View>
          
          <View>
            <Text style={styles.white}>Atl price: {coin.atl}</Text>
            <Text style={styles.white}>Atl change percentage: {coin.atl_change_percentage}%</Text>
            <Text style={styles.white}>Atl date: {coin.atl_date}</Text>
          </View>
          
    
          {coin.max_supply && <Text style={styles.white}>Supply coin: {coin.max_supply}</Text>}
          <Text style={styles.white}>Circulating supply {Math.trunc(coin.circulating_supply)}</Text>
    
          <Text style={styles.white}>Last update {coin.last_updated}</Text>
          <CustomButton title="Translate" textColor="#fff" onPress={(()=>{setTranstate(prev=>{return !prev})})}/>
        </View>
      )
    } 
}
const styles = StyleSheet.create({
  box: {
    display:"flex",
    height:"100%",
    flexDirection: "column",
    gap:7,
    padding:10,
    backgroundColor:"#121212",
  },
  white: {
    color:"#fff",
    fontFamily:"rb-reg"
  },
  h2: {
    fontSize: 16,
  },
  h1: {
    fontSize:24,
    color:"#fff"
  },
  sym: {
    display:"flex",
    borderWidth:1,
    borderRadius:30,
    borderColor:"#fff",
    flexDirection: "row",
    width:"100%",
    justifyContent:"space-between",
    padding:10,
    alignItems: "center"
  },
  test: {
    display: "flex",
    flexDirection: "row",
    gap:5
  }
});


export default CoinPage;
