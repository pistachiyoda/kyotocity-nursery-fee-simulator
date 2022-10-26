import { InputAdornment, TextField, TextFieldProps } from '@mui/material'
import React from 'react'
import { InfoPopOver } from './InfoPopOver'

export const InputDeduction: React.FC<
    TextFieldProps & {
        setDeduction: React.Dispatch<React.SetStateAction<number>>
        description: React.ReactNode
    }
> = ({ setDeduction, description, ...textFieldProps }) => {
    return (
        <TextField
            variant="outlined"
            fullWidth
            type="number"
            onChange={(e) => setDeduction(Number(e.target.value) * 10000)}
            {...textFieldProps}
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
        />
    )
}
