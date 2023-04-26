import BirthdayForm from './BirthdayForm';
import CalculatedAge from './CalculatedAge';
import { useState } from 'react';

const AgeCalculator = () => {
  const [age, setAge] = useState({
    day: null,
    month: null,
    year: null,
  });

  return (
    <div className='age-calculator-container'>
      <BirthdayForm setAge={setAge} />
      <CalculatedAge age={age} setAge={setAge} />
    </div>
  );
};

export default AgeCalculator;
