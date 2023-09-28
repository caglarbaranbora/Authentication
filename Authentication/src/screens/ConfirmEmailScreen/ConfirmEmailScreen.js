import { View, Text, ScrollView} from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../../components/custominput/CustomInput'
import styles from './ConfirmEmailStyle'
import CustomButton from '../../components/custombutton/CustomButton'
import { useNavigation } from '@react-navigation/native'


//not functional beacuse of no web service if you have one you can use it 
const ConfirmEmailScreen = () => {
const navigation = useNavigation();
const [code, setCode] = useState('');

const onConfirmPressed = () => {
    navigation.navigate('HomeScreen');
}
const onSignInPressed = () => {
    navigation.navigate('SignIn');
}
const onResendPress = () => {
    console.warn('Resent');
}
    return (
<ScrollView showsVerticalScrollIndicator={false}>
    <View style ={styles.root}> 
        <Text style ={styles.title}>Confirm E-Mail</Text>
        <CustomInput 
            value={code}
            setValue={setCode}
            placeholder='Enter your confirmation code'
        />
        <CustomButton
            title='CONFIRM'
            onPress={onConfirmPressed}
        />
        <CustomButton
            title="Resend Code"
            onPress={onResendPress}
            type ='SECONDARY'
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

export default ConfirmEmailScreen;