import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <div className='bg-[#1a1a1a] text-white py-20' id='about'>
      <div className='container mx-auto px-8 mt-40 md:px-16 lg:px-24'>
      <h3 className='font-extrabold text-6xl lg:text-8xl font-sans text-yellow-300 text-center mb-8'>CONTACT ME</h3>
    <StyledWrapper>
      <input
        type="text"
        placeholder="Write here..."
        name="text"
        className="input text-blackish"
      />
    </StyledWrapper>
    <br></br>
    <StyledWrapper>
      <input
        type="text"
        placeholder="Write here..."
        name="text"
        className="input text-blackish"
      />
    </StyledWrapper>
    </div>
</div>
  );
};

const StyledWrapper = styled.div`
  .input {
  border-radius: 10px;
  outline: 2px solid #FEBF00;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 2rem;
  transition: 0.25s;
}

.input:focus {
  outline-offset: 5px;
  background-color: #fff
}
`;

export default Input;
