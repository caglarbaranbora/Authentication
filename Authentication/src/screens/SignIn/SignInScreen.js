import { View, Image, ScrollView, ActivityIndicator} from 'react-native';
import React, { useState } from 'react';

import CustomInput from '../../components/custominput/CustomInput';
import Logo from '../../../assets/images/user.png';
import styles from './SignInStyle';
import CustomButton from '../../components/custombutton/CustomButton';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import {loginApi} from '../../api/api'
import { loginFailure, loginStart, loginSuccess } from '../../features/auth/authSlice';

const SignInScreen = () => {
    
const dispatch = useDispatch();
const loading = useSelector((state) => state.login.loading);

// const [email, setEmail] = useState('');'/can use email while signing in
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigation = useNavigation();

const onSignInPressed = async () => {
    
    try{
        dispatch(loginStart());
        const response = await loginApi(username, password);
        console.log(response.data);//check output
        dispatch(loginSuccess(response.data));
        navigation.navigate('HomeScreen');
    }catch(error){
        //console.error(error) //check error
        dispatch(loginFailure());
        setError('Invalid Email or Password');
    }
};
const onForgotPassword = () => {
    navigation.navigate('NewPassword');
};
const onSignUpPressed = () => {
    navigation.navigate('SignUp');
};

return (
<ScrollView showsVerticalScrollIndicator={false}>
    <View style ={styles.root}> 
        <Image style = {styles.logo} source={Logo} resizeMode='contain'/>    
        <CustomInput 
            value={username}
            placeholder='Email' //can be used as email
            setValue={setUsername}
            error={error}
        />
        <CustomInput 
            value={password}
            placeholder='Password' 
            setValue={setPassword}
            secureTextEntry
            error={error}
        />
        <CustomButton
            title='SIGN IN'
            onPress={onSignInPressed}
        />

        {loading && <ActivityIndicator/>}
        
        <CustomButton
            title='Forgot Password?'
            onPress={onForgotPassword}
            type ='TERTIARY'
        />
        <CustomButton
            title="Don't have an account? Create One!"
            onPress={onSignUpPressed}
            type ='TERTIARY'
        />
    </View>
</ScrollView>
  )
}

export default SignInScreen;