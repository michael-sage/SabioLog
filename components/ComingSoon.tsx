import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    text-align: center;
`

const ComingSoon = () => {
  return (
    <Container>
        <h1>Coming Soon...</h1>
    </Container>
  )
}

export default ComingSoon