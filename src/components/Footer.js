import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <div className='text-center p-4'>
                &copy; {new Date().getFullYear()} | All rights reserved.
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-height: 5rem;
    background-color: var(--clr-grey-10);
    color: var(--clr-primary-1);
`
export default Footer
