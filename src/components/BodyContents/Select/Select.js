import React from "react";
import PropTypes from "prop-types";

const Select = ({ value, data, placeholder, onChange }) => {
  const selectChangeHandler = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className="form-group">
      <select className="form-control" value={value} onChange={selectChangeHandler}>
        <option value="">{placeholder}</option>
        {data.map((item, key) => (
          <option key={key} value={item.value} onClick={selectChangeHandler}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  data: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Select.defaultTypes = {
  value: "",
  placeHolder: "",
};

export default Select;