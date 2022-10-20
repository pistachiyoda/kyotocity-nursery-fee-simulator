import { Typography } from '@mui/material'

export const Result: React.FC<{
    fathersIncome: number
    mothersIncome: number
    setFamilyCityTax: React.Dispatch<React.SetStateAction<number>>
}> = (props) => {
    const { fathersIncome, mothersIncome, setFamilyCityTax } = props
    const fathersCityTax = fathersIncome * 0.06
    const mothersCityTax = mothersIncome * 0.06
    const totalCityTax = fathersCityTax + mothersCityTax
    setFamilyCityTax(totalCityTax)
    return (
        <>
            <div>{totalCityTax}</div>
        </>
    )
}
