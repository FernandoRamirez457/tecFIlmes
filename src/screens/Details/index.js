import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import {View, Text,Image, TouchableOpacity} from 'react-native'
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import { Ionicons } from '@expo/vector-icons';


// instalar a biblioteca das starts : npm install react-native-stars --save

export default function Details(){
 const route = useRoute();
 const navigation = useNavigation();
    return(
            <View style ={styles.viewContainer}>

      
          

         
          <Image resizeMode='stretch' style={styles.imageBanner} source ={require(`../../Img/${route.params.imagem}`)} />
          <TouchableOpacity style ={styles.backButton} onPress={navigation.goBack}> 
          <AntDesign  name="leftcircle" size={35} color="white" /> 
          </TouchableOpacity>
          <View style={{marginTop:350}}>
          <Stars
            disabled = {true}
            default = {route.params?.nota}
            count = {10}
            half = {true}
            starSize ={20}
            fullStar = {<Ionicons name='md-star' size={24} color='#E7A74e'/>}
            emptyStar = {<Ionicons name='md-star-outline' size={24} color='#E7A74e'/>}
            halfStar = {<Ionicons name='md-star-half' size={24} color='#E7A74e'/>}>

            </Stars>
            </View>
          <Text style ={styles.textBanner}> {route.params?.titulo}</Text>
            </View> 
    
        )


}
