import React, { useState } from 'react'
import { styled } from 'styled-components';
import { devices } from '../devices';
import { TiTick } from "react-icons/ti";

const SubscribeCardContainer = styled.div`
padding: 0 2em;
`

const SubscribeCard = styled.div`
position: relative;
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
    width: auto;
    padding: 8px 12px;
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

const ConfirmMessageSent = styled.p`
position: absolute;
bottom: 0.9em;
left: 50%;
transform: translate(-50%, -50%);
color: #00ff00;
font-weight: 800;
text-size: 0.8rem;
display: flex;
align-items: center;

`

const SubscribeButton = styled.button`
padding: 12px 42px;
font-weight: 900;
background-color: var(--accent-blue);
border: none;
border-radius: 24px;
font-size: 0.8rem;

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
    const [messageSent, setMessageSent] = useState(false);

    const handleInput = (e) => {
        setEmail(e.target.value);
    }

    const sendMessage = () => {
        setMessageSent(true)
        setTimeout(() => {
            setMessageSent(false)
        }, 2000)
    }

    return (
        <SubscribeCardContainer>
            <SubscribeCard>
                <h1>Get early access today</h1>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. if you have any questions, our support team would be happy to help you.</p>
                <div>
                    <input onChange={handleInput} type='email' placeholder='email@example.com' value={email} />
                    <SubscribeButton onClick={sendMessage}>Get Started</SubscribeButton>
                </div>
                {messageSent ?
                    <ConfirmMessageSent>
                        <TiTick size='18' /><span>Message Sent...</span>
                    </ConfirmMessageSent>
                    : ''
                }
            </SubscribeCard>
        </SubscribeCardContainer>
    )
}

export default Subscribe