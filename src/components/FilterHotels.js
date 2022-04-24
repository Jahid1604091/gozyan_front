import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { formatPrice } from '../utils/helpers'

const FilterHotels = () => {
    const {
        filters: {
            text,
            min_price,
            max_price,
            price,

        },
        updateFilters, clearFilters, filtered_hotels
    } = useFilterContext()

    return (
        <Wrapper className='shadow p-4'>
             <p>{filtered_hotels.length} Hotels found</p>
             <hr />
            <form onSubmit={(e) => e.preventDefault()}>
            <h5>Filter by Hotel name</h5>
            
                <div className="">
                    <input value={text} onChange={updateFilters} type="text" name='text' placeholder='search hotel here' />
                </div>


                <div className="price">
                    <h5>Filter by Price</h5>
                    
                    <p className="price"><strong>{price}</strong> USD</p>
                    <input type="range"
                        name='price'
                        onChange={updateFilters}
                        min={min_price}
                        max={max_price}
                        value={price}
                    />
                </div>



                <div className="clear-btn text-center">
                    <input type="button"
                        value='clear filters'
                        onClick={clearFilters}
                    />
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.section`
button {   
            cursor: pointer;
            border: none;
            background:transparent;
            display: block;
        }
        .active{
            border-bottom: 1px solid var(--clr-primary-5);
        }

        .colors{
            display: flex;
            align-items: center;
        }
        .fa-check{ 
            color: var(--clr-primary-9);
        }

        .color-btn{
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: #222;
            margin-right: 0.5rem;
            border: none;
            cursor: pointer;
            opacity: 0.5;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .all-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.5rem;
            opacity: 0.5;
        }
        .all-btn .active-clr {
            text-decoration: underline;
        }
`

export default FilterHotels