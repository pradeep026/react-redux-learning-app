import React, { PropTypes } from 'react';

const DropDownOptions = (options = []) => {
  return (
    options.map(
      (value, index) =>
      <option key={index} value={value}>{value}</option>
    )
  );
};

const SelectComponent = ({name, label, value, options, defaultOption = "", error, onFieldValueChange}) => {
  let classNameForRow = `form--row`;
  if(error){
    classNameForRow = `${classNameForRow} has-error`;
  }
  return (
    <div className={classNameForRow}>
      <label htmlFor="title">{label}</label>
      <select name={name}
        value={value}
        onChange={onFieldValueChange}>
        {defaultOption && <option>{defaultOption}</option>}
        {DropDownOptions(options)}
      </select>
    </div>
  );
};

SelectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
  onFieldValueChange: PropTypes.func.isRequired
};

export default SelectComponent;
