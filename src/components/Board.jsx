import { useState } from "react"
import Alert from "./Alert"

const Board = ({currentTile, setScore, score, selectRandomTile, showNames, gameMode}) => {
    const [alertStack, setAlertStack] = useState([])

    const renderGrid = () => {
        const letters = ["a", "b", "c", "d", "e", "f", "g", "h", ]
        const numbers = [8,7,6,5,4,3,2,1]

        const incrementScore = () => {
            setScore(score+1)
            selectRandomTile()
            setAlertStack([...alertStack, <Alert type="success"/>])
        }

        const decrementScore = () => {
            setScore(score-1)
            setAlertStack([...alertStack, <Alert type="error"/>])
        }

        let squares = numbers.map((number) => {

            return letters.map((letter) => {

                let color = number%2 === 0 ? 
                    letters.indexOf(letter)%2 === 0 ? "bg-secondary" : "bg-primary" 
                    : letters.indexOf(letter)%2 === 0 ? "bg-primary" : "bg-secondary"


                if (currentTile === `${letter}${number}`) {

                    if (gameMode === 1 ) {
                        color = "bg-info"
                    }

                    return (
                        <button 
                            className={"flex-row btn justify-center items-center w-14 h-14 " + color} 
                            onClick = {incrementScore}
                        >
                            {
                                showNames && <span>
                                    <b>{letter}{number}</b>
                                </span>
                            }
                        
                            
                        </button>
                    )
                } else {
                    return (
                        <button 
                            className={"flex-row btn justify-center items-center w-14 h-14 " + color} 
                            onClick = {decrementScore}
                        >
                            {
                                showNames && <span>
                                    <b>{letter}{number}</b>
                                </span>
                            }
                        </button>
                    )
                }
            })
        })
        return squares
    }


    return (
        <>
            <div className="grid grid-cols-8 gap-1">
                {renderGrid()}
            </div>
            {
                alertStack.map(a => a)
            }
        </>
        
            
    )
}

export default Board