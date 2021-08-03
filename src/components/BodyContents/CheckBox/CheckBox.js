import React, { useState } from "react";
import PropTypes from "prop-types";

const CheckBox = ({ label }) => {
  const [checked, setChecked] = useState([]);
  const handleChange = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className="checkbox_style1">
      {label.map((category) => (
        <>
          <label key={category.id} className="checkbox_align form-check-label " htmlFor={category.name}>
            <input
              type="checkbox"
              onChange={() => handleChange(category.id)}
                className="checkbox_style form-check-input"
            />
            {category.name}
          </label>
        </>
      ))}
    </div>
  );
};

CheckBox.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckBox;