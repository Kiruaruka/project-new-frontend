import {Alert, Snackbar } from "@mui/material"


type Props = {
    open: boolean,
    handleClose: () => void,
    addCartSucceed: boolean
}
export default function AddToCartSnackBar ({open , handleClose , addCartSucceed}: Props) {
    return (
        <>
            {
                addCartSucceed
                    ? <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} >
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            The item is added to cart!
                        </Alert>
                    </Snackbar>
                    :<Snackbar open={open} autoHideDuration={3000} onClose={handleClose} >
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            The item cannot be added to cart.
                        </Alert>
                    </Snackbar>


            }

        </>

    )
}