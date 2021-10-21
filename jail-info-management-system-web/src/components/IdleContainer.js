import React, { useEffect } from "react";
import IdleTimer from "./IdleTimer";

//Used as a container for the Idle timer class, and implements it in useEffect
const IdleContainer = ({timeoutfunction}) => {

    useEffect(() => {
         const timer = new IdleTimer({
                timeout: 1000, //expire after 5 minutes
                onTimeout: () => {
                timeoutfunction();
                }
         });

    return () => {
      timer.cleanUp();
    };
  }, []);
    return (
        <div className= 'IdleContainer'>
        </div>
    )
}
export default IdleContainer;