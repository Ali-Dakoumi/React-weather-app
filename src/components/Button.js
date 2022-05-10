import React from "react";

const Button = ({ color, text, onClick }) => {
  return (
    <button>
      <button
        className="btn"
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;
