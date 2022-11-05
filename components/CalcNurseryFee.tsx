import { styled } from '@mui/material/styles'
import {
    Stack,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

export const CalcNurseryFee: React.FC<{
    layer: number
    familyCityTax: number
    a: number
    b: number
    c: number
}> = ({ layer, familyCityTax, a, b, c }) => {
    return (
        <>
            <Stack spacing={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell component="th">
                                    階層区分
                                </StyledTableCell>
                                <StyledTableCell component="th">
                                    保育料算出用市民税額
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    {layer.toLocaleString()} 階層
                                </TableCell>
                                <TableCell>
                                    {familyCityTax.toLocaleString()}円
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    保育所・保育所型認定こども園
                                </TableCell>
                                <TableCell>{a.toLocaleString()}円</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    小規模保育事業所等
                                </TableCell>
                                <TableCell>{b.toLocaleString()}円</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    幼稚園型認定こども園
                                </TableCell>
                                <TableCell>{c.toLocaleString()}円</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </>
    )
}
