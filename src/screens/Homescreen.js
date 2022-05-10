import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Pizza from '../components/Pizza'
// import pizzas from '../pizzasdata'




export default function Homescreen() {

    const dispatch = useDispatch()
    const pizzasstate = useSelector(state => state.getAllPizzasReducer)

    const { pizzas , error ,loading } = pizzasstate

    useEffect(() => {
      dispatch(getAllPizzas())
    
    }, [])
    

  return (
    <div>
        <div className="row justify-content-center">


          {loading ? (<h1>Loading</h1>) : error ? (<h1>Something went Wrong</h1>) : (
            pizzas.map(pizza=>{
              return <div className="col-md-3 m-3">
                  <div key={pizza._id}>
                      <Pizza pizza={pizza}/>
                  </div>
              </div>
          })
          )}


        </div>
    </div>
  )
}
