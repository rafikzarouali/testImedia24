import React, { memo } from 'react'


interface Modal{
  visibility:boolean,
  showModal:Function,
  item:{firstName?:string,lastName?:string,picture?:string,title?:string}
}
const MyModal:React.FC<Modal>=({visibility,showModal,item})=> {
 
  return (
    <>
      {visibility && 
      <div style={{background:"#00000094",position:"fixed",zIndex:9,width:"100%",height:"100%",alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column",top:0}} >
       

        <div  style={{position:"relative",width:"45vw",height:250,borderRadius:30,background:"white",margin:10,display:"flex",flexDirection:"row"}}>
        <button style={{position:"absolute",right:30,top:10,background:"red",border:"none",borderRadius:30,width:30,height:30,color:"white",fontWeight:"bold",fontSize:15,cursor:"pointer"}} onClick={()=>showModal(false)} >x</button>
   <div style={{flexDirection:"row",display:"flex",marginLeft:10,alignItems:"center"}}>

            <img src={item.picture} alt={"profilepicture"}  style={{width:200,height:"80%",borderRadius:10}} />
       
            </div>
            <div style={{marginTop:10}}>
            <h4 style={{paddingLeft:10}}> {item.title+". "+item.firstName +' '+item.lastName}</h4>
            </div>
       

    </div>
      </div>
      }
    </>
  )
}

export default  memo(MyModal) 