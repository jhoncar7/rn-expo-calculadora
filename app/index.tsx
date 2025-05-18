import CalculatorButton from '@/componentes/CalculatorButton';
import { ThemeText } from '@/componentes/ThemeText';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { View } from 'react-native';

const CalculatorApp = () => {

    const {
        formula,
        prevNumber,
        buildNumber,
        clean,
        toggleSing,
        deleteLast,
        divideOperation,
        addOperation,
        subtractOperation,
        multiplyOperation,
        calculateResult,
    } = useCalculator();
    return (
        <View style={globalStyles.calculatorContainer}>

            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>{formula}</ThemeText>
                {
                    formula === prevNumber
                        ? <ThemeText variant='h2'> </ThemeText>
                        : <ThemeText variant='h2'>{prevNumber}</ThemeText>
                }

            </View>

            {/* Filas de botones */}
            <View style={globalStyles.row}>
                <CalculatorButton color={Colors.lightGray} blackText label='C' onPress={clean} />
                <CalculatorButton color={Colors.lightGray} blackText label='+/-' onPress={toggleSing} />
                <CalculatorButton color={Colors.lightGray} blackText label='del' onPress={deleteLast} />
                <CalculatorButton color={Colors.orange} label='÷' onPress={divideOperation} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='7' onPress={() => buildNumber('7')} />
                <CalculatorButton label='8' onPress={() => buildNumber('8')} />
                <CalculatorButton label='9' onPress={() => buildNumber('9')} />
                <CalculatorButton color={Colors.orange} label='x' onPress={multiplyOperation} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='4' onPress={() => buildNumber('4')} />
                <CalculatorButton label='5' onPress={() => buildNumber('5')} />
                <CalculatorButton label='6' onPress={() => buildNumber('6')} />
                <CalculatorButton color={Colors.orange} label='-' onPress={subtractOperation} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='1' onPress={() => buildNumber('1')} />
                <CalculatorButton label='2' onPress={() => buildNumber('2')} />
                <CalculatorButton label='3' onPress={() => buildNumber('3')} />
                <CalculatorButton color={Colors.orange} label='+' onPress={addOperation} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton doubleSize label='0' onPress={() => buildNumber('0')} />
                <CalculatorButton label='.' onPress={() => buildNumber('.')} />
                <CalculatorButton color={Colors.orange} label='=' onPress={calculateResult} />
            </View>

        </View>
    )
}

export default CalculatorApp