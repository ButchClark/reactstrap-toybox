import React from 'react'

const OrderLines = ({lines}) => {
    console.log(`OrderLines> lines: ${JSON.stringify(lines)}`)
    const payload = (typeof lines==='undefined')
        ?"No lines..."
        :lines.map(l=><p>line: {l.id}, type: {l.type}</p>)

    return (
        <div>
            <h6>Lines</h6>
            {payload}
        </div>
    )
}

export default OrderLines