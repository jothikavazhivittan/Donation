import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import style from './style';
const BackButton = (props) => {
  return (
    <View>
       <TouchableOpacity onPress={()=>props.onPress()} style={style.container}>
          <FontAwesomeIcon icon={faArrowLeft} />
       </TouchableOpacity>
    </View>
  )
}

BackButton.Proptypes={
    onPress:Proptypes.func.isRequired
}
export default BackButton

const styles = StyleSheet.create({})