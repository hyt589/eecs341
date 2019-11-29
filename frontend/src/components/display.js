import React from 'react'
import OrderPage from './order'

const displays = {
    welcome: <div>
        <h1>welcome</h1>
        </div>,
    product: <div>
        <h1>Product page</h1>
    </div>,
    supplier: <div>
        <h1>Supplier page</h1>
    </div>,
    order: <OrderPage />
}

export default displays