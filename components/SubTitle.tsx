import Typography from '@mui/material/Typography'

export const SubTitle: React.FC<{
    children: React.ReactNode
}> = (props) => {
    const { children } = props
    return (
        <Typography
            variant="h2"
            sx={{
                backgroundColor: '#ddc5e7',
                padding: '10px 10px 10px 20px',
                margin: '15px 0px',
                fontSize: '18px',
            }}
        >
            {children}
        </Typography>
    )
}
