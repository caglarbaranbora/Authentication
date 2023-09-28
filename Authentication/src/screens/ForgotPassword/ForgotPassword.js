import { View, Text, ScrollView} from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../../components/custominput/CustomInput'
import styles from './ForgotPasswordStyle'
import CustomButton from '../../components/custombutton/CustomButton'
import { useNavigation } from '@react-navigation/native'
const ForgotPassword = () => {


//not functional beacuse of no web service if you have one you can use it 

const navigation = useNavigation();
const [email, setEmail] = useState('');

const onSendPressed = (data) => {
    //validate code
    console.warn(data);
    navigation.navigate('NewPassword');
}
const onSignInPressed = () => {
    navigation.navigate('SignIn');
}
    return (
<ScrollView showsVerticalScrollIndicator={false}>
    <View style ={styles.root}> 
        <Text style ={styles.title}>Reset Your Password</Text>
        <CustomInput 
            value={email}
            setValue={setEmail}
            placeholder='E-Mail' 
            />
        <CustomButton
            title='SEND'
            onPress={onSendPressed}
            />
        <CustomButton
            title="Back to Sign in"
            onPress={onSignInPressed}
            type ='TERTIARY'
        />
    </View>
</ScrollView>
  )
}

export default ForgotPassword;