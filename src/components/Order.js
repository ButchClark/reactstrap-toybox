import React from 'react'
import OrderHeader from './OrderHeader'
import OrderAttributes from './OrderAttributes'
import OrderLines from './OrderLines'

const Order  = ({order}) =>{

    return (
        <div>
            <OrderHeader
                dishCustomerId={order.dishCustomerId}
                clientOrderGuid={order.clientOrderGuid}
                cft={order.cft}
            />
            <OrderAttributes attribs={order.attributes} />
            <OrderLines lines={order.lines} />
        </div>
    )
}

export default Order