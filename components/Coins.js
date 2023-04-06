import { View, Text, Button, ScrollView,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Coin from './Coin';
import CustomButton from './CustomButton';

const Coins = ({nav}) => {
    const [coins,setCoins] = useState([]);
    async function getCoins() {
      if(coins.length == 0) {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
        .then(res=>res.json())
        .then(json=>setCoins(json));
      }
    }
  return (
    <ScrollView>
      <Text style={{textAlign:"center",fontSize:25,color:"#fff",fontFamily:"rb-bold"}}>Coins</Text>
      <CustomButton title='Get info coins' textColor="#fff" onPress={(getCoins)}/>
      {coins.map(coin=>(
        <Coin key={coin.id} coin={coin} nav={nav}/>
      ))}
    </ScrollView>
  )
}

export default Coins