export const calcBasicDeduction = (income: number) => {
    if (0 < income && income <= 24000000) return 430000
    if (24000000 < income && income <= 24500000) return 290000
    if (24500000 < income && income <= 25000000) return 150000
    return 0
}
