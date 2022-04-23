import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styledComponents from 'styled-components'
import { useHotelContext } from '../context/hotel_context'


const SearchHotel = () => {

    const navigate = useNavigate();
    const {hotels,selected_hotel,changeSelectedHotel,checkIn,checkOut,updateCheckIn,updateCheckOut} = useHotelContext();
    
    const [state,setState] = useState({
       
        rooms:1
    });


    const submitHandler = (e) =>{
        e.preventDefault();
        // const data = {key:selected_hotel,...state}
        
        if(checkIn && checkOut && state.rooms){
            navigate(`/hotels`);
        }
        else{
           alert('Please insert all required field')
        }

    }

    const handleChange = (e) =>{
       
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    return (
        <Wrapper>
            <form className="row gx-3 gy-2 align-items-center">
                <div className="col-sm-3">
                    <div className="card bg-light">
                      <span className='text-muted'>City / Hotel / Area / Resort</span>
                     <h5> {selected_hotel}</h5>
                    </div>

                 <select name="location" value={selected_hotel && selected_hotel}  onChange={changeSelectedHotel} className='form-control'>
                     <option value="" disabled>Select City/ Area/ Resort</option>
                     {
                         hotels.map((hotel,idx)=><option key={idx}>{hotel.location}</option>)
                     }
                 </select>
                </div>
                <div className="col-sm-3">
                    <div className="card bg-light">
                    <span className='text-muted'>Check in at</span>
                    <h5>{checkIn}</h5>
                    </div>
                    <input type="date" name='checkIn' value={checkIn} onChange={updateCheckIn} className="form-control" id="specificSizeInputName" required/>
                </div>
                <div className="col-sm-3">
                    <div className="card bg-light">
                    <span className='text-muted'>Check Out On</span>
                    <h5>{checkOut}</h5>
                    </div>
                    <input type="date" name='checkOut' value={checkOut} onChange={updateCheckOut}  className="form-control" id="specificSizeInputName" required/>
                </div>
                <div className="col-sm-3">
                    <div className="card bg-light">
                    <span className='text-muted'>Rooms</span>
                     <h5>{state.rooms}</h5>
                    </div>
                    <input type="text" name='rooms' value={state.rooms} onChange={handleChange} className="form-control" id="specificSizeInputName" placeholder="No of Room" required />
                </div>

                <div className="text-center my-4">
                    <button onClick={submitHandler} type="submit" className="btn btn-primary">search</button>
                </div>
            </form>
        </Wrapper>
    )
}

//rsp2210126

const Wrapper = styledComponents.section`

.card{
    height:60px;
    margin-bottom:5px;
    text-align:center;
    h4{
        margin:auto 0;
        text-transform:capitalize;
     
        color:var(--clr-primary-2);
        letter-spacing:2px;
    }
}

select,input{
    text-align:center;
    cursor:pointer;
}




`

export default SearchHotel;