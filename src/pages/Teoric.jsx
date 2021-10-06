import React from 'react'
import TeoricItem from '../components/TeoricItem'
import initialState from '../initialState'
export default function Teoric() {
    const {asks} = initialState
    console.log('>>: initialState > ', initialState.asks)
    return (
        <div>
            {
                asks.map(element => {
                    return(
                        <TeoricItem
                            {... element}
                            key={element.title}
                        />
                    )
                })
            }
        </div>
    )
}
