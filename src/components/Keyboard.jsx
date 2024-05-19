import { useState, useEffect } from "react"
import Alert from "./Alert"

export default function ({score, selectRandomTile, currentTile, setScore , running}) {

    const [currentChoice, setCurrentChoice] = useState("")
    const [alertStack, setAlertStack] = useState([])
    const [disabled, setDisabled] = useState(!running)

    useEffect(()=> {
        setDisabled(!running)

    }, [running])

    //disabled property not class

    const handleKeyDown = (e) => {
        let key = e.key
        let element = document.getElementById(key)

        if (key === "Enter") {
            handleScoring()
        }

        element.classList.add("bg-primary")
    }

    const handleKeyUp = (e) => {
        let key = e.key

        console.log(key)

        let element = document.getElementById(key)

        element.classList.remove("bg-primary")
    }

    const handleOnChange = (e) => {
        setCurrentChoice(e.target.value)
    } 

    const incrementScore = () => {
        setScore(score+1)
        selectRandomTile()
        setAlertStack([...alertStack, <Alert type="success"/>])
    }

    const decrementScore = () => {
        setScore(score-1)
        setAlertStack([...alertStack, <Alert type="error"/>])
    }

    const handleScoring = () => {
        if (currentChoice === currentTile) {
            incrementScore()
        } else {
            decrementScore()
        }
        setCurrentChoice("")
    }


    return (
        <div className="mx-10 flex flex-col">
            <div className="">
                <div className="flex justify-center gap-1 my-1 w-full">
                    <kbd className="kbd" id="1">1</kbd>
                    <kbd className="kbd" id="2">2</kbd>
                    <kbd className="kbd" id="3">3</kbd>
                    <kbd className="kbd" id="4">4</kbd>
                    <kbd className="kbd" id="5">5</kbd>
                    <kbd className="kbd" id="6">6</kbd>
                    <kbd className="kbd" id="7">7</kbd>
                    <kbd className="kbd" id="8">8</kbd>
                    
                </div>
                <div className="flex justify-center gap-1 my-1 w-full">
                    <kbd className="kbd" id="a">a</kbd>
                    <kbd className="kbd" id="b">b</kbd>
                    <kbd className="kbd" id="c">c</kbd>
                    <kbd className="kbd" id="d">d</kbd>
                    <kbd className="kbd" id="e">e</kbd>
                    <kbd className="kbd" id="f">f</kbd>
                    <kbd className="kbd" id="g">g</kbd>
                    <kbd className="kbd" id="h">h</kbd>
                    
                </div>
            </div>
            <input
                className={"input my-10 bg-base-300 " + disabled}
                type="text"
                value={currentChoice}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                placeholder="letter + number, no spaces, enter"
                maxLength={2}
                disabled={disabled}
            />
            {
                alertStack.map(a => a)
            }
        </div>
        
    )
}