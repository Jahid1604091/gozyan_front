
import React,{useReducer,useContext,useEffect} from 'react'
import { CLEAR_FILTERS,
     FILTER_HOTELS, 
     LOAD_ALL_HOTELS, 
     UPDATE_FILTERS } from '../action'
import reducer from '../reducer/filter_reducer'

import { useHotelContext } from './hotel_context'




const initialState = {
    filtered_hotels : [],
    all_hotels : [],
   
    filters:{
        text:'',
        // company:'all',
        min_price:0,
        max_price:0,
        price:0,
       
    }
}

const FilterContext = React.createContext()

export const FilterProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const {all_hotels:hotels} = useHotelContext(); 

    useEffect(()=>{
        dispatch({
            type:LOAD_ALL_HOTELS,
            payload:hotels
        })
    },[hotels])

    useEffect(()=>{
        dispatch({
            type:FILTER_HOTELS,
        })
 
    },[hotels,state.filters])


 
    const updateFilters = (e) =>{
        let name = e.target.name
        let value = e.target.value

        if(name==='price'){
            value = Number(value)
        }

    
        dispatch({
            type:UPDATE_FILTERS,
            payload:{
                name, value
            }
        })
    }

    const clearFilters = () =>{
        dispatch({
            type:CLEAR_FILTERS
        })
    }

    return (
        <FilterContext.Provider value={{
            ...state,
            updateFilters,
            clearFilters,
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () =>{
    return useContext(FilterContext)
}