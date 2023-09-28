import { View, Text, ScrollView} from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../../components/custominput/CustomInput'
import styles from './NewPasswordStyle'
import CustomButton from '../../components/custombutton/CustomButton'
import { useNavigation } from '@react-navigation/native'



//not functional beacuse of no web service if you have one you can use it 

const NewPasswordScreen = () => {

const navigation = useNavigation();
const [code, setCode] = useState('');
const [password, setPassword] = useState('');
const [repeatPassword, setRepeatPassword] = useState('');

const onSubmitPressed = () => {
    navigation.navigate('HomeScreen');
}
const onSignInPressed = () => {
    navigation.navigate('SignIn');
}
    return (
<ScrollView showsVerticalScrollIndicator={false}>
    <View style ={styles.root}> 
        <Text style ={styles.title}>Reset Your Password</Text>

        <CustomInput 
            value={code}
            setValue={setCode}
            placeholder='Enter Your Confirmation Code' 
            />
        <CustomInput         
            value={password}
            setValue={setPassword}
            placeholder='Password' 
            secureTextEntry
        />
        <CustomInput 
            value={repeatPassword}
            setValue={setRepeatPassword}
            placeholder='Repeat Password' 
            secureTextEntry
        />
        <CustomButton
            title='Submit'
            onPress={onSubmitPressed}
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

export default NewPasswordScreen;