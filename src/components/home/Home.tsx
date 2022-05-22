import React, { useEffect, useState , useCallback, useRef, useLayoutEffect } from 'react'
import { deleteProfil, incrementAsync } from '../../redux/slices/homeSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import Card from '../utils/Card'
import Header from '../utils/Header'

const  Home=() =>{
    const {data,loading} =useAppSelector(state=>state.Home)
    const dispatch = useAppDispatch()

    const [more,setMore]=useState(10)

const refs:any=useRef()

  useEffect(()=>{
dispatch(incrementAsync(more))
  },[dispatch,more])

 useEffect(() => {  
   const handleScroll :any=() => {

  const bottom = Math.ceil(window.innerHeight + window.scrollY) === document.documentElement.scrollHeight

  if (bottom) {
   

    setMore(prev=>prev+10)

  

   
   
  }
  
}
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
 


  return (
    <div ref={refs} style={{flex:1}} >
        <Header />
        <div style={{display:"flex",flexDirection:"row",background:"#F7F7F7",minHeight:"100vh"}} > 
        {data.length >0 ?<Card data={data} deleteProfil={(id:number)=>dispatch(deleteProfil(id))} /> :
        <h2 style={{textAlign:"center",width:"100%",height:"100%"}}>No users</h2>
        }
              

         

        </div>
        {loading && <h2 style={{textAlign:"center",width:"100%"}}>Loading...</h2>}  
    </div>
  )
}
export default   Home