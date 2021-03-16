import Food from './Food';
import Nutrition from './Nutrition';
import EmptyFoodNameError from './errors/EmptyFoodNameError';
import InvalidFoodAmountError from './errors/InvalidFoodAmountError';
import Units from './Units';

describe('Food', () => {
    test('create', () => {
        const baseValues: Nutrition = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 70
        };
        const food = new Food('rice', Units.GRAM, baseValues);
        expect(food).toBeDefined();
        expect(food.getName()).toEqual('rice');
        expect(food.getUnit()).toEqual(Units.GRAM);
        expect(food.getBaseValues()).toHaveProperty('amount');
        expect(food.getBaseValues().amount).toEqual(100);
        expect(food.getBaseValues()).toHaveProperty('fat');
        expect(food.getBaseValues().fat).toEqual(30);
        expect(food.getBaseValues().protein).toEqual(65);
        expect(food.getBaseValues().calories).toEqual(70);
        expect(food.getCurrentValues()).toEqual(food.getBaseValues());
    });

    test('create food with empty name', () => {
        const baseValues: Nutrition = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 70
        };
        expect(() => new Food('', Units.GRAM, baseValues)).toThrowError(EmptyFoodNameError);
    });

    test ('create food with zero amount', () => {
        const baseValues: Nutrition = {
            amount: 0,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 70
        }; 

        expect(() => new Food('rice', Units.GRAM, baseValues)).toThrowError(InvalidFoodAmountError);
    });

    test('create food and change amount', () => {
        const baseValues: Nutrition = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124
        };
        const food = new Food('rice', Units.GRAM, baseValues);
        food.setAmount(23);
        expect(food.getCurrentValues().amount).toEqual(23);
    });

    test('create food and assign amount with negative number', () => {
        const baseValues: Nutrition = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124
        };
        const food = new Food('rice', Units.GRAM, baseValues);
        expect(() => food.setAmount(-23))
        .toThrowError(InvalidFoodAmountError);
    });

    test('create food, change amount, calculate current calories', () => {
        const baseValues: Nutrition = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124
        };
        const food = new Food('rice', Units.GRAM, baseValues);
        food.setAmount(87);
        expect(food.getCurrentValues().calories).toEqual(108);
        expect(food.getCurrentValues().fat).toEqual(27);
        expect(food.getCurrentValues().carbohydrate).toEqual(35);
        expect(food.getCurrentValues().protein).toEqual(57);
    });
});