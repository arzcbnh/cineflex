import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Poster from "./Poster.jsx";

export default function Display({ setMovieTitle, cleanState }) {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => cleanState("movie"), []);

    return (
        <Wrapper>
            <Title>Em Cartaz</Title>
            <Grid>{movies?.map(m => <Poster key={m.id} movieId={m.id} src={m.posterURL} onPickMovie={() => setMovieTitle(m.title)} />)}</Grid>
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
`
