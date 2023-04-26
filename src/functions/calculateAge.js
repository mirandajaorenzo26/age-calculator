const calculateAge = (birthday, currentDate) => {
  if (birthday.day && birthday.month && birthday.year) {
    const strBirthday = `${birthday.year}-${birthday.month}-${birthday.day}`;
    const birthDate = new Date(strBirthday);

    const yearDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff = currentDate.getDate() - birthDate.getDate();

    let years = yearDiff;
    let months = monthDiff;
    let days = dayDiff;

    // Check if the birth date hasn't happened yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      years--;
      months += 12;
      if (dayDiff < 0) {
        const daysInLastMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).getDate();
        days = dayDiff + daysInLastMonth;
        months--;
      }
    }
    return {
      day: days,
      month: months,
      year: years,
    };
  } else {
    return {
      day: 0,
      month: 0,
      year: 0,
    };
  }
};

export default calculateAge;
