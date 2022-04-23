import { GET_ALL_HOTELS_BEGIN, GET_ALL_HOTELS_FAIL, GET_ALL_HOTELS_SUCCESS, GET_PROPERTIES_BEGIN, GET_PROPERTIES_FAIL, GET_PROPERTIES_SUCCESS, UPDATE_CHECK_IN, UPDATE_CHECK_OUT, UPDATE_SELECTED_HOTEL } from "../action";


const hotels_reducer = (state, action) =>{
    switch (action.type) {
        case GET_PROPERTIES_BEGIN:
            return {...state}
         
        case GET_PROPERTIES_SUCCESS:
            return {...state,hotels:action.payload,selected_hotel:action.payload[0].location}
           
        case GET_PROPERTIES_FAIL:
            return {...state}
    

        case GET_ALL_HOTELS_BEGIN:
            return {...state}
         
        case GET_ALL_HOTELS_SUCCESS:
            return {...state,all_hotels:action.payload}
           
        case GET_ALL_HOTELS_FAIL:
            return {...state}
    

            
        case UPDATE_SELECTED_HOTEL:
            return {...state, selected_hotel:action.payload}
    
        case UPDATE_CHECK_IN:
            return {...state, checkIn:action.payload}

        case UPDATE_CHECK_OUT:
            return {...state, checkOut:action.payload}
        default:
            break;
    }

    return {...state}
}

export default hotels_reducer;