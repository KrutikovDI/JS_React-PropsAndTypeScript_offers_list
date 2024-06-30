import React from 'react'
import './App.css'
import { Listing } from './components/Listing/Listing'
import data from './assets/etsy.json'
import { itemsProps, IProps } from './module/interface'


function App() {

  return (
    <>
    <Listing items={data}/>
    </>
  )
}

export default App
