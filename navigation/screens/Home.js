import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import welcomeImg from '../../assets/images/aboutImg.png';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <Image source={welcomeImg} style={styles.image} />
      </View>
      <Text
        style={styles.text}
      >{`안녕하세요!\n2년차 프론트엔드 개발자 박진주입니다.\n제 포트폴리오를 소개할게요 :)`}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Portfolio')}>
        <Text style={styles.btnText}>보러가기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#96ffe3',
  },
  imgBox: {
    height: 200,
  },
  image: {
    height: '100%',
    objectFit: 'contain',
  },
  text: {
    marginVertical: '7%',
    textAlign: 'center',
    color: '#4e28ac',
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: -0.5,
  },
  button: {
    width: '60%',
    borderRadius: 10,
    paddingVertical: '4%',
    backgroundColor: '#e3f7ff',
    shadowColor: '#6f27f2',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1,
  },
  btnText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 15,
    color: '#4e28ac',
  },
});
