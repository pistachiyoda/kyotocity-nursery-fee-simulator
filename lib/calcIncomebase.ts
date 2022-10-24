const truncateLessThan1000 = (num: number) => {
    return Math.floor(num / 1000) * 1000
}

export const calcIncomeBase = (originalncome: number) => {
    if (551000 <= originalncome && originalncome < 1619000)
        return originalncome - 550000
    if (1619000 <= originalncome && originalncome < 1620000) return 1069000
    if (1620000 <= originalncome && originalncome < 1622000) return 1070000
    if (1622000 <= originalncome && originalncome < 1624000) return 1072000
    if (1624000 <= originalncome && originalncome < 1628000) return 1074000
    if (1628000 <= originalncome && originalncome < 1800000)
        return truncateLessThan1000(originalncome / 4) * 2.4 + 100000
    if (1800000 <= originalncome && originalncome < 3600000)
        return truncateLessThan1000(originalncome / 4) * 2.8 + 80000
    if (3600000 <= originalncome && originalncome < 6600000)
        return truncateLessThan1000(originalncome / 4) * 3.2 + 440000
    if (6600000 <= originalncome && originalncome < 8500000)
        return originalncome * 0.9 + 1100000
    if (8500000 <= originalncome) return originalncome - 1950000
    return 0
}
