import { InputAdornment, TextField } from '@mui/material'
import { calcIncomeBase } from '../../lib/calcIncomebase'
import { InfoPopOver } from './InfoPopOver'

export const InputIncome: React.FC<{
    label: string
    description: React.ReactNode
    setIncome: React.Dispatch<React.SetStateAction<number>>
}> = (props) => {
    const { label, description, setIncome } = props
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
            placeholder="0"
            onChange={handleChange}
            onKeyDown={onChangeFathersIncome}
            onBlur={handleBlur}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <InfoPopOver>{description}</InfoPopOver>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">万円</InputAdornment>
                ),
            }}
            type="number"
        />
    )
}
