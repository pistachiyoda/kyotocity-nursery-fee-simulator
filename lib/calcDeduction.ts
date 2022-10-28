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

// [900万円以下, 900万円超950万円以下, 950万円超1,000万円以下]
const SpecialSpouseDeductionList: [number, number, number][] = [
    [380000, 260000, 130000], // 48万円超　95万円以下
    [360000, 240000, 120000], // 95万円超　100万円以下
    [310000, 210000, 110000], // 100万円超　105万円以下
    [260000, 180000, 90000], // 105万円超　110万円以下
    [210000, 140000, 70000], // 110万円超　115万円以下
    [160000, 110000, 60000], // 115万円超　120万円以下
    [110000, 80000, 40000], // 120万円超　125万円以下
    [60000, 40000, 20000], // 125万円超　130万円以下
    [30000, 20000, 10000], // 130万円超　133万円以下
]

export const calcSpecialSpouseDeduction = (
    myIncome: number,
    spouseIncome: number
) => {
    const spouseDeduction = calcSpouseDeduction(myIncome, spouseIncome)
    if (
        spouseDeduction ||
        myIncome < spouseIncome ||
        myIncome > 10000000 ||
        spouseIncome > 1330000 ||
        myIncome <= 0
    )
        return 0

    const specifyMyincomeClass = (income: number) => {
        if (income < 9000000) return 0
        if (income < 9500000) return 1
        if (income < 10000000) return 2
        throw new Error('1000万以上はエラー')
    }

    if (480000 < spouseIncome && spouseIncome <= 950000)
        return SpecialSpouseDeductionList[0][specifyMyincomeClass(myIncome)]
    if (950000 < spouseIncome && spouseIncome <= 1000000)
        return SpecialSpouseDeductionList[1][specifyMyincomeClass(myIncome)]
    if (1000000 < spouseIncome && spouseIncome <= 1050000)
        return SpecialSpouseDeductionList[2][specifyMyincomeClass(myIncome)]
    if (1050000 < spouseIncome && spouseIncome <= 1100000)
        return SpecialSpouseDeductionList[3][specifyMyincomeClass(myIncome)]
    if (1100000 < spouseIncome && spouseIncome <= 1150000)
        return SpecialSpouseDeductionList[4][specifyMyincomeClass(myIncome)]
    if (1150000 < spouseIncome && spouseIncome <= 1200000)
        return SpecialSpouseDeductionList[5][specifyMyincomeClass(myIncome)]
    if (1200000 < spouseIncome && spouseIncome <= 1250000)
        return SpecialSpouseDeductionList[6][specifyMyincomeClass(myIncome)]
    if (1250000 < spouseIncome && spouseIncome <= 1300000)
        return SpecialSpouseDeductionList[7][specifyMyincomeClass(myIncome)]
    if (1300000 < spouseIncome && spouseIncome <= 1330000)
        return SpecialSpouseDeductionList[8][specifyMyincomeClass(myIncome)]

    return 0
}
