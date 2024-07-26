import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Screening from "./Screening.jsx";

export default function Sessions({ setSessionInfo, cleanState }) {
    const { movieId } = useParams();
    const [days, setDays] = useState(null);

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies/" + movieId + "/showtimes")
            .then(res => setDays(res.data.days))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => cleanState("session"), []);

    return (
        <Wrapper>
            <Title>Selecione o horário</Title>
            {days?.map(day => <Screening key={day.id} day={day} setSessionInfo={setSessionInfo} />)}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 24px;
    background: #212226;
    flex: 1;
`;

const Title = styled.h2`
    margin-bottom: 1em;
    color: white;
    font-family: "Sarala", sans-serif;
    font-size: 24px;
    text-align: center;
`
