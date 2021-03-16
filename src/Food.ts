import Nutrition from './Nutrition';
import EmptyFoodNameError from './errors/EmptyFoodNameError';
import InvalidFoodAmountError from './errors/InvalidFoodAmountError';
import Units from './Units';

class Food {
    private currentValues: Nutrition;

    constructor(
        private readonly name: string,
        private readonly unit: Units,
        private readonly baseValues: Nutrition) {
        this.validateFoodName(name);
        this.validateFoodAmount(baseValues.amount);
        this.currentValues = { ...baseValues };
    }

    private validateFoodAmount(amount: number) {
        if (amount <= 0) {
            throw new InvalidFoodAmountError(amount);
        }
    }

    private validateFoodName(name: string) {
        if (!name) {
            throw new EmptyFoodNameError();
        }
    }

    getName(): string { return this.name; }

    getUnit(): string { return this.unit; }

    getBaseValues(): Nutrition { return this.baseValues; }

    getCurrentValues(): Nutrition {
        return this.currentValues;
    }

    setAmount(amount: number) {
        this.validateFoodAmount(amount);
        this.currentValues.amount = amount;
        this.currentValues.calories = this.calculateNutritionFromAmount('calories');
        this.currentValues.carbohydrate = this.calculateNutritionFromAmount('carbohydrate');
        this.currentValues.protein = this.calculateNutritionFromAmount('protein');
        this.currentValues.fat = this.calculateNutritionFromAmount('fat');
    }

    calculateNutritionFromAmount(nutrition: string) {
        const numerator = (this.currentValues.amount * this.baseValues[nutrition]);
        const denominator = (this.baseValues.amount)
        return Math.ceil(numerator / denominator);
    }
}

export default Food;