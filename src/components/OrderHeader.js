import React from 'react'

const OrderHeader = ({dishCustomerId, clientOrderGuid, cft}) => {


    return (
        <div>
            <p>dishCustomerId:  {dishCustomerId}</p>
            <p>clientOrderGuid:  {clientOrderGuid}</p>
            <p>cft:  {cft}</p>
        </div>
    )
}

export default OrderHeader