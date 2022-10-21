import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material'
import { specifyLayer } from '../lib/specifyLayer'
import { specifyNurseryFee } from '../lib/specifyNurseryFee'

export const CalcNurseryFee: React.FC<{ familyCityTax: number }> = (props) => {
    const { familyCityTax } = props
    const layer = specifyLayer(familyCityTax)
    const [a, b, c] = specifyNurseryFee(layer)
    return (
        <>
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
        </>
    )
}
