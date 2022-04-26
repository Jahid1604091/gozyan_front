import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'


const FilterHotels = () => {
    const {
        filters: {
            text,
            min_price,
            max_price,
            price,
            rating
        },
        updateFilters, clearFilters, filtered_hotels,
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

                <div className="price">
                    <h5>Filter by Ratings</h5>


                    <ul className='rating'>
                        <li>
                          
                            <input
                                type='radio'
                                id='num1'
                                name='rating'
                                value='1'
                                onChange={updateFilters}
                                checked={rating == 1}
                            />
                            <label htmlFor='num1'>1</label>
                        </li>
                        <li>
                            <input
                                type='radio'
                                id='num2'
                                name='rating'
                                value='2'
                                onChange={updateFilters}
                                checked={rating == 2}
                            />
                            <label htmlFor='num2'>2</label>
                        </li>
                        <li>
                            <input
                                type='radio'
                                id='num3'
                                name='rating'
                                value='3'
                                onChange={updateFilters}
                                checked={rating == 3}
                            />
                            <label htmlFor='num3'>3</label>
                        </li>
                        <li>
                            <input
                                type='radio'
                                id='num4'
                                name='rating'
                                value='4'
                                onChange={updateFilters}
                                checked={rating == 4}
                            />
                            <label htmlFor='num4'>4</label>
                        </li>
                        <li>
                            <input
                                type='radio'
                                id='num5'
                                name='rating'
                                value='5'
                                onChange={updateFilters}
                                checked={rating == 5}
                            />
                            <label htmlFor='num5'>5</label>
                        </li>


                    </ul>
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


        .rating {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 30px 0 40px;
            }

            .rating li,
            .num-display {
            position: relative;
            background: #f4f4f4;
            width: 50px;
            height: 50px;
            padding: 10px;
            text-align: center;
            border-radius: 50%;
            font-size: 19px;
            border: 1px #eee solid;
            transition: 0.3s;
            }

            .rating li label {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50px;
            height: 50px;
            padding: 10px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
            }

            .rating li:hover,
            .num-display {
            background:var(--clr-primary);
            color: #fff;
            }

            [type='radio'] {
            opacity: 0;
            }

            [type='radio']:checked ~ label {
            background: var(--clr-primary);
            color: #fff;
            }



`

export default FilterHotels