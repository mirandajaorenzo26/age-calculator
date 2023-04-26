import { useState } from 'react';
import Proptypes from 'prop-types';
import calculateAge from '../functions/calculateAge';
import { isValidDate } from '../functions/validateDate';
import {
  fillDayWithZero,
  fillMonthWithZero,
  fillYearWithZero,
} from '../functions/fillWithZero';
import {
  showAllInputError,
  showInputError,
  hideInputError,
  removeAllInputError,
} from '../functions/errorHandler';

const BirthdayForm = ({ setAge }) => {
  const currentDate = new Date();
  let isDateValid = false;

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [birthday, setBirthday] = useState({
    day: null,
    month: null,
    year: null,
  });

  const [dayInputError, setDayInputError] = useState();
  const [monthInputError, setMonthInputError] = useState();
  const [yearInputError, setYearInputError] = useState();

  const handleDayInput = (e) => {
    setDay(e.target.value);
    setBirthday({
      day: e.target.value,
      month: month,
      year: year,
    });
    if (
      !isNaN(Number(e.target.value)) &&
      Number(e.target.value) <= 31 &&
      Number(e.target.value) > 0
    ) {
      setDayInputError('');
      hideInputError(e);
    } else if (Number(e.target.value) > 31) {
      setDayInputError('Must be valid day');
      showInputError(e);
    } else if (isNaN(Number(e.target.value))) {
      setDayInputError('Invalid input');
      showInputError(e);
    } else if (Number(e.target.value) == 0) {
      setDayInputError('');
      hideInputError(e);
    }
  };
  const handleMonthInput = (e) => {
    setMonth(e.target.value);
    setBirthday({
      day: day,
      month: e.target.value,
      year: year,
    });
    if (
      !isNaN(Number(e.target.value)) &&
      Number(e.target.value) <= 12 &&
      Number(e.target.value) > 0
    ) {
      setMonthInputError('');
      hideInputError(e);
    } else if (Number(e.target.value) > 12) {
      setMonthInputError('Must be valid month');
      showInputError(e);
    } else if (isNaN(Number(e.target.value))) {
      setMonthInputError('Invalid input');
      showInputError(e);
    } else if (Number(e.target.value) == 0) {
      setMonthInputError('');
      hideInputError(e);
    }
  };
  const handleYearInput = (e) => {
    setYear(e.target.value);
    setBirthday({
      day: day,
      month: month,
      year: e.target.value,
    });
    if (
      !isNaN(Number(e.target.value)) &&
      Number(e.target.value) <= currentDate.getFullYear()
    ) {
      setYearInputError('');
      hideInputError(e);
    } else if (Number(e.target.value) > currentDate.getFullYear()) {
      setYearInputError('Must be in the past');
      showInputError(e);
    } else if (isNaN(Number(e.target.value))) {
      setYearInputError('Invalid input');
      showInputError(e);
    } else if (Number(e.target.value) == 0) {
      setYearInputError('');
      hideInputError(e);
    }
  };

  const handleSubmit = (e) => {
    isDateValid = false;
    e.preventDefault();
    removeAllInputError(document.querySelectorAll('input[type=text]'));

    // Set date
    let date = new Date();
    date.setFullYear(Number(birthday.year));
    date.setMonth(Number(birthday.month) - 1);
    date.setDate(Number(birthday.day));

    // Check if the input date is valid
    if (
      isValidDate(date) &&
      birthday.day > 0 &&
      birthday.day <= 31 &&
      birthday.month > 0 &&
      birthday.month <= 12 &&
      birthday.year > 0 &&
      birthday.year <= currentDate.getFullYear()
    ) {
      isDateValid = true;
    } else {
      isDateValid = false;
    }

    if (isDateValid) {
      // Check if the input date is from the past
      if (date.getTime() < currentDate.getTime()) {
        setAge(calculateAge(birthday, currentDate));
      } else {
        showAllInputError(
          document.querySelectorAll('input[type=text]'),
          'Invalid input',
          setDayInputError,
          setMonthInputError,
          setYearInputError
        );
        setAge({ day: '', month: '', year: '' });
      }
    } else if (
      // Check if date is valid and has input
      isDateValid == false &&
      (birthday.day == '' || birthday.month === '' || birthday.year == '')
    ) {
      setAge({ day: '', month: '', year: '' }); // Reset age value
      showAllInputError(
        document.querySelectorAll('input[type=text]'),
        'This field is required',
        setDayInputError,
        setMonthInputError,
        setYearInputError
      );
    } else {
      setAge({ day: '', month: '', year: '' }); // Reset age value
    }
  };

  // For filling input fields with 0 to let the user know that they inputted wrong format
  const fillDayInput = () => {
    if (!isNaN(Number(day))) {
      setDay(fillDayWithZero(birthday));
      setBirthday({
        day: fillDayWithZero(birthday),
        month: month,
        year: year,
      });
    }
  };
  const fillMonthInput = () => {
    if (!isNaN(Number(month))) {
      setMonth(fillMonthWithZero(birthday));
      setBirthday({
        day: day,
        month: fillMonthWithZero(birthday),
        year: year,
      });
    }
  };
  const fillYearInput = () => {
    if (!isNaN(Number(year))) {
      setYear(fillYearWithZero(birthday));
      setBirthday({
        day: day,
        month: month,
        year: fillYearWithZero(birthday),
      });
    }
  };
  // --------------------------
  const handleOutOfFocus = () => {
    document.querySelectorAll('input[type=text]').forEach((element) => {
      element.blur();
    });
  };

  return (
    <>
      <form className='birthday-form' onSubmit={(e) => handleSubmit(e)}>
        <div className='form-group'>
          <div className='form-control'>
            <label htmlFor='day'>Day</label>
            <input
              type='text'
              id='day'
              name='day'
              placeholder='DD'
              value={day}
              onChange={handleDayInput}
              onBlur={fillDayInput}
            />
            <small className='error'>{dayInputError}</small>
          </div>
          <div className='form-control'>
            <label htmlFor='month'>Month</label>
            <input
              type='text'
              id='month'
              name='month'
              placeholder='MM'
              value={month}
              onChange={handleMonthInput}
              onBlur={fillMonthInput}
            />
            <small className='error'>{monthInputError}</small>
          </div>
          <div className='form-control'>
            <label htmlFor='year'> Year</label>
            <input
              type='text'
              id='year'
              name='year'
              placeholder='YYYY'
              value={year}
              onChange={handleYearInput}
              onBlur={fillYearInput}
            />
            <small className='error'>{yearInputError}</small>
          </div>
        </div>

        <div className='divider'>
          <div className='line'>
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='10'>
              <line
                x1='0'
                y1='5'
                x2='100%'
                y2='5'
                stroke='#716F6F'
                strokeWidth='.2'
              />
            </svg>
          </div>

          <button
            className='btn'
            type='submit'
            onMouseOver={handleOutOfFocus}></button>
        </div>
      </form>
    </>
  );
};

BirthdayForm.propTypes = {
  setAge: Proptypes.func.isRequired,
};

export default BirthdayForm;
