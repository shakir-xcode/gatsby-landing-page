import React, { useState } from 'react'
import { styled } from 'styled-components';
import { devices } from '../devices';


const SubscribeCardContainer = styled.div`
padding: 0 2em;
`

const SubscribeCard = styled.div`
max-width: 850px;
margin: 0 auto;
padding: 3em;
display: flex;
flex-direction: column;
gap:1em;
align-items: center;
border-radius: 8px;
background: ${(props) => (props.theme.testimonials_bg)};

h1 {
text-align: center;
    font-weight: 600;
    font-size: 1.9rem;
}

p {
text-align: center;
padding: 0 24px;
}

div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
}

input {
    padding: 12px 42px 12px 28px;
    border-radius: 24px;
    outline: none;
    border: none;
}


@media ${devices.tablet} {
    input {
flex-basis: 0;
    flex-grow: 3;
    padding: 15px 42px;
    }
    
    p{
padding: 0 42px;
    }
}
`

const SubscribeButton = styled.button`
padding: 12px 42px;
font-weight: 900;
background-color: var(--accent-blue);
border: none;
border-radius: 24px;

&:hover{
    background-color: var(--accent-cyan);
}

@media ${devices.tablet} {
    padding: 15px 72px;
    flex-basis: 0;
    flex-grow: 1;
}
`

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleInput = (e) => {
        setEmail(e.target.value);
    }

    return (
        <SubscribeCardContainer>
            <SubscribeCard>
                <h1>Get early access today</h1>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. if you have any questions, our support team would be happy to help you.</p>
                <div>
                    <input onChange={handleInput} type='email' placeholder='email@example.com' value={email} />
                    <SubscribeButton>Get Started</SubscribeButton>
                </div>
            </SubscribeCard>
        </SubscribeCardContainer>
    )
}

export default Subscribe