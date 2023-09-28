import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './CustomButtonStyle'


const CustomButton = ({title, onPress, type ='PRIMARY'}) => {
  return (
      <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>{/* custom styling for buttons */}
        <Text style={[styles.button, styles[`button_${type}`]]}>{title}</Text>
      </Pressable>
  )
}

export default CustomButton;