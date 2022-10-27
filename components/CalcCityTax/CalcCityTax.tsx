import { InputIncome } from './InputIncome'
import { SubSubTitle } from '../SubSubTiltle'
import { InputDeduction } from './InputDeduction'
import { useEffect, useState } from 'react'
import { Stack } from '@mui/system'
import {
    calcBasicDeduction,
    calcSpouseDeduction,
} from '../../lib/calcDeduction'

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
        console.log(myIncome)
        console.log(calcBasicDeduction(myIncome))
        setBasicDeduction(calcBasicDeduction(myIncome))
        setSpouseDeduction(calcSpouseDeduction(myIncome, spouseIncome))
    }, [myIncome, spouseIncome])

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
                    disabled={myIncome > 25000000}
                    value={basicDeduction / 10000 || ''}
                    placeholder="0"
                    description={`【合計所得金額が2,500万円以下の納税義務者が対象】
                    2,400万円以下：43万円
                    2,400万円超2,450万円以下：29万円
                    2,450万円超2,500万円以下：15万円`}
                />
                <InputDeduction
                    label="配偶者控除"
                    disabled={
                        min(myIncome, spouseIncome) > 1030000 ||
                        max(myIncome, spouseIncome) > 10000000
                    }
                    value={spouseDeduction / 10000 || ''}
                    setDeduction={setSpouseDeduction}
                    placeholder="0"
                    description={`【本人の前年の合計所得金額が1,000万円以下、かつ生計を一にする配偶者の前年の年間の合計所得金額が48万円以下（令和元年分以前は38万円以下）であること。（給与のみの場合は給与収入が103万円以下）】
                    本人の合計所得金額900万円以下の場合：33万円
                    本人の合計所得金額900万円超950万円以下の場合：22万円
                    本人の合計所得金額950万円超1000万円以下の場合：11万円`}
                />
                <InputDeduction
                    label="配偶者特別控除"
                    disabled={
                        min(myIncome, spouseIncome) <= 480000 ||
                        min(myIncome, spouseIncome) > 1330000 ||
                        max(myIncome, spouseIncome) > 10000000
                    }
                    setDeduction={setSpecialSpouseDeduction}
                    description={`【本人の前年の合計所得金額が1，000万円以下、かつ生計を一にする配偶者の前年の合計所得金額が48万円超133万円以下（こちらは配偶者控除と違い給与のみみたいな制限はなし）※夫婦のどちらか一方のみでの適用】
                    本人の合計所得金額900万円以下の場合
                    配偶者の合計所得金額
                    48万円超100万円以下・・・33万円
                    100万円超105万円以下・・・31万円
                    105万円超110万円以下・・・26万円
                    110万円超115万円以下・・・21万円
                    115万円超120万円以下・・・16万円
                    120万円超125万円以下・・・11万円
                    125万円超130万円以下・・・6万円
                    130万円超133万円以下・・・3万円
                    133万円超・・・・・・・・・・・・・ 0円
    
                    本人の合計所得金額900万円超950万円以下の場合
                    配偶者の合計所得金額
                    48万円超100万円以下・・・22万円
                    100万円超105万円以下・・・21万円
                    105万円超110万円以下・・・18万円
                    110万円超115万円以下・・・14万円
                    115万円超120万円以下・・・11万円
                    120万円超125万円以下・・・8万円
                    125万円超130万円以下・・・4万円
                    130万円超133万円以下・・・2万円
                    133万円超・・・・・・・・・・・・・ 0円
    
                    本人の合計所得金額950万円超1000万円以下の場合
                    配偶者の合計所得金額
                    48万円超105万円以下・・・11万円
                    105万円超110万円以下・・・9万円
                    110万円超115万円以下・・・7万円
                    115万円超120万円以下・・・6万円
                    120万円超125万円以下・・・4万円
                    125万円超130万円以下・・・2万円
                    130万円超133万円以下・・・1万円
                    133万円超・・・・・・・・・・・・・ 0円`}
                />
                <InputDeduction
                    label="扶養控除"
                    setDeduction={setSupportDeduction}
                    description={`【本人と生計を一にし，前年の合計所得金額が48万円以下の年齢16歳以上の扶養親族がある場合】
                    1人につき33万円`}
                />
                <InputDeduction
                    label="社会保険料控除"
                    setDeduction={setSocialInsuranceDeduction}
                    description={`【本人，生計を一にする配偶者その他の親族の社会保険料を支払った場合（給与から控除された場合を含む。）】
                    支払った金額の全額`}
                />
            </Stack>
        </>
    )
}
