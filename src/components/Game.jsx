import Board from "./Board"
import Timer from "./Timer"
import Modal from "./Modal";
import Keyboard from "./Keyboard";
import { useEffect, useState } from "react";

const Game = () => {
    const [seconds, setSeconds] = useState(30);
    const [score, setScore] = useState(0)
    const [running, setRunning] = useState(false)
    const [hidden, setHidden] = useState("hidden")
    const [display, setDisplay] = useState(true)
    const [showNames, setShowNames] = useState(false)
    const [gameMode, setGameMode] = useState(0)
    const [buttonActive,setButtonActive] = useState("")

    const [currentTile, setCurrentTile] = useState("a1")

    //maybe add space bar for pausing 
    //second game mode where a square is highlighted and you have to enter the tile in an input

    //maybe add a feature that the more in a row you get correct the higher the score 

    //add score display for highscores 

    //add instructions based on game mode 

    const resetTimer = () => {
        setSeconds(30)
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
        if (seconds === 0) {
            resetGame()
            setRunning(true)
            return
        }
        setRunning(true)
    }

    const stopTimer = () => {
        setRunning(false)
    }
    

    const startGame = () => {
        selectRandomTile()
        startTimer()
        setScore(0)
    }

    const resetGame = () => {
        selectRandomTile()
        resetTimer()
        stopTimer()
        setScore(0)
    }

    const toggleGameMode = () => [
        gameMode === 0 ? setGameMode(1) : setGameMode(0)
    ]

    useEffect(() => {
        if (seconds === 0) {
            setRunning(false)
            document.getElementById('my_modal_1').showModal()
        }
    },[seconds])

    useEffect(() => {
        if (!running && !display) {
            setButtonActive("btn-disabled")
        } else if (display) {
            setButtonActive("")
        }
    }, [running, display])



    return (
        <div className="mb-10">
            <h1 className="text-4xl text-center font-bold">Tile Game - {gameMode === 0 ? "Tile Clicker" : "Tile Typer"}</h1>
            <div className="flex flex-row justify-evenly mt-10">
                {hidden === "hidden" ? <button className={"btn"} onClick={()=>{
                    setHidden("")
                    setDisplay(false)
                }}>Show Instructions
                </button> :
                <button className={"btn" } onClick={()=>{
                    setHidden("hidden")
                    setDisplay(true)
                }}>
                    Hide Instructions</button>}
                <button 
                    className={"btn " + buttonActive}
                    onClick={startGame}
                >
                    Start
                </button>
                <button 
                    className={"btn " + buttonActive}
                    onClick={resetGame}
                >
                    Reset 
                </button>
                <button 
                    className={"btn " + buttonActive}
                    onClick={() => setShowNames(!showNames)}
                >
                    Toggle names
                </button>
                
            </div>

            <Modal
                score = {score}
            />
            {
                display && 
                <div>
                    <Timer
                        seconds={seconds}
                        setSeconds={setSeconds}
                        running={running}
                        currentTile={currentTile}
                        gameMode={gameMode}
                        score={score}
                    />    
                </div>
            }
            
            <div className="flex flex-row">
                <div className="flex flex-col m-auto my-20 gap-10">
                    <div className={"m-auto card bg-base-300 " + hidden}>
                        <div className="card-body">
                            <p className="font-bold text-center">Learn the squares on a chess board!</p>
                            <p>1. Above the board, a square will appear ex/ <b>a1</b></p>
                            <p>2. Click on the matching tile on the chess board.</p>
                            <p>3. Clicking the right tile is worth 1 point, wrong tile is -1 point.</p>
                            <p>4. Score as many points as you can in the time limit!</p>
                            <button className="btn btn-info" onClick={toggleGameMode}>Change Game Mode</button>
                        </div>
                    </div>
                    
                </div>
                
                {
                    display && 
                    <div>
                        <Board
                            currentTile={currentTile}
                            score={score}
                            setScore={setScore}
                            selectRandomTile={selectRandomTile}
                            showNames={showNames}
                            gameMode={gameMode}
                        />
                    </div> 
                }
                {
                    gameMode === 1 && 
                    <Keyboard
                        currentTile={currentTile}
                        selectRandomTile={selectRandomTile}
                        setScore={setScore}
                        score={score}
                        running={running}
                    />
                }
                        
            </div>
        </div>
        
    )
}

export default Game