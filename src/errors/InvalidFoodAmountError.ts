export default class InvalidFoodAmountError extends Error {

    constructor(private readonly amount: number) {
        super(`Amount less than or equal to 0 is not allowed. Identified value ${amount}`);
    }
}