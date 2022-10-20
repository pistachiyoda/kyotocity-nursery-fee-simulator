import { TextField, TextFieldProps } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const InputDeduction: React.FC<
    TextFieldProps & {
        setDeduction: React.Dispatch<React.SetStateAction<number>>
    }
> = ({ setDeduction, ...textFieldProps }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                type="number"
                sx={{ mb: 1 }}
                onChange={(e) =>
                    e.target.value && setDeduction(Number(e.target.value))
                }
                {...textFieldProps}
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
