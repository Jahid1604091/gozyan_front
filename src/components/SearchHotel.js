import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useHotelContext } from '../context/hotel_context'


const SearchHotel = () => {

    const navigate = useNavigate();
    const {locations,selected_hotel,changeSelectedLocation,checkIn,checkOut,updateCheckIn,updateCheckOut} = useHotelContext();
    
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
            <form className="row  align-items-center">
                <div className="col-sm-4">
                    <div className="card bg-light">
                      <span className='text-muted'>City / Hotel / Area / Resort</span>
                
                    </div>

                 <select name="location" value={selected_hotel && selected_hotel}  onChange={changeSelectedLocation} className='form-control'>
                     <option value="" disabled>Select City/ Area/ Resort</option>
                     {
                         locations.map((hotel,idx)=><option onChange={changeSelectedLocation} key={idx}>{hotel}</option>)
                     }
                 </select>
                </div>
                <div className="col-sm-2">
                    <div className="card bg-light">
                    <span className='text-muted'>Check in at</span>
                   
                    </div>
                    <input type="date" name='checkIn' value={checkIn} onChange={updateCheckIn} className="form-control" id="specificSizeInputName" required/>
                </div>
                <div className="col-sm-2">
                    <div className="card bg-light">
                    <span className='text-muted'>Check Out On</span>
                  
                    </div>
                    <input type="date" name='checkOut' value={checkOut} onChange={updateCheckOut}  className="form-control" id="specificSizeInputName" required/>
                </div>
                <div className="col-sm-2">
                    <div className="card bg-light">
                    <span className='text-muted'>Rooms</span>
                    
                    </div>
                    <input type="text" name='rooms' value={state.rooms} onChange={handleChange} className="form-control" id="specificSizeInputName" placeholder="No of Room" required />
                </div>
                <div className="col-sm-2">
                <div className="text-center">
                    <button onClick={submitHandler} type="submit" className="btn btn-primary">check availability</button>
                </div>
                </div>

                
            </form>
        </Wrapper>
    )
}


const Wrapper = styled.section`

.row > *{
    padding:0 ;
    margin:0 ;
}
.card{
    border-radius:0 ;
   
    margin-bottom:5px;
    text-align:center;
    border:none ;
    margin:0 ;
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
    border-radius:0 ;
    border:none ;
    margin:0 ;
    height:30px ;
}

select{
    border-bottom-left-radius:20px;
  
}


.btn{
    border-radius:0 ;
    height:55px ;
    margin:0 ;
    margin-left:-5px ;
}

`

export default SearchHotel;