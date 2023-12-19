import Box from "@mui/material/Box";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChess} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import QuantitySelectorInProductDetails from "./QuantitySelectorInProductDetails.tsx";
import Button from "@mui/material/Button";
import {Alert} from "@mui/material";
import {ProductDetailDto} from "../../../../data/dto/ProductDto.ts";
import * as CartItemApi from "../../../../api/CartItemApi.ts";


type Props = {
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>,
    productDetail: ProductDetailDto,
    productId: string
}

export default function ProductInformation({productId, quantity, setQuantity, productDetail}: Props) {

    const handleMinus = () => {
        quantity > 0 &&
        setQuantity((quantity) => (quantity - 1))
    }
    const handlePlus = () => {
        if (productDetail && productDetail.stock) {
            setQuantity((quantity) => (quantity + 1))
        }
    }

    //*****not check if 再加
    const handleClick = async () => {
        if (quantity > 0) {
            try {
                await CartItemApi.putCartItem(productId, quantity)
            } catch (error) {

            }
        }
    }


    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight:'100vh',
                    height: '98vh',
                    width: '75%',
                    margin: '0 auto',

                }}
            >
                {/*// picture*/}
                <Box
                    component="div"
                    sx={{
                        backgroundColor: 'white',
                        backgroundImage: `url(${productDetail.image_url})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        width: '50%',
                        minWidth:'300px',
                        height: '65vh',
                        minHeight: '400px',
                        boxShadow: '1px 2px 4px rgba(0.1, 0, 0, 0.1)'
                    }}
                >
                </Box>
                {/*// Content*/}
                <div style={{
                    backgroundColor: 'white',
                    height: '65vh',
                    width: '60%',
                    minHeight: '400px',
                    minWidth:'360px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: '10px',
                    boxShadow: '1px 2px 0px rgba(0.1, 0, 0, 0.1)'
                }}
                >
                        {/*name*/}
                        <Box sx={{display: 'flex', }}>
                            <FontAwesomeIcon icon={faChess} size="2xl" style={{marginRight: '20px'}}/>
                            <Typography variant="h3" fontWeight="bold"
                                        sx={{
                                            fontSize: {
                                                xs: '1.5rem',   // Font size for extra small screens
                                                sm: '1.7rem', // Font size for small screens
                                                md: '2.3rem',   // Font size for medium screens
                                            },
                                        }}
                                        >
                                {productDetail.name}
                            </Typography>

                        </Box>

                        <Box
                            sx={{textAlign: 'left', mb: 0.5, pb: 1.5, borderBottom: '1px solid #E5E5E5'}}
                            fontSize="15px"
                            fontWeight="bold"
                        >
                            Game Description
                        </Box>

                        <Box sx={{textAlign: 'justify'}}>
                            <Typography variant="body2" color="text.primary"
                                        sx={{fontSize: "18px", whiteSpace: 'pre-wrap'}}>
                                {productDetail.description}
                            </Typography>
                        </Box>

                        <Box sx={{width: '100%', mt: 2}}>
                            <Box sx={{textAlign: 'left', mb: 0.5}} fontSize="15px" color="#AEAEAE">
                                Quantity
                            </Box>

                            <QuantitySelectorInProductDetails quantity={quantity}
                                                              setQuantity={setQuantity}
                                                              handleMinus={handleMinus}
                                                              handlePlus={handlePlus}
                            />

                            {
                                productDetail.stock > 0 ?
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{mt: 3, mb: 2, width: '70%'}}
                                        color="error"
                                        size="small"
                                        onClick={handleClick}
                                    >
                                        Add to Cart
                                    </Button>
                                    : <Alert variant="filled" severity="error"
                                             sx={{mt: 3, mb: 2, width: '70%'}}>
                                        Out Of Stock
                                    </Alert>
                            }
                        </Box>
                </div>
            </Box>
        </>
)
}