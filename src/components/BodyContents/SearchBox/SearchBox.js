import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ value, type, placeholder, onChange }) => {
  const onHandleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type={type}
          placeholder={placeholder}
          onChange={onHandleChange}
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SearchBox.defaultProps = {
  value: "",
  placeholder: "",
  type: "search",
};

export default SearchBox;
