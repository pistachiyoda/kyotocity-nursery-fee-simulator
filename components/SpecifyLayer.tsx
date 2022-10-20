import React from 'react'
import { SubTitle } from './Subtitle'

export const SpecifyLayer: React.FC<{
    familyCityTax: number
    layer: number
    setLayer: React.Dispatch<React.SetStateAction<number>>
}> = (props) => {
    const { familyCityTax, layer, setLayer } = props
    const specifyLayer = (familyCityTax: number) => {
        if (familyCityTax <= 34999) return 4
        if (familyCityTax >= 35000 && familyCityTax <= 41999) return 5
        if (familyCityTax >= 42000 && familyCityTax <= 48599) return 6
        if (familyCityTax >= 48600 && familyCityTax <= 58099) return 7
        if (familyCityTax >= 58100 && familyCityTax <= 67599) return 8
        if (familyCityTax >= 67600 && familyCityTax <= 77100) return 9
        if (familyCityTax >= 77101 && familyCityTax <= 86999) return 10
        if (familyCityTax >= 87000 && familyCityTax <= 96999) return 11
        if (familyCityTax >= 97000 && familyCityTax <= 102599) return 12
        if (familyCityTax >= 102600 && familyCityTax <= 110899) return 13
        if (familyCityTax >= 110900 && familyCityTax <= 124999) return 14
        if (familyCityTax >= 125000 && familyCityTax <= 138599) return 15
        if (familyCityTax >= 138600 && familyCityTax <= 168999) return 16
        if (familyCityTax >= 169000 && familyCityTax <= 174599) return 17
        if (familyCityTax >= 174600 && familyCityTax <= 211200) return 18
        if (familyCityTax >= 211201 && familyCityTax <= 300999) return 19
        if (familyCityTax >= 301000 && familyCityTax <= 357999) return 20
        if (familyCityTax >= 358000 && familyCityTax <= 396999) return 21
        if (familyCityTax >= 397000) return 22
        return 0
    }

    setLayer(specifyLayer(familyCityTax))

    return (
        <>
            <SubTitle subtitle={'Step2 階層の決定'}></SubTitle>
            <div>{layer}</div>
        </>
    )
}
