import React from "react";
import styled from "styled-components";

import Map from "../Map/Map";

const Header = styled("header")`
  width: 100vw;
  height: 80px;
  border-bottom: 2px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapBox = () => {
    return (
        <>
            <Header>
                <h1>Mapbox GL Components</h1>
            </Header>
            <main>
                <Map />
            </main>
        </>
    );
};

export default MapBox;

