import React from 'react'
import styled from 'styled-components'

function Testing() {
    return (
        <Wrapper>
            <h3>Hello world</h3>
            <p>hello people</p>
            <button>click me</button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
h3{
    color: red;
}
`

export default Testing