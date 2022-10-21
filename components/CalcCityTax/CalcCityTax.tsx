import { InputIncome } from './InputIncome'
import { SubSubTitle } from '../SubSubTiltle'
import { InputDeduction } from './InputDeduction'
import { useEffect, useState } from 'react'
import { Stack } from '@mui/system'

type SetState<T> = React.Dispatch<React.SetStateAction<T>>

function min(a: number, b: number) {
    if (a > b) return b
    return a
}

function max(a: number, b: number) {
    if (a > b) return a
    return b
}

export const CalcCityTax: React.FC<{
    relationship: '父' | '母'
    myIncome: number
    setMyIncome: SetState<number>
    spouseIncome: number
    setIncomeDeduction: SetState<number>
}> = (props) => {
    const {
        relationship,
        myIncome,
        setMyIncome,
        spouseIncome,
        setIncomeDeduction,
    } = props

    const [basicDeduction, setBasicDeduction] = useState(0)
    const [spouseDeduction, setSpouseDeduction] = useState(0)
    const [specialSpouseDeduction, setSpecialSpouseDeduction] = useState(0)
    const [supportDeduction, setSupportDeduction] = useState(0)
    const [socialInsuranceDeduction, setSocialInsuranceDeduction] = useState(0)

    useEffect(() => {
        setIncomeDeduction(
            basicDeduction +
                spouseDeduction +
                specialSpouseDeduction +
                supportDeduction +
                socialInsuranceDeduction
        )
    }, [
        basicDeduction,
        setIncomeDeduction,
        specialSpouseDeduction,
        spouseDeduction,
        supportDeduction,
        socialInsuranceDeduction,
    ])

    return (
        <>
            <SubSubTitle
                subsubtitle={`${relationship}の年収を入力してください。`}
            ></SubSubTitle>
            <InputIncome
                label={`${relationship}の年収`}
                income={myIncome}
                setIncome={setMyIncome}
            />
            <SubSubTitle subsubtitle="所得控除を入力してください。"></SubSubTitle>
            <Stack spacing={2}>
                <InputDeduction
                    label="基礎控除"
                    setDeduction={setBasicDeduction}
                />
                <InputDeduction
                    label="配偶者控除"
                    disabled={
                        min(myIncome, spouseIncome) > 1030000 ||
                        max(myIncome, spouseIncome) > 10000000
                    }
                    setDeduction={setSpouseDeduction}
                />
                <InputDeduction
                    label="配偶者特別控除"
                    disabled={
                        min(myIncome, spouseIncome) <= 480000 ||
                        min(myIncome, spouseIncome) > 1330000 ||
                        max(myIncome, spouseIncome) > 10000000
                    }
                    setDeduction={setSpecialSpouseDeduction}
                />
                <InputDeduction
                    label="扶養控除"
                    setDeduction={setSupportDeduction}
                />

                <InputDeduction
                    label="社会保険料控除"
                    setDeduction={setSocialInsuranceDeduction}
                />
            </Stack>
        </>
    )
}
