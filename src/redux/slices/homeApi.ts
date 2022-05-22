import axios from "axios";
export async function  fetchData(more:number) {
  try{
    return   await   axios.get("https://dummyapi.io/data/v1/user?limit="+more,{
      headers:{
        "app-id":"62066a2f508e80d232ca6a72"
      }
    }).then(res=>res)
  }catch(err){
    console.log(err)
  }
}
