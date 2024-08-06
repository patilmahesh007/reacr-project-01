import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'))


function Mahesh(){
   return <h1>hello i am mahesh</h1>
}

root.render(
    <Mahesh/> 
)