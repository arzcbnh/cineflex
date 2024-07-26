import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Display from "./components/Display.jsx";
import Sessions from "./components/Sessions.jsx";
import Seats from "./components/Seats.jsx";
import Success from "./components/Success.jsx";

export default function App() {
    const [movieTitle, setMovieTitle] = useState(null);
    const [sessionInfo, setSessionInfo] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [personalInfo, setPersonalInfo] = useState(null);

    function cleanState(state) {
        switch (state) {
            case "movie": setMovieTitle(null);
            case "session": setSessionInfo(null);
            case "seats": setSelectedSeats([]);
            case "personalInfo": setPersonalInfo(null);
        }
    }

    function toggleSelectedSeat(target) {
        const index = selectedSeats.indexOf(selectedSeats.find(query => query.id === target.id));

        if (index > -1) {
            setSelectedSeats(selectedSeats.toSpliced(index, 1));
        } else {
            setSelectedSeats([...selectedSeats, target]);
        }
    }

    console.log(movieTitle);
    console.log(sessionInfo);
    console.log(selectedSeats);
    console.log(personalInfo);

    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Display setMovieTitle={setMovieTitle} cleanState={cleanState} />} />
                <Route path="/sessoes/:movieId" element={<Sessions setSessionInfo={setSessionInfo} cleanState={cleanState} />} />
                <Route path="/assentos/:sessionId" element={<Seats toggleSelectedSeat={toggleSelectedSeat} setPersonalInfo={setPersonalInfo} cleanState={cleanState} />} />
                <Route path="/sucesso" element={<Success data={{ movieTitle, sessionInfo, selectedSeats, personalInfo }} />} />
            </Routes>
        </BrowserRouter>
    )
}
