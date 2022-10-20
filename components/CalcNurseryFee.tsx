import { SubTitle } from './Subtitle'

export const CalcNurseryFee: React.FC<{ layer: number }> = (props) => {
    const { layer } = props

    // 保育標準時間は9時間で計算
    // 保育園（所）、幼保連携型及び保育所型認定子供園
    const specifyNurseryFee_A = (layer: number) => {
        if (layer === 4) return 6600
        if (layer === 5) return 7400
        if (layer === 6) return 7800
        if (layer === 7) return 13800
        if (layer === 8) return 17600
        if (layer === 9) return 21700
        if (layer === 10) return 22800
        if (layer === 11) return 23800
        if (layer === 12) return 24900
        if (layer === 13) return 31200
        if (layer === 14) return 32300
        if (layer === 15) return 33100
        if (layer === 16) return 39200
        if (layer === 17) return 45200
        if (layer === 18) return 51600
        if (layer === 19) return 53400
        if (layer === 20) return 61600
        if (layer === 21) return 67100
        if (layer === 22) return 83100
        return 0
    }

    // 地域型保育事業（小規模保育事業所等）
    const specifyNurseryFee_B = (layer: number) => {
        if (layer === 4) return 5800
        if (layer === 5) return 6400
        if (layer === 6) return 6700
        if (layer === 7) return 12500
        if (layer === 8) return 15100
        if (layer === 9) return 18700
        if (layer === 10) return 20500
        if (layer === 11) return 23600
        if (layer === 12) return 24700
        if (layer === 13) return 28400
        if (layer === 14) return 31600
        if (layer === 15) return 32900
        if (layer === 16) return 35800
        if (layer === 17) return 37000
        if (layer === 18) return 38900
        if (layer === 19) return 40300
        if (layer === 20) return 43400
        if (layer === 21) return 46600
        if (layer === 22) return 58000
        return 0
    }

    // 幼稚園型認定こども園
    const specifyNurseryFee_C = (layer: number) => {
        if (layer === 4) return 6100
        if (layer === 5) return 6800
        if (layer === 6) return 7200
        if (layer === 7) return 12700
        if (layer === 8) return 16200
        if (layer === 9) return 20000
        if (layer === 10) return 21000
        if (layer === 11) return 22000
        if (layer === 12) return 23000
        if (layer === 13) return 28800
        if (layer === 14) return 29800
        if (layer === 15) return 30600
        if (layer === 16) return 36200
        if (layer === 17) return 41700
        if (layer === 18) return 47600
        if (layer === 19) return 49300
        if (layer === 20) return 56900
        if (layer === 21) return 61900
        if (layer === 22) return 76700
        return 0
    }

    return (
        <>
            <SubTitle subtitle={'Step3 保育料の算出'}></SubTitle>
            <div>{specifyNurseryFee_A(layer)}</div>
            <div>{specifyNurseryFee_B(layer)}</div>
            <div>{specifyNurseryFee_C(layer)}</div>
        </>
    )
}
