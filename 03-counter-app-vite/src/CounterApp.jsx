import React, { useState } from 'react';
import PropTypes from "prop-types";

export const CounterApp = ({ valueInitial }) => {
  const [value, setValue] = useState(valueInitial);

  const handleAdd = () => { setValue(value + 1)};
  const handleSubstract = () => { setValue(value - 1)};
  const handleReset = () => { setValue(valueInitial)};

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubstract}> -1 </button>
      <button aria-label='btn-reset' onClick={handleReset}> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  valueInitial: PropTypes.number.isRequired,
};
