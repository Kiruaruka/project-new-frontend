import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartTableRow from './CartTableRow';
// import mockData from '../response.json';
import {CartProductDetailDto} from "../../../../data/dto/CartProductDto.ts";


type Props = {
    cartItemList:CartProductDetailDto[]
}
export default function CartTable({cartItemList}: Props) {

    return (
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow sx={{backgroundColor: '#F6F6F6'}}>
                        <TableCell colSpan={2}>Product Information</TableCell>
                        {/*<TableCell align="right"></TableCell>*/}
                        <TableCell align="left">Price $HKD </TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="left">Subtotal $HKD </TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cartItemList.map((row) => (
                            <TableRow sx={{ '&:last-child td, &:last-child th': {border: 0}}} >
                                <CartTableRow row={row} key={row.pid}/>
                            </TableRow>

                        ))
                    }
                    <TableRow sx={{backgroundColor: '#F6F6F6'}}>
                        <TableCell colSpan={6}></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
