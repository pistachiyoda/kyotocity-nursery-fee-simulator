// 保育標準時間は9時間で計算
// [保育園（所）、幼保連携型及び保育所型認定子供園, 小規模,幼稚園型認定こども園
export const specifyNurseryFee = (layer: number): [number, number, number] => {
    if (layer === 4) return [6600, 5800, 6100]
    if (layer === 5) return [7400, 6400, 6800]
    if (layer === 6) return [7800, 6700, 7200]
    if (layer === 7) return [13800, 12500, 12700]
    if (layer === 8) return [17600, 15100, 16200]
    if (layer === 9) return [21700, 18700, 20000]
    if (layer === 10) return [22800, 20500, 21000]
    if (layer === 11) return [23800, 23600, 22000]
    if (layer === 12) return [24900, 24700, 23000]
    if (layer === 13) return [31200, 28400, 28800]
    if (layer === 14) return [32300, 31600, 29800]
    if (layer === 15) return [33100, 32900, 30600]
    if (layer === 16) return [39200, 35800, 36200]
    if (layer === 17) return [45200, 37000, 41700]
    if (layer === 18) return [51600, 38900, 47600]
    if (layer === 19) return [53400, 40300, 49300]
    if (layer === 20) return [61600, 43400, 56900]
    if (layer === 21) return [67100, 46600, 61900]
    if (layer === 22) return [83100, 58000, 76700]
    return [0, 0, 0]
}
