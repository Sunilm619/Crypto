import React from 'react'

function Item(props) {
    console.log(props)
    const { dat } = props
    return (
        <>
            {
                dat.map(e =>
                    <div className='container'>
                        <ul className='flex justify-around'>
                            <div className='flex'>
                                <img className="w-1/12" src={e.currencyLogo} alt={e.id} />

                                <li>{e.currencyName}</li>
                            </div>
                            <div className='flex '>
                                <li>{e.usdValue}</li>
                                <li className='ml-[100px]'>{e.euroValue}</li>
                            </div>


                        </ul>
                    </div>)
            }</>
    )
}

export default Item