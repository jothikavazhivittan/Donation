import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useRef, useState } from 'react';
import Proptypes from 'prop-types';
import style from './style';
const Tab = props => {
  const [width,setWidth]=useState(0);
  const textRef=useRef(null);
  const paddingHorizontal=30;
 const tabWidth={
  width:(paddingHorizontal * 2 +width),
 }
  return (
    <Pressable 
    style={[style.tab, props.isInactive && style.InactiveTab,tabWidth]}
     onPress={()=>props.onPress(props.tabId)} >
      <Text 
      onTextLayout={event=>{
        setWidth(event.nativeEvent.lines[0].width)
      }}
      ref={textRef} 
      style={[style.title, props.isInactive && style.InactiveTitle]}>{props.title}</Text>
    </Pressable>
  );
};
Tab.defaultprops = {
  isInactive: false,
  onPress:()=>{},
};
Tab.proptypes = {
  tabId:Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  isInactive: Proptypes.bool,
  onPress:Proptypes.func
};
export default Tab;

const styles = StyleSheet.create({});
