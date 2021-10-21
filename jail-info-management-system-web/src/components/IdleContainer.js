import React, { useEffect, useState } from "react";
import IdleTimer from "./IdleTimer";

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