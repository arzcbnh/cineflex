import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Sessions({ data }) {
    const { movieTitle, sessionInfo, selectedSeats, personalInfo } = data;

    axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
        ids: selectedSeats.map(seat => seat.id),
        ...personalInfo
    });

    return (
        <Wrapper>
            <Title>Pedido finalizado!</Title>
            <DataWrapper>
                <section>
                    <H3>Filme e sessão</H3>
                    <Separator />
                    {movieTitle}
                    <br />
                    {sessionInfo.date} às {sessionInfo.time}
                </section>
                <section>
                    <H3>Ingressos</H3>
                    <Separator />
                    {selectedSeats.map((seat, i) => (<Fragment key={i}>{"Assento " + seat.name}<br/></Fragment>))}
                </section>
                <section>
                    <H3>Comprador(a)</H3>
                    <Separator />
                    Nome: {personalInfo.name}
                    <br />
                    CPF: {personalInfo.cpf}
                </section>
            </DataWrapper>
            <Button to="/">Voltar para a tela inicial</Button>
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

const DataWrapper = styled.div`
    padding: 1em;
    background: #2b2d36;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 1em;

    color: white;
    font-family: "Sarala", sans-serif;
    font-size: 20px;
    line-height: 2em;
`

const Separator = styled.div`
    height: 1px;
    background: #4e5a65;
    margin: 5px 0;
`

const H3 = styled["h3"]`
    color: #ee897f;
    font-weight: bold;
    font-size: 22px;
`

const Button = styled(Link)`
    background: #ee897f;
    padding: 0.5em;
    margin-top: 20px;
    border: none;
    border-radius: 8px;

    display: block;
    justify-content: center;
    align-items: center;

    color: #2b2d36;
    font-family: "Sarala", sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
`
