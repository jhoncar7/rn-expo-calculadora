import CalculatorButton from '@/componentes/CalculatorButton';
import { ThemeText } from '@/componentes/ThemeText';
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { View } from 'react-native';

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>

            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>50 x 5000</ThemeText>
                <ThemeText variant='h2'>250</ThemeText>
            </View>

            {/* Filas de botones */}
            <View style={globalStyles.row}>
                <CalculatorButton color={Colors.lightGray} blackText label='C' onPress={() => console.log('C')} />
                <CalculatorButton color={Colors.lightGray} blackText label='+/-' onPress={() => console.log('+/-')} />
                <CalculatorButton color={Colors.lightGray} blackText label='del' onPress={() => console.log('del')} />
                <CalculatorButton color={Colors.orange} label='÷' onPress={() => console.log('÷')} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='7' onPress={() => console.log('C')} />
                <CalculatorButton label='8' onPress={() => console.log('+/-')} />
                <CalculatorButton label='9' onPress={() => console.log('del')} />
                <CalculatorButton color={Colors.orange} label='x' onPress={() => console.log('÷')} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='4' onPress={() => console.log('C')} />
                <CalculatorButton label='5' onPress={() => console.log('+/-')} />
                <CalculatorButton label='6' onPress={() => console.log('del')} />
                <CalculatorButton color={Colors.orange} label='-' onPress={() => console.log('÷')} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='1' onPress={() => console.log('C')} />
                <CalculatorButton label='2' onPress={() => console.log('+/-')} />
                <CalculatorButton label='3' onPress={() => console.log('del')} />
                <CalculatorButton color={Colors.orange} label='+' onPress={() => console.log('÷')} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton doubleSize label='0' onPress={() => console.log('C')} />
                <CalculatorButton label='.' onPress={() => console.log('+/-')} />
                <CalculatorButton color={Colors.orange} label='=' onPress={() => console.log('÷')} />
            </View>

        </View>
    )
}

export default CalculatorApp