import Board from "./Board"
import Timer from "./Timer"
import { useState } from "react";

const Game = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(30);
    const [score, setScore] = useState(0)
    const [running, setRunning] = useState(false)
    const [hidden, setHidden] = useState("")

    const [currentTile, setCurrentTile] = useState("a1")

    const resetTimer = () => {
        setSeconds(60)
    }

    const selectRandomTile = () => {
        const letters = ["a", "b", "c", "d", "e", "f", "g", "h", ]
        const numbers = [8,7,6,5,4,3,2,1]

        let list = []

        numbers.map((number) => {
            letters.map((letter) => {
                list.push(`${letter}${number}`)
            })
        })

        setCurrentTile(list[Math.floor(Math.random() * list.length)])
    }

    const startTimer = () => {
        setRunning(true)
    }

    const stopTimer = () => {
        setRunning(false)
    }
    

    const startGame = () => {
        selectRandomTile()
        startTimer()
    }

    const resetGame = () => {
        selectRandomTile()
        resetTimer()
        stopTimer()
    }

    return (
        <div className="">
            <h1 className="text-4xl text-center font-bold">Tile Game</h1>
            <div className="flex flex-row justify-evenly mt-10">
                {hidden === "hidden" ? <button className="btn" onClick={()=>setHidden("")}>Show Instructions</button> :
                <button className="btn" onClick={()=>setHidden("hidden")}>Hide Instructions</button>}
                <button 
                    className="btn"
                    onClick={startGame}
                >
                    Start Game
                </button>
                <button 
                    className="btn"
                    onClick={resetGame}
                >
                    Reset Game
                </button>
                
            </div>
            
            <div className="flex gap-12 flex-row">
                <div className="flex flex-col m-auto gap-10">
                    <div className={"m-auto card bg-base-300 " + hidden}>
                        <div className="card-body">
                            <p>Learn the squares on the chess board by playing along.</p>
                            <p>1. At the bottom of the screen, a tile code will appear ex/ <b>a1</b></p>
                            <p>2. Click on the matching tile on the chess board.</p>
                            <p>3. Clicking the right tile is worth 1 point, wrong tile is -1 point.</p>
                            <p>4. Score as many points as you can in the time limit!</p>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <Timer
                        minutes={minutes}
                        seconds={seconds}
                        setMinutes={setMinutes}
                        setSeconds={setSeconds}
                        running={running}
                        currentTile={currentTile}
                    />
                    <Board
                        currentTile={currentTile}
                        score={score}
                        setScore={setScore}
                        selectRandomTile={selectRandomTile}
                    />
                    <div className="card my-10 bg-info">
                        <div className="card-body text-2xl font-bold text-center">
                            Score: {score}
                        </div>
                    </div>
                </div>         
            </div>
        </div>
        
    )
}

export default Game