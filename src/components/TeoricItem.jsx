import React from 'react'

export default function TeoricItem(props) {
    return (
        <div>
            <h2>
                {props.title}
            </h2>
            <p
                style={{
                    whiteSpace: 'pre-line'
                }}
            >
                {props.value}
            </p>
        </div>
    )
}
