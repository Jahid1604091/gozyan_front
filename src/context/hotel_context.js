import React,{useContext,useReducer,useEffect} from "react";

import axios from "axios";
import  {base_url as url}  from "../utils/constants";
import reducer from "../reducer/hotels_reducer";

//import actions

const HotelContext = React.createContext()

const initialState = {
    // products_loading:false,
    // products_error:false,
    // hotels:[],
    // featured_products:[],
    // single_product_loading:false,
    // single_product_error:false,
    // single_product:{},
    
}

export const HotelsProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const fetchHotels = async (url) =>{
        // dispatch({
        //     type:GET_PRODUCTS_BEGIN
        // })
        try {
            const response = await axios.get(url)
            const hotels = response.data
            dispatch({
                // type:GET_PRODUCTS_SUCCESS,
                payload:hotels
            })
        } catch (error) {
            dispatch({
                // type:GET_PRODUCTS_ERROR,
                
            })
            console.log(error);
        }
    }

    const fetchSingleHotel = async (url) =>{
        dispatch({
            // type:GET_SINGLE_PRODUCT_BEGIN
        })
        try {
            const response = await axios.get(url)
            const singleHotel = response.data
            dispatch({
                // type:GET_SINGLE_PRODUCT_SUCCESS,
                payload:singleHotel
            })
        } catch (error) {
            dispatch({
                // type:GET_SINGLE_PRODUCT_ERROR,
                
            })
            console.log(error);
        }
    }

    
    useEffect(()=>{
        fetchHotels(url)
    },[])
    
    return (
        <HotelContext.Provider value={{
            ...state,
            fetchSingleHotel,
        }}>
            {children}
        </HotelContext.Provider>
    )
}

export const useHotelContext = () =>{
    return  useContext(HotelContext)
}

