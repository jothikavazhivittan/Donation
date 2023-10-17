import { Pressable,TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import style from './style'
import Proptypes from 'prop-types'

const Search = (props) => {
    const textInputRef=useRef(null);
    const[search,setSearch]=useState('')
    const handledFocus=()=>{
       textInputRef.current.focus();
      }
      const handledSearch=(searchValue)=>{
        setSearch(searchValue);
        props.onSearch(searchValue)
      }
  return (
    <Pressable style={style.searchInputContainer} onPress={handledFocus}>
        <FontAwesomeIcon 
        icon={faSearch} 
        color='#14213d' 
        size={22}/>
        <TextInput 
       placeholder={props.placeholder}
       ref={textInputRef} 
       style={style.searchInput}
        value={search}
        onChangeText={value=>handledSearch(value)}
        />
    </Pressable>
  )
}
Search.defaultProps={
    onSearch:()=>{},
    placeholder:'Search'
}
Search.proptypes={
    onPress:Proptypes.func,
    placeholder:Proptypes.string
}

export default Search;

