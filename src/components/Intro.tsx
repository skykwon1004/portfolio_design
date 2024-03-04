import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

const HomeWrapper = styled.div`
  padding: 130px 0;
`;

const Intro = () => {
  return (
    <HomeWrapper>
      <Element name="intro">
        <div>
          <h1>Intro</h1>
          <p>This is the home section.</p>
        </div>
      </Element>
    </HomeWrapper>
  );
};

export default Intro;
