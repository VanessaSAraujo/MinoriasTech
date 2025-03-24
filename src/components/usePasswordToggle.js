import React from 'react';

const usePasswordToggle = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return {
    showPassword,
    handleClickShowPassword,
  };
};

export default usePasswordToggle;
