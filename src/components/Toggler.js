import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import Moon from '../images/icon-moon.svg';
import Sun from '../images/icon-sun.svg'

const Button = styled.button`
  border: none;
  cursor: pointer;
  `;

const Toggle = ({theme, toggleTheme}) => {
    return (
        <Button onClick={toggleTheme} >
            <img src={theme === 'light' ? Moon : Sun } />
        </Button>

    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;