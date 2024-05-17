import { useState } from "react"

const Board = ({currentTile, setScore, score, selectRandomTile}) => {

    const renderGrid = () => {
        const letters = ["a", "b", "c", "d", "e", "f", "g", "h", ]
        const numbers = [8,7,6,5,4,3,2,1]

        let squares = numbers.map((number) => {

            return letters.map((letter) => {

                let color = number%2 === 0 ? 
                    letters.indexOf(letter)%2 === 0 ? "bg-secondary" : "bg-primary" 
                    : letters.indexOf(letter)%2 === 0 ? "bg-primary" : "bg-secondary"


                if (currentTile === `${letter}${number}`) {
                    return (
                        <button 
                            className={"flex-row btn justify-center items-center w-14 h-14 " + color} 
                            onClick = {() => {
                                setScore(score+1)
                                selectRandomTile()
                            }}
                        >
                            <span>
                                {/* <b>{letter}{number}</b> */}
                            </span>
                            
                        </button>
                    )
                } else {
                    return (
                        <button 
                            className={"flex-row btn justify-center items-center w-14 h-14 " + color} 
                            onClick = {() => setScore(score-1)}
                        >
                            <span>
                                {/* <b>{letter}{number}</b> */}
                            </span>
                            
                        </button>
                    )
                }
            })
        })
        return squares
    }


    return (
        
        <div className="grid grid-cols-8 gap-1">
            {renderGrid()}
        </div>
            
    )
}

export default Board