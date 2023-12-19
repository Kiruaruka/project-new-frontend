import axios from "axios";
import * as FirebaseAuthService from '../authService/FirebaseAuthService.ts';
import {CartProductDetailDto} from "../data/dto/CartProductDto.ts";
const baseUrl = "http://localhost:8080";
export const putCartItem = async (pid: string, quantity: number) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        //no accesstoken , prevent calling api
        if (!accessToken) {
            throw new Error(); //not exception here , is error
        }

        //put the bearer token into config
        //config needs : 1. headers (在HTTP協議中，headers對於每個request，response提供了一些額外的資訊，基本上他們就是只是一對key value pair)
        const config = {headers: {Authorization: `Bearer ${accessToken}`}};

        await axios.put(
            `${baseUrl}/cart/${pid}/${quantity}`,
            null,
            config
        );
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export const getCartItem = async () => {
    try{
    const accessToken = await FirebaseAuthService.getAccessToken();
    if (!accessToken) {
        throw new Error();
    }
    const config = {headers: {Authorization: `Bearer ${accessToken}`}};
    const response = await axios.get<CartProductDetailDto[]>(`${baseUrl}/cart` , config);
    return response.data
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const updateCartItem = async (pid: string , quantity: number) => {
    const accessToken = await FirebaseAuthService.getAccessToken();
    if(!accessToken) {
        throw new Error();
    }
    const config = {headers: {Authorization: `Bearer ${accessToken}`}};
    const response = await  axios.patch(
        `${baseUrl}/cart/${pid}/${quantity}`,
        null,
        config
    )
    return response.data
}