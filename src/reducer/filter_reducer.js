import { CLEAR_FILTERS, FILTER_HOTELS, LOAD_ALL_HOTELS, UPDATE_FILTERS } from "../action"

const filterReducer = (state, action) => {
    switch (action.type) {
        case LOAD_ALL_HOTELS:
            let maxPrice = action.payload.map(p => (p.current_price))
            maxPrice = Math.max(...maxPrice)

            return {
                ...state,
                all_hotels: [...action.payload],
                filtered_hotels: [...action.payload],
                filters: {
                    ...state.filters,
                    max_price: maxPrice,
                    price: maxPrice
                }
            }
        
    

        case UPDATE_FILTERS:
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }
        case FILTER_HOTELS:
            const { all_hotels } = state
            const { text,  price } = state.filters
            let temp_hotels = [...all_hotels]

            //filtering

            if (text) {
                temp_hotels = temp_hotels.filter(hotel => {
                    return hotel.name.toLowerCase().startsWith(text)
                })
            }
            
            temp_hotels = temp_hotels.filter(hotel => hotel.current_price <= price)
            

            return {
                ...state,
                filtered_hotels: temp_hotels
            }

        case CLEAR_FILTERS:

            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    price: state.filters.max_price,
                   
                }

            }
        default:
            return state
    }
}

export default filterReducer