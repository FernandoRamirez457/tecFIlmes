import React,{Fragment} from 'react'
import {Image,Text} from 'react-native'
import styles from './style';


export default function BannerFilmes(){

    const imagem = Math.floor(Math.random() * 4 +1); 

    return(

        <>
 <Text style = {styles.textBanner}> Em cartaz  </Text>

 <Image style = {styles.imageBanner} source = {require(`../../Img/${imagem}.jpg`)}/>
        </>
    );

} 