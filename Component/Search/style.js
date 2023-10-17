import {StyleSheet} from 'react-native';
import { colors } from '../../Constant/color';
const style=StyleSheet.create({
    searchInput:{
        flex:1,
        marginLeft:6,
        height:"auto",
        fontFamily:"Inter",
        fontSize:14,
        lineHeight:14,
        color:colors.textInput
    },
    searchInputContainer:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:16,
        backgroundColor:"#f4a261",
        height:50,
        borderRadius:50
    }
})
export default style;