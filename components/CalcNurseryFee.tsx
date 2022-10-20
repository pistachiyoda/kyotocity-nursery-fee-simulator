import { specifyLayer } from '../lib/specifyLayer'
import { specifyNurseryFee } from '../lib/specifyNurseryFee'

export const CalcNurseryFee: React.FC<{ familyCityTax: number }> = (props) => {
    const { familyCityTax } = props
    const layer = specifyLayer(familyCityTax)
    const [a, b, c] = specifyNurseryFee(layer)
    return (
        <>
            <div>{a}</div>
            <div>{b}</div>
            <div>{c}</div>
        </>
    )
}
