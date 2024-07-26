import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Form({ setPersonalInfo }) {
    const [name, setName] = useState(null);
    const [cpf, setCpf] = useState(null);
    const navigate = useNavigate();

    function submit(event) {
        event.preventDefault();
        setPersonalInfo({ name, cpf });
        navigate("/sucesso");
    }

    return (
        <FormWrapper onSubmit={submit}>
            <InputWrapper>
                <Label htmlFor="name">Nome do comprador(a)</Label>
                <Input onChange={e => setName(e.target.value)} id="name" type="text" placeholder="Digite seu nome..." required />
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="cpf">CPF do comprador(a)</Label>
                <Input onChange={e => setCpf(e.target.value)} id="cpf" type="text" placeholder="Digite seu CPF..." pattern="[0-9]{3}.{0,1}[0-9]{3}.{0,1}[0-9]{3}-{0,1}[0-9]{2}" required />
            </InputWrapper>
            <Submit>Reservar assento(s)</Submit>
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: fill;
    gap: 1em;
`

const InputWrapper = styled.div``

const Label = styled.label`
    display: block;
    margin-bottom: 0.25em;

    color: white;
    font-family: "Sarala", sans-serif;
`

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 0.6em 1em;
    border: 1px solid #d4d4d4;
    border-radius: 8px;

    &:placeholder-shown {
        color: #afafaf;
        font-style: italic;
    }
`

const Submit = styled.button`
    background: #ee897f;
    padding: 0.5em;
    margin-top: 20px;
    border: none;
    border-radius: 8px;

    color: #2b2d36;
    font-size: 18px;
    font-weight: bold;
`
