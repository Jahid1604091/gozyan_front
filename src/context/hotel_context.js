import React,{useContext,useReducer,useEffect} from "react";

import axios from "axios";
import  {base_url as url}  from "../utils/constants";
import reducer from "../reducer/hotels_reducer";
import { GET_ALL_HOTELS_BEGIN, 
    GET_ALL_HOTELS_FAIL, 
    GET_ALL_HOTELS_SUCCESS,
  
    GET_FEATURED_HOTELS_BEGIN,
  
    GET_FEATURED_HOTELS_FAIL,
  
    GET_FEATURED_HOTELS_SUCCESS,
  
    GET_LOCATIONS_BEGIN,
    GET_LOCATIONS_FAIL,
    GET_LOCATIONS_SUCCESS,
  
    UPDATE_CHECK_IN, 
    UPDATE_CHECK_OUT,
    UPDATE_SELECTED_LOCATION, 
  
} from "../action";




const HotelContext = React.createContext()

const initialState = {
    properties_loading:false,
    properties_error:false,
    locations:[],
    selected_hotel:'',
    checkIn:'',
    checkOut:'',
    all_hotels:[],
    featured_hotels:[],
    facilities:[],
    loading_all_hotels:false,
    error_all_hotels:false,
    fare:0,
    // featured_products:[],
    // single_product_loading:false,
    // single_product_error:false,
    // single_product:{},
    
}

export const HotelsProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const fetchLocations = async (url) =>{
        dispatch({
            type:GET_LOCATIONS_BEGIN
        })
        try {
            const response = await axios.get(`${url}/locations`)
            const locations = [...new Set(response.data.map(item => item.location))]
            
            dispatch({
                type:GET_LOCATIONS_SUCCESS,
                payload:locations
              
            })

        } catch (error) {
            dispatch({
                type:GET_LOCATIONS_FAIL,
                
            })
            console.log(error);
        }
    }

        
    useEffect(()=>{
        fetchLocations(url)
    },[])
    
    const fetchFeaturedHotels = async (url) =>{
        dispatch({
            type:GET_FEATURED_HOTELS_BEGIN
        })
        try {
            const response = await axios.get(`${url}/properties`)
            
            dispatch({
                type:GET_FEATURED_HOTELS_SUCCESS,
                payload:response.data
              
            })

        } catch (error) {
            dispatch({
                type:GET_FEATURED_HOTELS_FAIL,
                
            })
            console.log(error);
        }
    }

        
    useEffect(()=>{
        fetchFeaturedHotels(url)
    },[])
    

    //search
    const searchHotels = async (url,key) =>{
        dispatch({
            type:GET_ALL_HOTELS_BEGIN
        })
        try {
            const response = await axios.get(`${url}/properties/search/${key}`)
            const hotels = response.data

            
           
            dispatch({
                type:GET_ALL_HOTELS_SUCCESS,
                payload:hotels
            })

        } catch (error) {
            dispatch({
                type:GET_ALL_HOTELS_FAIL,
                
            })
            console.log(error);
        }
    }

    const changeSelectedLocation = (e) =>{
        dispatch({
            type:UPDATE_SELECTED_LOCATION,
            payload:e.target.value
        })
        
    }


    const updateCheckIn = (e) =>{
        dispatch({
            type:UPDATE_CHECK_IN,
            payload:e.target.value
        })
      
    }


    const updateCheckOut = (e) =>{
        dispatch({
            type:UPDATE_CHECK_OUT,
            payload:e.target.value
        })
      
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
        state.selected_hotel &&  searchHotels(url,state.selected_hotel)
    },[state.selected_hotel])
    

    return (
        <HotelContext.Provider value={{
            ...state,
            fetchSingleHotel,
            changeSelectedLocation,
            updateCheckIn,
            updateCheckOut,
            
        }}>
            {children}
        </HotelContext.Provider>
    )
}

export const useHotelContext = () =>{
    return  useContext(HotelContext)
}

