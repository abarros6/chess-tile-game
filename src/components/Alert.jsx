import { useState, useEffect } from 'react'

const Alert = ({type, message, toggleButton}) => {

    const Message = () => {
        const [show, setShow] = useState(true)
      
        // On componentDidMount set the timer
        useEffect(() => {
          const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(false)
          }, 3000)
      
          return () => {
            clearTimeout(timeId)
          }
        }, []);
      
        // If show is false the component will return null and stop here
        if (!show) {
          return null;
        }
      
        // If show is true this will be returned
        return (
          <>
              {selectAlert()}
          </>
        )
      }

    const selectAlert = () => {
        switch (type) {
            case "info":
                return (
                    <div role="alert" className="alert alert-info">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{message}</span>
                        <div>
                            <button className="btn btn-sm" onClick = {toggleButton}>close</button>
                        </div>
                    </div>
                );
            case "warning" : 
                return (
                    <div role="alert" className="alert alert-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>{message}</span>
                        <div>
                            <button className="btn btn-sm onClick = {toggleButton}">close</button>
                        </div>
                    </div>
                )
            case "success" :
                return (
                    <div role="alert" className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Correct Square</span>
                    </div>
                )
            case "error" :
                return (
                    <div role="alert" className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Wrong Square</span>
                    </div>
                )
        }
    }

    return (
        <div className="p-5 fixed bottom-0 rounded-lg ">
            <Message/>
        </div>
    )
} 

export default Alert
    

