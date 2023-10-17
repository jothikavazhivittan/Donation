import {StyleSheet} from 'react-native';
import { colors } from '../../Constant/color';
const style=StyleSheet.create({
button:{
    backgroundColor:"#f4a261",
    height:55,
   justifyContent:"center",
   borderRadius:50,
   marginBottom:24
},
disabled:{
    opacity:0.5
},
title:{
    fontFamily:"Inter",
    fontSize:16,
    fontWeight:"500",
    lineHeight:19,
    color:colors.bule2,
    textAlign:"center"
}
})
export default style;