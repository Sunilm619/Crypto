import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Item from '../Item/Item'
function LIst(props) {
    const { dat } = props
    return (
        <div>
            <img className='h-1/6 ml-40 w-8/12' src='https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png' alt='cryptocurrency' />
            <div className='container'>
                <ul className='flex justify-around bg-slate-500'>
                    <li>Coin Type</li>
                    <div className='flex '>
                        <li>USD</li>
                        <li className='ml-[100px]'>EURO</li>
                    </div>

                </ul>
                <Item dat={dat} />
            </div>
        </div>
    )
}

export default LIst