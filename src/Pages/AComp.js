
import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {increment} from '../redux/actions/action'
import {decrement} from '../redux/actions/action'


const AComp = () => {
     
    const dispatch = useDispatch()
    const counter= useSelector((state) => state.counter)
    const islogged = useSelector((state) => state.islogged)


    return (
        <div>

            <h1>Hello world</h1>
            <h1> counter :{ counter}</h1>

            <button onClick = {()=> dispatch(increment())}>+</button>

            <button onClick = {() => dispatch(decrement())}> -</button>

            <h1> islogged : {islogged}</h1>

           {/*  <input value={reducer} onChange={(e) => dispatch(Action(e.target.value))} /> */}
        </div>
    )
}

export default AComp
