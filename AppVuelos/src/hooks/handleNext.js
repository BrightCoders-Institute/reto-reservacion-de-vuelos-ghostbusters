import { useState } from 'react';

const HandleNext = () => {
  const [step, setStep] = useState(0);

  const nextClick = () => {
    setStep(step + 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 0:
        return departurecity !== '' && departurestate !== '';
      case 1:
        return destinationcity !== '' && destinationstate !== '';
      case 2:
        return date !== '';
      case 3:
        return passangers > 0;
      default:
        return true;
    }
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

  function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }

  return {
    step,
    setStep,
    nextClick,
    isStepValid,
    texTitle,
    buttonTitle,
    formatDate
  };
};

export default HandleNext;
