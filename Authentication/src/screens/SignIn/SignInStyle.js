import { StyleSheet , Dimensions} from "react-native";

export default StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,

    },
    logo:{
        width: Dimensions.get('window').width /3,
        height:Dimensions.get('window').height/3,
    },

});