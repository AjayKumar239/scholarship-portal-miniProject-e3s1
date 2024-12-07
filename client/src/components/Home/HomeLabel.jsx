import React from 'react'
import { Carousel } from './Carousel'
import { NavigationIcons } from './NavigationIcons'

export function HomeLabel() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-100 to-gray-200">
      <Carousel />
      <NavigationIcons />
    </div>
  )
}

