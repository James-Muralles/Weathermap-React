import React from "react";
import styled from "styled-components";

import Map from "../Map/Map";

const Header = styled("header")`
  width: 500px;
  height: 80px;
  border-bottom: 2px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapBox = () => {
    return (
        <div>

            <Header>
                <h1>Mapbox GL Components</h1>
            </Header>

            <main>
                <Map />
            </main>
        </div>
    );
};

export default MapBox;

