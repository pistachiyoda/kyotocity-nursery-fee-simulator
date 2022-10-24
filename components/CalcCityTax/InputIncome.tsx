import { InputAdornment, TextField } from '@mui/material'
import { calcIncomeBase } from '../../lib/calcIncomebase'

export const InputIncome: React.FC<{
    label: string
    income: number
    setIncome: React.Dispatch<React.SetStateAction<number>>
}> = (props) => {
    const { label, income, setIncome } = props
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIncome(calcIncomeBase(Number(event.target.value) * 10000))
    }

    const onChangeFathersIncome = () => {
        // console.log(income)
    }

    const handleBlur = () => {
        // console.log(income)
    }

    return (
        <TextField
            label={label}
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onKeyDown={onChangeFathersIncome}
            onBlur={handleBlur}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">万円</InputAdornment>
                ),
            }}
            type="number"
        />
    )
}
