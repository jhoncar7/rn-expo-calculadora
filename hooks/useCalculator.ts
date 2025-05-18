import { useEffect, useRef, useState } from "react";


enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷',
}
export const useCalculator = () => {

    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>(undefined);

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    }, [formula]);

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);


    const buildNumber = (numberString: string) => {

        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            if (numberString === '.') return setNumber(number + numberString);
            if (numberString === '0' && number.includes('.')) return setNumber(number + numberString);
            if (numberString !== '0' && !number.includes('.')) return setNumber(numberString);
            if (numberString === '0' && !number.includes('.')) return;

        }

        setNumber(number + numberString);
    }

    const clean = () => {
        setFormula('0');
        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
    }

    const toggleSing = () => {

        if (number.includes('-')) return setNumber(number.replace('-', ''));
        setNumber('-' + number);
    }

    const deleteLast = () => {

        let newNumber = number.slice(0, -1);

        if (newNumber === '' || newNumber === '-') return setNumber('0');

        setNumber(newNumber);
    }

    const setLastNumber = () => {
        calculateResult();
        if (number.endsWith('.')) setPrevNumber(number.slice(0, -1));

        setPrevNumber(number);
        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue); // NaN

        if (isNaN(num2)) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2;

            case Operator.subtract:
                return num1 - num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                return num1 / num2;

            default:
                throw new Error(`Operation ${operation} not implemented`);
        }
    };

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');
    };

    return {
        formula,
        number,
        prevNumber,

        buildNumber,
        clean,
        toggleSing,
        deleteLast,
        divideOperation,
        addOperation,
        subtractOperation,
        multiplyOperation,
        calculateSubResult,
        calculateResult,
    };
}
