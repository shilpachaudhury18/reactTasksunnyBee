import React from "react";
import PropTypes from "prop-types";

const AddButton = ({ btnName, onClick }) => {
  return (
    <div>
              
      <button className="add" onClick={onClick}>{btnName}</button>
    </div>
  );
};

AddButton.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
