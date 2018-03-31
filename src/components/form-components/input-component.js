import React, { PropTypes } from 'react';

const InputComponent = ({name, label, value, placeholder, error, onFieldValueChange}) => {
  let classNameForRow = `form--row`;
  if(error){
    classNameForRow = `${classNameForRow} has-error`;
  }
  return (
    <div className={classNameForRow}>
      <label htmlFor="title">{label}</label>
      <input
        type="text"
        onChange={onFieldValueChange}
        value={value}
        name={name}
        placeholder={placeholder} />
    </div>
  );
};

InputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onFieldValueChange: PropTypes.func.isRequired
};

export default InputComponent;
