/* Two functions with parameter and argument (typed) */

export const addNumbers = (numberOne: number, numberTwo: number): number => {
return numberOne + numberTwo;
};

export const isAdult = (age: number): boolean => {
    return age >= 18;
};

export const celsiusToFahrenheit = (celsius: number): number => {
    return (celsius * 9) / 5 + 32;
};