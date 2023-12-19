import TableCell from "@mui/material/TableCell";

import {CartProductDetailDto} from "../../../../data/dto/CartProductDto.ts";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import QuantitySelector from "./QuantitySelectorInShoppingCart.tsx";


type Props = {
    row: CartProductDetailDto;
}
export default function CartTableRow ({row}: Props) {
    const subtotal: number = row.cart_quantity * row.price;

    return (
        <>
                <TableCell component="th" scope="row" ><img width="64px" src={row.image_url}/></TableCell>
                <TableCell  align="left" >{row.name} </TableCell>
                <TableCell align="left">{row.price.toFixed(2)}</TableCell>
                <TableCell  align="left"><QuantitySelector quantity={row.cart_quantity}/></TableCell>

                <TableCell align="left">{subtotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
                <TableCell align="left"><IconButton aria-label="delete" size="large">
                    <DeleteIcon />
                </IconButton></TableCell>
        </>
    )
}