import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width/1.1,

        padding:15,
        marginVertical:5,

        alignItems:'center',
        borderRadius:5,

    },
    container_SECONDARY:{//custom styles are named container_....
        borderColor: '#3B71F3',
        borderWidth: 2,

    },

    container_PRIMARY:{
        backgroundColor:'#3B71F3',
    },

    container_TERTIARY:{

    },

    button: {
        fontWeight: 'bold',
        color:'white',
    },
    button_TERTIARY: {
        color:'gray',
    },
    button_SECONDARY: {
        color: '#3B71F3',
    },  
});