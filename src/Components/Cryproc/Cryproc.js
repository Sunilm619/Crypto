import React, { useEffect, useState } from 'react'
import LIst from '../LIst/LIst'

function Cryproc() {
    const [dat, setDat] = useState([])
    useEffect(() => {
        let fun = async () => {
            let fet = await fetch("https://apis.ccbp.in/crypto-currency-converter")
            let data = await fet.json()
            // console.log(data)
            let updarray = data.map(e => ({
                currencyLogo: e.currency_logo,
                currencyName: e.currency_name,
                euroValue: e.euro_value,
                usdValue: e.usd_value,
                id: e.id
            }))
            setDat(updarray)

        }
        fun()
    }, [])
    return (
        <div className='bg-black h-screen container text-center text-slate-300'>
            <h1>Crytpto Tracker</h1>
            <LIst dat={dat} />
        </div>
    )
}

export default Cryproc