import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'))


const Mahesh = (props) => {
    return <h1>Hello I am {props.name} I study in {props.class} </h1>
}
root.render(
    <>     <Mahesh name="Mahesh" class="FYMCS" />
           <Mahesh name="Aditya" class="TYBCS" />
          <Mahesh name="Sarthak" class="SYBCS" />
    </>
) 