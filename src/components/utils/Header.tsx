import React from 'react'
import logo from "../../assets/images/logo.png"



const  Header=()=> {
  return (
    <div style={styles.container}>
        <img src={logo} alt="logo"  style={styles.logo}/>
       
    </div>
  )
}

const styles={
  container:{
      background:"white",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      height:100,
    
      boxShadow: "0px 0px 2px 0px rgb(0 0 0 / 85%)"
  },
  logo :{
      height:"100%"
  }
 
}
export default Header