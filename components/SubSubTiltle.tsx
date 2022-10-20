import Typography from '@mui/material/Typography'

export const SubSubTitle: React.FC<{
    subsubtitle: string
}> = (props) => {
    const { subsubtitle } = props
    return (
        <Typography
            variant="h3"
            sx={{
                padding: '10px 10px 10px 20px',
                margin: '15px 0px',
                fontSize: '16px',
                borderLeft: 'solid thick #ebbd66',
            }}
        >
            {subsubtitle}
        </Typography>
    )
}
