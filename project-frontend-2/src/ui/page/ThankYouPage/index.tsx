import Box from "@mui/material/Box";
import TopNavBar from "../../component/TopNavBar.tsx";
import SignBar from "../../component/SignBar.tsx";
import { Typography } from "@mui/material";
import thankYouImage from "../ThankYouPage/img/thankyou.jpg";
import {Link} from "react-router-dom";

export default function ThankYouPage() {
    return (
        <>
            <Box sx={{ marginTop: '150px' }}>
                <TopNavBar />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70%',
                    margin: '0 auto',
                    minHeight: '64vh',
                    minWidth: '60vw',

                }}
            >
                <Box sx={{ width: '60%' }}>
                    <Box sx={{ pt: 1, pl: 3, pr: 1, pb: 1 }}>
                        <Typography variant="h3" gutterBottom>
                            Payment Succeed
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>
                            Your order number is #2001539. We will send you an email when your order is ready at the shop.
                        </Typography>
                        <Link to={`/`} id="custom-link" style={{fontSize:'15px'}}>
                            Go Back to Home Page
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '40%',
                        minHeight: '64vh',
                        backgroundImage: `url(${thankYouImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'left',
                    }}
                ></Box>
            </Box>

            <Box sx={{ marginTop: '100px' }}>
                <SignBar />
            </Box>
        </>
    );
}