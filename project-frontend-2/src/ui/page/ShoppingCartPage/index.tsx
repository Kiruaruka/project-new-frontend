import TopNavBar from "../../component/TopNavBar.tsx";
import Table from "./component/CartTable.tsx";
import Box from "@mui/material/Box";
import OrderTable from "./component/OrderTable.tsx";
import Sign from "../../component/SignBar.tsx";
// import {useState} from "react";

export default function ShoppingCartPage () {
    // const [quantity, setQuantity]
    //     = useState<number>(0);
    return (
        <>
            <TopNavBar/>
            <Box sx={{marginTop: '100px'}}>
                <h1 style={{marginBottom:3}}>𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠 𝐂𝐚𝐫𝐭</h1>
                <div style={{ display: 'flex', position: 'relative' }}>
                    <div style={{ flex: '1 1 auto', overflowX: 'auto' }}>
                        <Table/>
                    </div>
                    <div style={{ position: 'sticky', marginLeft: '20px' }}>
                        <div style={{ position: 'sticky', top: '80px' }}>
                            <OrderTable/>
                        </div>
                    </div>
                </div>
        </Box>
            <Sign/>
        </>
    )
}