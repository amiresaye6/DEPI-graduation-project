import React from 'react'

const SingleItemDisplay = (props) => {

  const {food} = props;
  return (
    <div className='singleitemdisplay'>
      <img src={food.image} alt="" />
    </div>
  )
}

export default SingleItemDisplay
