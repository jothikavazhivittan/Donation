import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import globalStyle from '../../assets/style/globalStyle';
import BackButton from '../../Component/BackButton/BackButton';
import style from './style';
import Badge from '../../Component/Badge/Badge';
import Header from '../../Component/Header/Header';
import Button from '../../Component/Button/Button';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;
  console.log(route);
  return (
    <SafeAreaView style={[globalStyle.backgrounColorwhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header title={donationItemInformation.name} type={1} />
        <Text style={style.description}>
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          </Text>
      </ScrollView>
      <View style={style.button}>    
          <Button title={'Donate'}/>
         </View>

    </SafeAreaView>
  );
};

export default SingleDonationItem;

const styles = StyleSheet.create({});
