import React, { useEffect } from 'react'
import { useState , useRef } from 'react'
import Board from './board'
import Result from './result'

import './game.css'
import './bets.css'

import Numbers from './numbers'
import Instruct from './instruct'



const GameBoard = ({ values }) => {
    var [time, setTime] = useState(15)
    const [select , setSelect] = useState(false)
    const [instruct, setInstruct] = useState(true)
    const [visible, setVisible] = useState(true)
    const [treasure, setTreasure] = useState([])
    const [numbers, setNumbers] = useState([])
    const [count , setCount] = useState(0)
    
    
    
    const generateRandom = () => {
        console.log(numbers)
        while(numbers.length < 5){
            const num = Math.floor(Math.random()*48) + 1;
            document.getElementById(num).style.background = '#749774'
            console.log(num)
            numbers.push(num)
        }
    }

    const enableTimer = () => {
        setSelect(true)
        setVisible(false)
        setInstruct(false)
      //  generateTreasure()
        


    }

    

    return (
        <>
            {instruct && <Instruct></Instruct>}

            {select && <Board values={values} numbers={numbers} setNumbers={setNumbers} time={time} count={count} setCount={setCount} setTime={setTime} setTreasure={setTreasure} treasure={treasure} select={select}></Board>}

            {visible && <button class="button" onClick={enableTimer}>Start Hunt</button>}
            
            {numbers.length > 0 && <Numbers numbers={numbers} treasure ={treasure} />}
        </>
    )
}






export default GameBoard