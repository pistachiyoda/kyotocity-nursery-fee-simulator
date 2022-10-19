import Typography from '@mui/material/Typography'

export const SubTitle: React.FC<{
    subtitle: string
}> = (props) => {
    const { subtitle } = props
    return (
        <Typography
            variant="h2"
            sx={{
                backgroundColor: '#ddc5e7',
                padding: '10px 10px 10px 20px',
                margin: '15px 0px',
                fontSize: '16px',
            }}
        >
            {subtitle}
        </Typography>
    )
}
