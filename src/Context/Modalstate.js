import ModalContext from "./Modalcontext";
import { useState } from "react";

const ModalState = (props) => {

    const [showModal , setshowModal] = useState(true);
    const [isLogged , setisLogged] = useState(true);

    return(
        <ModalContext.Provider value={{showModal , setshowModal , isLogged , setisLogged}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalState;

