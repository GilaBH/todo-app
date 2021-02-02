import LightBackground from '../images/bg-desktop-light.jpg';
import DarkBackground from '../images/bg-desktop-dark.jpg';

export const lightTheme = {
    background: `no-repeat url(${LightBackground})`,
    backgroundColor: "#E4E5F1",
    text: '#484B6A',
    inputListColor: 'white',
    borderBottom: '1px solid #D2D3DB',
    crossoutColor: '#D2D3DB',
  }
  
  export const darkTheme = {
    background: `no-repeat url(${DarkBackground})`,
    backgroundColor: '#161722',
    text: '#CACDE8',
    inputListColor: '#25273C',
    borderBottom: "1px solid #4D5066",
    crossoutColor: '#4D5066',
  }