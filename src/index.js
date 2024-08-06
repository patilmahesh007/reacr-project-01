import { createRoot } from "react-dom/client"

const root= createRoot(document.getElementById('root'))


const Mahesh=({name,city})=>{
    return <h1>Hi I am {name} i am from {city}</h1>
}
root.render(
<>
<Mahesh name="Mahesh" city=" pune"/>
<Mahesh name="Yash" city=" pune"/>
<Mahesh name="Aditya" city=" Mumbai"/>
</>
)