import TopNavBar from "../../component/TopNavBar.tsx";
import CartTable from "./component/CartTable.tsx";
import Box from "@mui/material/Box";
import OrderTable from "./component/OrderTable.tsx";
import Sign from "../../component/SignBar.tsx";
import {useContext, useEffect, useState} from "react";
import * as CartItemApi from '../../../api/CartItemApi.ts';
import {CartProductDetailDto} from "../../../data/dto/CartProductDto.ts";
import {useNavigate} from "react-router-dom";
import {UserData} from "../../../data/dto/UserDto.ts";
import {LoginUserContext} from "../../../App.tsx";

// import {useState} from "react";

export default function ShoppingCartPage() {
    const loginUser: UserData | null | undefined = useContext(LoginUserContext);
    const navigate = useNavigate();
    const [cartListData, setCartListData]
        = useState<CartProductDetailDto[] | undefined>(undefined);


    const getCartItem = async () => {
        try {
            const data = await CartItemApi.getCartItem();
            setCartListData(data);
        } catch (error) {
            navigate(`/error`);
        }

    }

    useEffect(() => {
        if(loginUser) {
            getCartItem()
        } else if (loginUser === null) {
            navigate('/login')
        }
    }, [loginUser]);

    return (
        <>
            <TopNavBar/>
            <Box sx={{marginTop: '100px'}}>
                <h1 style={{marginBottom: 3}}>𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠 𝐂𝐚𝐫𝐭</h1>
                <div style={{display: 'flex', position: 'relative'}}>
                    <div style={{flex: '1 1 auto', overflowX: 'auto'}}>
                        {
                            cartListData && <CartTable cartItemList={cartListData}/>

                        }
                    </div>
                    <div style={{position: 'sticky', marginLeft: '20px'}}>
                        <div style={{position: 'sticky', top: '80px'}}>
                            { cartListData && <OrderTable cartItemList={cartListData}/>}
                        </div>
                    </div>
                </div>
            </Box>
            <Sign/>
        </>
    )
}