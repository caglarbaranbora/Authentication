import { View, TextInput, Text } from 'react-native';
import React from 'react';
import styles from './CustomInputStyle';

const CustomInput = ({
  setValue,
  placeholder,
  secureTextEntry,
  value,
  error,
  }) => {
return (
  <View>
    <View style ={styles.container}> 
      <TextInput 
        onChangeText={setValue} 
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        style={[styles.input,
          error ?{borderColor: 'red', borderWidth: 1, borderRadius:5}  : null 
        ]} 
      /> 
    </View>
    {error && <Text style={{ color: 'red' }}>{error}</Text>}
  </View>
  );
}

export default CustomInput;