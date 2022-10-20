export const calcCityTax = (
    income: number,
    totalIncomeDeduction: number,
    totalDirectDedution: number
) => {
    return (income - totalIncomeDeduction) * 0.06 - totalDirectDedution
}
