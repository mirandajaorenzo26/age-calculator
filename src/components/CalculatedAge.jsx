import Proptypes from 'prop-types';

const CalculatedAge = ({ age }) => {
  return (
    <div className='calculated-age'>
      <p className='data'>
        <span data-age>{age.year ? age.year : age.year == 0 ? 0 : '--'}</span>{' '}
        {age.year <= 1 ? 'year' : 'years'}
      </p>
      <p className='data'>
        <span data-age>
          {age.month ? age.month : age.month == 0 ? 0 : '--'}
        </span>{' '}
        {age.month <= 1 ? 'month' : 'months'}
      </p>
      <p className='data'>
        <span data-age>{age.day ? age.day : age.day == 0 ? 0 : '--'}</span>{' '}
        {age.day <= 1 ? 'day' : 'days'}
      </p>
    </div>
  );
};

CalculatedAge.propTypes = {
  age: Proptypes.object.isRequired,
};
export default CalculatedAge;
