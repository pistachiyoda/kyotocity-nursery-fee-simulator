import { TextField } from '@mui/material'
import { Box } from '@mui/system'

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
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <TextField
                id="outlined-basic"
                label={label}
                variant="outlined"
                fullWidth
                onChange={handleChange}
                onKeyDown={onChangeFathersIncome}
                onBlur={handleBlur}
                sx={{ mb: 1 }}
            />
            <Box
                sx={{
                    ml: 1,
                    width: '70px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    mb: 1,
                }}
            >
                円
            </Box>
        </Box>
    )
}
