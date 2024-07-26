import { Link } from "react-router-dom";
import styled from "styled-components";

import clapperboard from "../assets/clapperboard.png";

export default function Header() {
    return (
        <Wrapper>
            <Title to="/">
                <Icon src={clapperboard} />
                Cineflex
            </Title>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    padding: 1em;
    background: #ee897f;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled(Link)`
    color: #fadbc5;
    font-size: 34px;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    text-decoration: none;

    > img {
        vertical-align: bottom;
        margin-right: 10px;
    }
`

const Icon = styled.img`
    width: 40px;
`
