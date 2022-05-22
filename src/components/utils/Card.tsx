import React, { memo, useState } from 'react'
import MyModal from './MyModal'




const  Card=({data,deleteProfil}:{data:[],deleteProfil:Function}) =>{
  
    const [showModal,setShowModal]=useState(false)
const [profileItem,setProfileItem]=useState({})
    const handleModal=(item:any)=>{
setShowModal(true)
setProfileItem(item)
    }
  return (
      <div style={styles.container}>
<MyModal visibility={showModal} showModal={setShowModal} item={profileItem} />
    {data.map((item:any,i:number)=>{
        return (
            <div key={i} style={styles.bloc}>
      
   <div style={{flexDirection:"row",display:"flex"}}>

            <img src={item.picture} alt={"profilepicture"}  style={styles.logo} />
            <h4 style={{paddingLeft:10}}> {item.firstName +' '+item.lastName}</h4>
            </div>
            <div style={{position:"absolute",bottom:10,right:10}}>
               
                <div style={{flexDirection:"column",display:"flex",alignItems:"flex-end",justifyContent:"flex-end",height:"100%",paddingRight:10,paddingBottom:10}}>
                    <button onClick={()=>handleModal(item)} style={styles.btn_profile}>
                        Profile
                    </button>
                    <button style={styles.btn_delete} onClick={()=>deleteProfil(item.id)}>
                        Delete
                    </button>
                    </div>
                </div>
       

    </div>
        )
    })}
  
    </div>
  )
}
const styles :any ={
    container:{flexDirection:"row",display:"flex",flexWrap:"wrap"},
    bloc:{position:"relative",width:449,height:238,background:"white",margin:10,display:"flex",flexDirection:"row",justifyContent:"space-between"},
    logo:{width:200,height:"100%"},
    btn_profile:{background:"#49B9DC",border:"none",color:"white",padding:"5px 10px 5px 10px",marginBottom:5,cursor:"pointer"},
    btn_delete:{background:"#DC497E",border:"none",color:"white",padding:"5px 10px 5px 10px",cursor:"pointer"}


}
export default memo(Card) ;