import { InputAdornment, TextField, TextFieldProps } from '@mui/material'
import React from 'react'

export const InputDeduction: React.FC<
    TextFieldProps & {
        setDeduction: React.Dispatch<React.SetStateAction<number>>
    }
> = ({ setDeduction, ...textFieldProps }) => {
    return (
        <TextField
            variant="outlined"
            fullWidth
            type="number"
            onChange={(e) =>
                e.target.value && setDeduction(Number(e.target.value))
            }
            {...textFieldProps}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">円</InputAdornment>
                ),
            }}
        />
    )
}
