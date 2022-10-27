export const calcBasicDeduction = (income: number) => {
    if (0 < income && income <= 24000000) return 430000
    if (24000000 < income && income <= 24500000) return 290000
    if (24500000 < income && income <= 25000000) return 150000
    return 0
}

export const calcSpouseDeduction = (myIncome: number, spouseIncome: number) => {
    if (
        myIncome < spouseIncome ||
        myIncome > 10000000 ||
        spouseIncome > 1030000 ||
        myIncome <= 0
    )
        return 0
    if (spouseIncome > 1030000) return 0
    if (myIncome <= 9000000) return 330000
    if (myIncome <= 9500000) return 220000
    if (myIncome <= 10000000) return 110000
    return 0
}
