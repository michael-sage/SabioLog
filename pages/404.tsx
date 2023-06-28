import Link from 'next/link'
import React from 'react'
import { styled } from 'styled-components'
import { globals } from '../globals'

const Container = styled.div`
    min-height: 100vh;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 1rem;
    text-align: center;
`

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0;
    @media screen and (max-width: 700px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 1rem;
    }
`

const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 0.5rem;
    text-align: center;

    @media screen and (max-width: 700px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.8rem;
    }
`

const style = {
    color: globals.colours.black,
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 600,
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    border: `2px solid ${globals.colours.black}`,
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        backgroundColor: globals.colours.black,
        color: globals.colours.white,
        textDecoration: 'none',
    },
}

const Error404Page = () => {
  return (
    <Container>
        <TextContainer>
            <Title>404: Page Not Found</Title>
            <Subtitle>Sorry, but the page you were looking for could not be found.</Subtitle>
            <Link href="/" style={style}>
                <span>Go back home</span>
            </Link>
        </TextContainer>

    </Container>
  )
}

export default Error404Page