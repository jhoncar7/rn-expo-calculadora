import { ThemeText } from '@/componentes/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { View } from 'react-native';

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>

            <ThemeText variant='h1'>50 x 500</ThemeText>
            <ThemeText variant='h2'>250</ThemeText>

            <ThemeText
                numberOfLines={1}
            >
            </ThemeText>
        </View>
    )
}

export default CalculatorApp