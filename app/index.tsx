import CalculatorButton from '@/componentes/CalculatorButton';
import { ThemeText } from '@/componentes/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { View } from 'react-native';

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>

            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>50 x 500</ThemeText>
                <ThemeText variant='h2'>250</ThemeText>
            </View>

            {/* Filas de botones */}
            <View style={globalStyles.row}>
                <CalculatorButton blackText label='C' onPress={() => console.log('C')} />
                <CalculatorButton blackText label='+/-' onPress={() => console.log('+/-')} />
                <CalculatorButton blackText label='del' onPress={() => console.log('del')} />
                <CalculatorButton label='÷' onPress={() => console.log('÷')} />
            </View>

        </View>
    )
}

export default CalculatorApp