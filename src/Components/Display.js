import React from 'react'
import "./Display.css"

export const Display = (props)=>{
    return (
        <>
            <div id="eq"> <span>{props.equation}</span></div>
            <div id="dis"> <span>{props.display}</span></div>
        </>
    )
}