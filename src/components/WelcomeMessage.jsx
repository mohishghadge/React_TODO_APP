import React, { useContext } from 'react'
import { ItemContext } from '../store/ItemContext'

import styles from "./WelcomeMessage.module.css"

const WelcomeMessage = () => {
  const contextObj = useContext(ItemContext)
  const todoItems = contextObj.todoItems

  return (
    <>
        {
            todoItems.length === 0 && <p>Enjoy Your Day!!!</p>

          }
    </>
  )
}

export default WelcomeMessage