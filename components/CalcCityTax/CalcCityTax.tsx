import { SubTitle } from '../Subtitle'
import { InputIncome } from './InputIncome'
import { Result } from './Result'

export const CalcCityTax: React.FC<{
    fathersIncome: number
    setFathersIncome: React.Dispatch<React.SetStateAction<number>>
    mothersIncome: number
    setMothersIncome: React.Dispatch<React.SetStateAction<number>>
    setFamilyCityTax: React.Dispatch<React.SetStateAction<number>>
}> = (props) => {
    const {
        fathersIncome,
        setFathersIncome,
        mothersIncome,
        setMothersIncome,
        setFamilyCityTax,
    } = props

    return (
        <>
            <SubTitle subtitle={'Step1 市民税の算出'}></SubTitle>
            <p>父、母の年収を入力してください。</p>
            <InputIncome
                label="父の年収"
                income={fathersIncome}
                setIncome={setFathersIncome}
            ></InputIncome>
            <InputIncome
                label="母の年収"
                income={mothersIncome}
                setIncome={setMothersIncome}
            ></InputIncome>
            <Result
                fathersIncome={fathersIncome}
                mothersIncome={mothersIncome}
                setFamilyCityTax={setFamilyCityTax}
            ></Result>
        </>
    )
}
