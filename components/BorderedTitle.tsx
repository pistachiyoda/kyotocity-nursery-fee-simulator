import Typography from '@mui/material/Typography'
import React from 'react'

export const BorderedTitle: React.FC<{
    children: React.ReactNode
}> = (props) => {
    const { children } = props

    return (
        <Typography
            variant="h2"
            sx={{
                border: 'solid #622A78',
                borderRadius: '10px',
                color: 'black',
                padding: '20px 15px 20px 20px',
                fontSize: '20px',
            }}
        >
            {children}
        </Typography>
    )
}
