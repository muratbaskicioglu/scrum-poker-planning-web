import { useState } from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleInputChange({ target: { value: newValue } }) {
    setValue(newValue);
  }

  return {
    value,
    onChange: handleInputChange,
  };
}
