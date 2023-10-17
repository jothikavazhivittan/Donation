import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useRef, useState } from 'react';
import Proptypes from 'prop-types';
import style from './style';
const Badge= props => {
  const [width,setWidth]=useState(0);
  const textRef=useRef(null);
  const paddingHorizontal=10;
 const tabWidth={
  width:(paddingHorizontal * 2 +width),
 }
  return (
    <View
    style={[style.badge, tabWidth]}>
      <Text 
      onTextLayout={event=>{
        setWidth(event.nativeEvent.lines[0].width)
      }}
      ref={textRef} 
      style={style.title}>{props.title}</Text>
    </View>
  );
};


Badge.proptypes = {
  title: Proptypes.string.isRequired,
};
export default Badge;

const styles = StyleSheet.create({});
