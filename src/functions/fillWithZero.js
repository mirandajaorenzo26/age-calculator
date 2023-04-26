export const fillDayWithZero = (birthday) => {
  if (birthday.day !== '' && birthday.day.length < 2) {
    const tempArr = birthday.day.split('');
    while (tempArr.length < 2) {
      tempArr.unshift('0');
    }
    return tempArr.join('');
  }
  return birthday.day;
};

export const fillMonthWithZero = (birthday) => {
  if (birthday.month !== '' && birthday.month.length < 2) {
    const tempArr = birthday.month.split('');
    while (tempArr.length < 2) {
      tempArr.unshift('0');
    }

    return tempArr.join('');
  }
  return birthday.month;
};

export const fillYearWithZero = (birthday) => {
  if (birthday.year !== '' && birthday.year.length < 4) {
    const tempArr = birthday.year.split('');
    while (tempArr.length < 4) {
      tempArr.unshift('0');
    }
    return tempArr.join('');
  }
  return birthday.year;
};
