import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Animated, {useAnimatedKeyboard, useAnimatedStyle} from 'react-native-reanimated';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

let firstInputHeight = 0

export default () => {

    const keyboard = useAnimatedKeyboard()
    const [contentHeight, setContentHeight] = useState(0);

    const [value, setValue] = useState('')


    const handleInputChange = (text) => {
        setValue(text)
    }

    const handleContentSizeChange = (contentWidth, contentHeight) => {
        setContentHeight(contentHeight);
        if(!value) firstInputHeight = contentHeight
    };

    const animatedKeyboardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: -keyboard.height.value
            }
        ]
    }))

    return (
        <>
            <SafeAreaView style={{backgroundColor: '#7D3C98', zIndex: 10}}/>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#dadada'}}>
                    <Animated.View style={[styles.bottomSection, {alignItems: (firstInputHeight !== contentHeight) ? 'flex-end' : 'center', paddingTop: (firstInputHeight !== contentHeight) ? 0 : 5, paddingBottom: (firstInputHeight !== contentHeight) ? 12 : 9}, animatedKeyboardStyle]}>
                        <Image
                            source={{uri: 'https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?w=1380&t=st=1719099956~exp=1719100556~hmac=7ba4e7627196dba0d5f34aebb8958d5125af9322a796fd298063288b9f673143'}}
                            style={{width: 40, height: 40, borderRadius: 50, marginRight: 12, borderWidth: 1, borderColor: '#dadada'}}
                            resizeMode={'contain'}
                        />
                        <TextInput 
                            value={value}
                            onChangeText={handleInputChange}
                            multiline
                            style={styles.input}
                            onContentSizeChange={(e) => handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)}
                            placeholder='Ingresa tu comentario'
                        />
                        <TouchableOpacity style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                            <Material 
                                name={'comment-arrow-right'}
                                size={22}
                                color={'#4B4B4B'}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            <SafeAreaView style={{backgroundColor: '#7D3C98', zIndex: 10}}/>
        </>
    ) 
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        maxHeight: 200,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    bottomSection: {
        minHeight: 55,
        height: 'auto',
        alignSelf: 'stretch',
        flexDirection: 'row',
        borderTopWidth: 0.5,
        backgroundColor: '#fff',
        borderTopColor: '#dadada',
        justifyContent: 'center',
        paddingLeft: 12,
        position: 'absolute',
        bottom: 0
    }
})

