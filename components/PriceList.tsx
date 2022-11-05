import {
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import { BorderedTitle } from './BorderedTitle'

export const PriceList: React.FC = () => {
    return (
        <>
            <BorderedTitle>
                企業主導型保育園（京都市中心部）の保育料 一例
            </BorderedTitle>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>保育料（1ヶ月）</TableCell>
                            <TableCell>0歳</TableCell>
                            <TableCell>1歳</TableCell>
                            <TableCell>2歳</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>保育園A</TableCell>
                            <TableCell>38,000円</TableCell>
                            <TableCell>35,000円</TableCell>
                            <TableCell>35,000円</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>保育園B</TableCell>
                            <TableCell>35,000円</TableCell>
                            <TableCell>35,000円</TableCell>
                            <TableCell>35,000円</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>保育園C</TableCell>
                            <TableCell>20,000円</TableCell>
                            <TableCell>20,000円</TableCell>
                            <TableCell>20,000円</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
