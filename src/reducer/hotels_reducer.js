import {
    GET_ALL_HOTELS_BEGIN,
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
    UPDATE_SELECTED_LOCATION
} from "../action";


const hotels_reducer = (state, action) => {
    switch (action.type) {
        case GET_LOCATIONS_BEGIN:
            return { ...state }

        case GET_LOCATIONS_SUCCESS:
            return {
                ...state,
                locations: action.payload,
                selected_hotel: action.payload[0],
            }

        case GET_LOCATIONS_FAIL:
            return { ...state }


        case GET_ALL_HOTELS_BEGIN:
            return { ...state }

        case GET_ALL_HOTELS_SUCCESS:
            return {
                ...state,
                all_hotels: action.payload,
            }

        case GET_ALL_HOTELS_FAIL:
            return { ...state }


        case GET_FEATURED_HOTELS_BEGIN:
            return { ...state }

        case GET_FEATURED_HOTELS_SUCCESS:
            return {
                ...state,
                featured_hotels: action.payload.slice(0,3),
            }

        case GET_FEATURED_HOTELS_FAIL:
            return { ...state }



        case UPDATE_SELECTED_LOCATION:
            return { ...state, selected_hotel: action.payload }

        case UPDATE_CHECK_IN:
            return { ...state, checkIn: action.payload }

        case UPDATE_CHECK_OUT:
            return { ...state, checkOut: action.payload }
        default:
            break;
    }

    return { ...state }
}

export default hotels_reducer;