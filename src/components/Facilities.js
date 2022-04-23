
import React from 'react'
import styledComponents from 'styled-components'

const Facilities = ({facilities}) => {
    console.log(facilities)
    return (
        <Wrapper>
           <p className='text-muted border p-1 bg-light'>Swimming pool</p>
        </Wrapper>
    )
}

const Wrapper = styledComponents.section`
    p{
        font-size:11px;
        white-space:no-wrap;
        margin:5px 5px;
    }
`

export default Facilities