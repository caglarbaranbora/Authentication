import { View, Text, ScrollView} from 'react-native'
import React, { useState } from 'react'

import CustomInput from '../../components/custominput/CustomInput'
import styles from './SignUpStyle'
import CustomButton from '../../components/custombutton/CustomButton'
import { useNavigation } from '@react-navigation/native'


import { useDispatch } from 'react-redux'
import { signUp } from '../../api/signUpApi';
import { clearUser, setUser } from '../../features/auth/signUpAuthSlice'

const SignUpScreen = () => {
const dispatch = useDispatch();
const navigation = useNavigation();

const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [repeatPassword, setRepeatPassword] = useState('');

const [usernameError, setUsernameError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [emailError, setEmailError] = useState('');


const onRegisterPressed = async () => {

    setUsernameError('');//error start clear
    setPasswordError('');
    setEmailError('');
    
      if (username.length < 3) {
        setUsernameError('Username must be at least 3 characters long');
        return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        setEmailError('Invalid email address');
        return;
    }
    if (password.length < 8) {
        setPasswordError('Password must be at least 8 characters long');
        return;
    }


    //PASSWORD REGEX IF YOU WANT TO
    //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+,\-./:;<=>?@[\\\]_`{|}~]).{8,}$/;
    //   if (!passwordRegex.test(password)) {
    //     setPasswordError('Passwords must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character');
    //     return;
    //   }

    if(password !== repeatPassword){
        setPasswordError('Passwords do not match');
        return;
    }
    try{
        dispatch(setUser());
        const response = await signUp(email,username, password);
        //console.log(response.data);//check output
        dispatch(setUser(response.data));
        navigation.navigate('SignIn');
    }catch(error){
        //console.error(error) //check error
        console.error('Sign Up Error: ', error)
    }   
}
const onSignInPressed = () => {
    navigation.navigate('SignIn');
}
const onTermsOfUsePressed = () => {
    console.warn('Terms Of Use');
}
const onPrivacyPressed = () => {
    console.warn('Privacy Policy');
}
    return (
<ScrollView showsVerticalScrollIndicator={false}>
    <View style ={styles.root}> 
        <Text style ={styles.title}>Create an Account</Text>
        <CustomInput 
            setValue={setUsername}
            placeholder='Full Name' 
            error={usernameError}
        />
        <CustomInput
            setValue={setEmail}
            placeholder='Email' 
            error={emailError}
        />
        <CustomInput         
            setValue={setPassword}
            placeholder='Password' 
            secureTextEntry
            error={passwordError}
        />
        <CustomInput 
            setValue={setRepeatPassword}
            placeholder='Repeat Password' 
            secureTextEntry
            error={ passwordError }
        />
        <CustomButton
            title='REGISTER'
            onPress={onRegisterPressed}
        />
        <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text style ={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text>{' '}
            and {' '}
            <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text>
        <CustomButton
            title="Have an account? Sign in!"
            onPress={onSignInPressed}
            type ='TERTIARY'
        />
    </View>
</ScrollView>
  )
}

export default SignUpScreen;