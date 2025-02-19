import { listCamping } from '@/service/camping';

import React, { useEffect, useState } from 'react'
import CampingCard from '../card/CampingCard';

const CampingLists = () => {
    const [campings, setCampings] = useState([])
   
        
    useEffect(()=>{
     
        fecthData()
    },[])
    const fecthData = async ()=>{
        try {
            const res = await listCamping()
            setCampings(res.data.result)
            
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <section className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4'>
        {
            campings.map((camping)=>{
                return <CampingCard key={camping.id} camping={camping} />
            })
        }
    </section>
  )
}

export default CampingLists