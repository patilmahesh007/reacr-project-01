import {createRoot} from "react-dom/client"

const root =createRoot(document.getElementById('root'))


const Mahesh=({name,city})=>{
 
   return <h1>hi i am {name} from  { city}</h1>;
  
}

root.render(
    <>
    <Mahesh name=" Mahesh"  city="Pune"/>
    <Mahesh name=" Adi"  city="Pune"/>
    <Mahesh name=" Om"  city="Pune"/>
    <h1>hello</h1>
        </>
)