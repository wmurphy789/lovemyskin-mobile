import React from 'react'
import { Image, TextInput, View } from "react-native"
import styles from './styles'

// InputField with Icon
export const IconInput = ({ image, placeholder, text, onChangeText, customStyles }) => {
    return (
        <View style={[styles.iconInputContainer, customStyles]}>
            <Image source={image}
                resizeMode='contain'
                style={styles.iconInputIcon} />
            <TextInput
                placeholder={placeholder}
                value={text}
                onChangeText={onChangeText}
                style={styles.iconInputField} />
        </View>
    )
}

// Input field without Icon
export const SimpleInput = ({ placeholder, text, onChangeText, customStyles }) => {
    return (
        <View style={[styles.simpleInputContainer, customStyles]}>
            <TextInput
                value={text}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={styles.simpleInputField} />
        </View>
    )
}