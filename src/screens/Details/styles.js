import { StyleSheet } from "react-native";


const styles= StyleSheet.create({
 
    viewContainer:{
        flex:1,

        backgroundColor: '#141a29', 
        padding:20  
    },
    imageBanner: {
        width: '100%',
        height: 400,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textBanner:{
        fontSize:30,
        color:"white",
        marginTop: 15,
        
        fontWeight:'Bold',
        
    },
    backButton:{
        width:50,
        height:50,
        backgroundColor:'rgba(25,26,48,0.8)',
         borderRadius:27,
         marginTop:-380,
         alignItems:'center',
         justifyContent:"center",
         marginLeft:20
        
    }
})

export default styles;
