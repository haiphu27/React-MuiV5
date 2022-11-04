import React from 'react';
import {Container,Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <Container>
            <h1>Home</h1>
            <Link to={'/create'}>
                <h3>create a new user</h3>
            </Link>

        </Container>
    );
};

export default Home;
