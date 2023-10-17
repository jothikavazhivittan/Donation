import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Proptypes from 'prop-types';
import style from './style';
const Button = props => {
  return (
    <Pressable 
    disabled={props.isDisabled} 
    style={[style.button, props.isDisabled && style.disabled]} onPress={()=>props.onPress}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};
Button.default = {
  isDisabled: false,
  onPress:()=>{},
};
Button.proptypes = {
  title: Proptypes.string.isRequired,
  isDisabled: Proptypes.bool,
  onPress:Proptypes.func
};
export default Button;

const styles = StyleSheet.create({});
