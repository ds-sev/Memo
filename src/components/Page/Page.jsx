// import PropTypes from 'prop-types'

import React from 'react'

function Page(props)  {

  const onBtnClick = (evt) => {
    const year = +evt.currentTarget.innerText
    props.setYear(year)
  }


    return (
      <div>
        <div>
          <button onClick={onBtnClick}>2022</button>
          <button onClick={onBtnClick}>2010</button>
          <button onClick={onBtnClick}>2666</button>
          <button onClick={onBtnClick}>2007</button>
        </div>
        <p>
          У тебя 100500 фото за {props.year} год
        </p>
      </div>
    );

}

// Page.propTypes = {
//   year: PropTypes.number.isRequired,
//   photos: PropTypes.array.isRequired,
// };

export default Page
