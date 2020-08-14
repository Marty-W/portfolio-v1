import { useState } from 'react';

const useModal = (initialMode = false) => {
  const [isShowing, setIsShowing] = useState(initialMode);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return [isShowing, toggle];
};

export default useModal;
