import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
           className="die-face"
            style={styles}
            onClick={props.holdDice}

        >
        
        {props.value == 1 &&
           <span className="first-face"> </span>
        }    
        
        {props.value == 2 &&
         <>
           <span className="two-face"> </span>
           <span className="two-face"> </span>
         </>  
        } 
        
        {props.value == 3 &&
         <>
           <span className="three-face"> </span>
           <span className="three-face"> </span>
           <span className="three-face"> </span>
         </>  
        } 
        
        {props.value == 4 &&
         <div className="four-face">
           <span> </span>
           <span> </span>
           <span> </span>
           <span> </span>
         </div>  
        } 
        
        {props.value == 5 &&
         <div className="five-face">
           <span> </span>
           <span> </span>
           <span> </span>      
           <span> </span>
           <span> </span>
         </div>  
        }
        
        {props.value == 6 &&
         <div  className="six-face">
           <span> </span>
           <span> </span>
           <span> </span>      
           <span> </span>
           <span> </span>
           <span> </span>
         </div>  
        }
        
        </div>
    )
}