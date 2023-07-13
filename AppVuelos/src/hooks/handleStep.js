import React, { useState } from 'react';

const HandleStep = () => {
  const [step, setStep] = useState(0);

  const nextClick = () => {
    setStep(step + 1);
  };

  const texTitle = () => {
    switch (step) {
      case 0:
        return 'where are you now?';
      case 1:
        return 'where will you be flying to?';
      case 2:
        return 'Select date';
      case 3:
        return 'How many passengers?';
      case 4:
        return 'Your request was received';
      default:
        return null;
    }
  };

  const buttonTitle = () => {
    if (step === 4) {
      return 'Finish';
    } else {
      return 'Next';
    }
  };

  return {
    step,
    setStep,
    nextClick,
    texTitle,
    buttonTitle,
  };
};

export default HandleStep;
