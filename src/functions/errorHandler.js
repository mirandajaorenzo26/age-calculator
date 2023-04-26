export const showAllInputError = (
  elements,
  message,
  setDayInputError,
  setMonthInputError,
  setYearInputError
) => {
  elements.forEach((element, index) => {
    if (element.value === '') {
      element.nextElementSibling.classList.add('display-error');
      element.previousElementSibling.classList.add('label-error');
      element.classList.add('input-error');
      if (index == 0) setDayInputError(message);
      else if (index == 1) setMonthInputError(message);
      else if (index == 2) setYearInputError(message);
    }
  });
};

export const removeAllInputError = (elements) => {
  elements.forEach((element) => {
    if (element.value === '') {
      element.nextElementSibling.classList.remove('display-error');
      element.previousElementSibling.classList.remove('label-error');
      element.classList.remove('input-error');
    }
  });
};

export const showInputError = (e) => {
  e.target.nextElementSibling.classList.add('display-error');
  e.target.previousElementSibling.classList.add('label-error');
  e.target.classList.add('input-error');
};

export const hideInputError = (e) => {
  e.target.nextElementSibling.classList.remove('display-error');
  e.target.previousElementSibling.classList.remove('label-error');
  e.target.classList.remove('input-error');
};
