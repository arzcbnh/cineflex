import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Poster({ movieId, src, onPickMovie }) {
    return (
        <Wrapper to={"/sessoes/" + movieId} onClick={onPickMovie}>
            <Image src={src} />
        </Wrapper>
    )
}

const Wrapper = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
`

const Image = styled.img`
    width: 145px;
    height: 210px;
    border-radius: 8px;
`
