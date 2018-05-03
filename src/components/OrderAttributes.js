import React from 'react'

const OrderAttributes = ({attributes}) => {

    const payload = (typeof attributes === 'undefined')
        ?"No attributes..."
        :attributes.map((a)=><p>attribute: {a}</p>)
    return (
        <div>
            {payload}
        </div>
    )
}

export default OrderAttributes