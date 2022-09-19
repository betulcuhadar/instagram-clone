import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm';

const SignupScreen = ({navigation}) => {
  return (
     <View style={styles.container}>
     <View style={styles.logoContainer}>
       <Image
         style={{ width: 100, height: 100 }}
         source={{
           uri: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
         }}
       />
     </View>
     <SignupForm navigation={navigation}/>
   </View>
  )
}

const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: "white",
       paddingTop: 50,
       paddingHorizontal: 12,
     },
     logoContainer: {
       alignItems: "center",
       marginTop: 60,
     },
   });
export default SignupScreen