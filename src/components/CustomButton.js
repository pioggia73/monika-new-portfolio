import React from "react";
import styled from "styled-components";

const CustomButton = ({ children }) => {
  return (
    <Wrapper>
      <button className="custom-button" type="button">
        {children}
      </button>
    </Wrapper>
  )
};

const Wrapper = styled.button`
  .custom-button {
    width: 3rem;
    height: 2rem;
    border: none;
  }
`

export default CustomButton;
