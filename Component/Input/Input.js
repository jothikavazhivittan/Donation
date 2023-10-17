import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React,{useState} from 'react'
import Proptypes from 'prop-types'
import style from './style'
const Input = (props) => {
    const[value,setValue]=useState('');
  return (
    <View>
        <Text style={style.label}>{props.label}</Text>
        <TextInput 
        placeholder={props.placeholder ? props.placeholder:null}
        secureTextEntry={props.secureTextEntry}
        style={style.input}
        value={value}
        keyboardType={props.keyboardType}
        onChangeText={val=>{setValue(val);props.onChangeText(val)}}/>
    </View>
  )
  
}
Input.default={
    onChangeText:()=>{},
    keyboardType:"default",
    secureTextEntry:false
}
Input.proptypes={
    keyboardType:Proptypes.string.isRequired,
    label:Proptypes.string.isRequired,
    placeholder:Proptypes.string,
    onChangeText:Proptypes.func,
    secureTextEntry:Proptypes.bool,
}
export default Input

const styles = StyleSheet.create({})