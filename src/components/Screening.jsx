import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Screening({ day, setSessionInfo }) {
    return (
        <Wrapper>
            {day.weekday}, {day.date}
            <Separator />
            <Times>
                {day.showtimes.map(st => (<Time
                    key={st.id}
                    to={"/assentos/" + st.id}
                    onClick={() => setSessionInfo({ date: day.date, time: st.name })}
                >{st.name}</Time>))}
            </Times>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 1em;
    background: #2b2d36;
    border-radius: 8px;

    color: white;
    font-family: "Sarala", sans-serif;
    font-size: 20px;

    &:not(:last-child) {
        margin-bottom: 1em;
    }
`

const Separator = styled.div`
    height: 1px;
    background: #4e5a65;
    margin: 1em 0;
`

const Times = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
`

const Time = styled(Link)`
    padding: 0.5em 1em;
    background: transparent;
    border: 2px solid #ee897f;
    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #ee897f;
    font-size: 16px;
    text-decoration: none;
`
