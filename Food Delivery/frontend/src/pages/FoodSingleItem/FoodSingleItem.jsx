import React, { useContext } from 'react'
import './FoodSingleItem.css'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import SingleItemDisplay from '../../components/SingleItemDisplay/SingleItemDisplay'


const FoodSingleItem = () => {

  const {food_list} = useContext(StoreContext)
  const {foodId} = useParams()
  const food = food_list.find((e)=> e.id === Number(foodId) ) 

  return (
    <div>
      <SingleItemDisplay food={food} />
    </div>
  )
}

export default FoodSingleItem
