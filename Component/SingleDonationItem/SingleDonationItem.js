import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import Proptypes from 'prop-types'
import style from './style'
import Badge from '../Badge/Badge'
import Header from '../Header/Header'

const SingleDonationItem = (props) => {
  return (
    <Pressable onPress={()=>{props.onPress(props.donationItemId)}}>
    <View>
    <View>
        <View style={style.badge}>
        <Badge title={props.badgeTitle}/>
        </View>
        <Image 
        resizeMode={'cover'}
        source={{uri:props.uri}}
        style={style.image}/>
    </View>
    
    <View style={style.donationInformation}>
    <Header
     title={props.donationTitle}
     type={3} 
     color={"#0A043C"}
     numberOfLines={1}/>
    </View>
    <View style={style.price}>
    <Header 
    title={'$' + props.price.toFixed(2)}
     type={3} 
     color={"#156CF7"}/>
    </View>
    </View>
    </Pressable>
  )
}
SingleDonationItem.defaultProps={
  onPress:()=>{},
}
SingleDonationItem.proptypes={
  donationItemId:Proptypes.number.isRequired,
    uri:Proptypes.string.isRequired,
    badgeTitle:Proptypes.string.isRequired,
    donationTitle:Proptypes.isRequired,
    price:Proptypes.number.isRequired,
    onPress:Proptypes.func.isRequired
    
}
export default SingleDonationItem

const styles = StyleSheet.create({})