'use client'
import { useInView } from 'react-intersection-observer'

import Hero from "./_commponents/Hero";
import Whyus from "./_commponents/Whyus";
import FHP from "./Flights/_comp/FHP";
import dynamic from 'next/dynamic'

const DHP = dynamic(() => import('./Destinations/_components/DHP'), {
  loading: () => <div>Loading...</div>, // optional fallback
  ssr: false, // only load on client (use if it's client-heavy)
})
const SHP = dynamic(() => import('./Store/_comp/SHP'), {
  loading: () => <div>Loading...</div>, // optional fallback
  ssr: false, // only load on client (use if it's client-heavy)
})

  


export default function Home() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
   <div>
    <Hero/> 
    <Whyus/>
    <FHP/>
    
    <div ref={ref}>
    {inView ? (
    <>
      <DHP />
      <SHP />
    </>
  ) : (
    <div className="text-center text-orange-600">Loading sections...</div>
  )}
    </div>


    
   </div>

  );
}
