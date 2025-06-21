import React from 'react';
import './stylesHomePage/Button.css';

interface ButtonsProps {
  buttonName: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
//   type?: string;
}

const Buttons: React.FC<ButtonsProps> = ({ buttonName, onClick, type }) => {
  return (
    <button type={type} className="glow-on-hover" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Buttons;
