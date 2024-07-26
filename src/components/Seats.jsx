import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import SeatGrid from "./SeatGrid.jsx"
import Form from "./Form.jsx";

export default function Seats({ toggleSelectedSeat, setPersonalInfo, cleanState }) {
    const { sessionId } = useParams();

    useEffect(() => cleanState("seats"), [])

    return (
        <Wrapper>
            <Title>Selecione o(s) assento(s)</Title>
            <SeatGrid sessionId={sessionId} toggleSelectedSeat={toggleSelectedSeat} />
            <Separator />
            <Form setPersonalInfo={setPersonalInfo} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 24px;
    background: #212226;

    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
`;

const Title = styled.h2`
    color: white;
    font-family: "Sarala", sans-serif;
    font-size: 24px;
    text-align: center;
`

const Separator = styled.div`
    height: 1px;
    background: #4e5a65;
    margin: 1em 0;
`
