import React from 'react'

export const Button = (props)=>{
    return (
        <>
            <button className={props.className} value={props.value} onClick={props.onHandleClick}>{props.name}</button>
        </>
    )
}