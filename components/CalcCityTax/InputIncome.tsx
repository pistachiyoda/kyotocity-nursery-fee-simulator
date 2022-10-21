import { InputAdornment, TextField } from '@mui/material'

export const InputIncome: React.FC<{
    label: string
    income: number
    setIncome: React.Dispatch<React.SetStateAction<number>>
}> = (props) => {
    const { label, income, setIncome } = props
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIncome(Number(event.target.value))
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
                    <InputAdornment position="end">円</InputAdornment>
                ),
            }}
            type="number"
        />
    )
}
