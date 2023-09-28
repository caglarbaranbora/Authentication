import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        width: Dimensions.get('window').width /1.1,

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        marginVertical:5,
    },
    input:{
        paddingHorizontal:15,
    },

});