
import React from 'react'
import styledComponents from 'styled-components'

const Facilities = ({facility}) => {
   
    return (
        <Wrapper>
           <p className='text-muted border p-1 bg-light'>{facility}</p>
        </Wrapper>
    )
}

const Wrapper = styledComponents.section`
    p{
        font-size:11px;
        white-space:no-wrap;
        margin:5px 5px;
        float-left;
    }
`

export default Facilities