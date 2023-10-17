import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import globalStyle from '../../assets/style/globalStyle';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../Component/Header/Header';
import style from './style';
import Search from '../../Component/Search/Search';
import Tab from '../../Component/Tab/Tab';
import {updateselectedCategoryId} from '../../redux/reducers/Categories';
import { updateSelectedDonationId } from '../../redux/reducers/Donation';
import SingleDonationItem from '../../Component/SingleDonationItem/SingleDonationItem';

import { Route } from '../../navigation/Route';
const Home = ({navigation}) => {
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);

  const user = useSelector(state => state.user);
  const disPathch = useDispatch();
  const[donationItems,setDonationItems]=useState([])
  const[categoryPage,setCategoryPage]=useState(1);
  const[categoryList,setCategoryList]=useState([]);
  const[isLoadingCategory,setIsloadingCategory]=useState(false)
  const categoryPageSize=4;

  console.log(donationItems);
  useEffect(()=>{
    const items=donations.items.filter(value=>
      value.categoryIds.includes(categories.selectedCategoryId),
      );
      setDonationItems(items)
  },[categories.selectedCategoryId])

  console.log('this yours donation page',donations);

  useEffect(()=>{
    setIsloadingCategory(true)
    setCategoryList
    (pagination(categories.categories,categoryPage,categoryPageSize))
    setCategoryPage(prev=>prev+1)
    setIsloadingCategory(false)
  },[])
  const pagination=(items,pageNumber,pageSize)=>{
    const startIndex=(pageNumber -1)*pageSize;
    const endIndex=startIndex+pageSize;
    if(startIndex >= items.length){
      return[];
    }
    return items.slice(startIndex,endIndex)
  }
  return (
    <SafeAreaView style={[globalStyle.backgrounColorwhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerTextIntro}>Hello...</Text>
            <View style={style.userName}>
              <Header
                title={user.firstName + ' ' + user.lastName[0] + '..👋'}
              />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedContainer}>
          <Image
            style={style.highlighted}
            source={require('../../assets/Image/highlight.jpg')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.selectCategory}>
          <Header title={'Selected Category'} type={2} />
        </View>
        <View style={style.category}>
          <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={()=>{
            if(isLoadingCategory){
              return
            }
            let newData=pagination(
              categories.categories,
              categoryPage,
              categoryPageSize
              );
              setIsloadingCategory(true)
            if(newData.length >0){
              setCategoryList(prevState=>[...prevState,...newData]);
              setCategoryPage(prevState=>prevState+1)
            }
            setIsloadingCategory(false)
          }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => disPathch(updateselectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        
        {donationItems.length > 0 &&(
        <View style={style.donationItemcontainer}>
        {donationItems.map(value=>{
          const categoryInformation=categories.categories.find(
            val=>val.categoryId === categories.selectedCategoryId,
            ) 
          return(
          <View key={value.donationItemId} style={style.singleDonationItems}>
          <SingleDonationItem
          onPress={selectedDonationId =>{
            disPathch(updateSelectedDonationId(selectedDonationId))
            navigation.navigate(Route.SingleDonationItem,{
              categoryInformation,
            })
          }}
          donationItemId={value.donationItemId}
          uri={value.image}
          donationTitle={value.name}
           badgeTitle={categoryInformation.name}
            price={parseFloat(value.price)}
          />
           </View>
           );
          })}
         </View>
         )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
