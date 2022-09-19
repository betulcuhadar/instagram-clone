import { View, Text} from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'
import { SafeAreaView } from 'react-native-safe-area-context'

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1}}>
          <AddNewPost navigation={navigation}/>
    </SafeAreaView>
  )
}


export default NewPostScreen