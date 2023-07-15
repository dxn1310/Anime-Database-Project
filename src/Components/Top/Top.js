import React, { useState } from 'react'
import "./top.css"

import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Top() {

    const [mode,setMode] = useState("Popular Anime");

  return (
    <div className='top-outer'>
        <div className='top-inner'>
            <h1>Anime Database</h1>
            <div className='top-action'>
                <h2>{mode}</h2>
            </div>
            <div className='top-modes-outer'>
            <Button colorScheme='teal' variant='ghost'>
                Popular
            </Button>

            <Button colorScheme='teal' variant='ghost'>
                Airing
            </Button>

            <Button colorScheme='teal' variant='ghost'>
                Upcoming
            </Button>
            </div>
        </div>
    </div>
  )
}
