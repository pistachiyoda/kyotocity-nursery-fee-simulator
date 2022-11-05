import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import {
    CardActions,
    IconButton,
    styled,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@mui/material'
import { Home, Instagram } from '@mui/icons-material'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:nth-of-type(odd) th': {
        fontWeight: 'bold',
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))

export const NurserySchoolCard2: React.FC<{
    url: string
    schoolName: string
    introduction: string
    price: string
    address: string
    acceptableAge: string
    instagramUrl: string
}> = (props) => {
    const {
        url,
        schoolName,
        introduction,
        price,
        address,
        acceptableAge,
        instagramUrl,
    } = props
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {schoolName}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                >
                    {introduction}
                </Typography>
                <Table>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell component="th">
                                月額保育料（1歳児の場合）
                            </TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <TableCell>{price}</TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <TableCell component="th">住所</TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <TableCell>{address}</TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <TableCell component="th">受け入れ年齢</TableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <TableCell>{acceptableAge}</TableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </CardContent>
            <CardActions sx={{ justifyContent: 'end' }}>
                <IconButton
                    size="large"
                    onClick={() => window.open(instagramUrl)}
                    color="secondary"
                >
                    <Instagram fontSize="inherit" />
                </IconButton>
                <IconButton
                    size="large"
                    onClick={() => window.open(url)}
                    color="secondary"
                >
                    <Home fontSize="inherit" />
                </IconButton>
            </CardActions>
        </Card>
    )
}
