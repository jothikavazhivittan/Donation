import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Proptypes from 'prop-types'
import style from './style'

const Header = (props) => {
  const styleToApply=()=>{
    switch(props.type){
      case 1:
        return style.title1;
        case 2:
          return style.title2;
          case 3:
            return style.title3;
            default:
              return style.title1
    }
  }
  return (
    <View>
      <Text
       style={[styleToApply() ,props.color && {color:props.color}]} 
       numberOfLines={props.numberOfLines ? props.numberOfLines:null}>
        {props.title}</Text>
    </View>
  )
}
Header.default={
    title:'',
    type:1,
    color:"#000000"
}
Header.proptypes={
  title:Proptypes.string.isRequired,
  type:Proptypes.number,
  color:Proptypes.string,
  numberOfLines:Proptypes.number
}

export default Header

const styles = StyleSheet.create({})