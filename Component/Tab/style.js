import {StyleSheet} from 'react-native';
import { colors } from '../../Constant/color';
const style=StyleSheet.create({
tab:{
    backgroundColor:"#f4a261",
    height:55,
    justifyContent:"center",
    borderRadius:50
},
InactiveTab:{
    backgroundColor:"#e9edc9"
},
title:{
    fontFamily:"Inter",
    fontSize:14,
    fontWeight:"500",
    lineHeight:17,
    color:colors.bule2,
    textAlign:"center"
},
InactiveTitle:{
color:"#79869F"
}
})
export default style;