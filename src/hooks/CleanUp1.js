
import React, { useEffect, useState } from 'react'

const CleanUp1 = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Component did mounteds")
        return () => {
            console.log("Component unmount")
        }
    })

    useEffect(() => {
        console.log("Component did mount on counter change")
        return () => {
            console.log("Component unmount on counter change")
        }

    }, [counter])


    return (
        <div className='functional-app'>
            <h1>How to add clean up functio</h1>
            <h2>Counter : {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>
                Add Counter
            </button>
        </div>
    )
}
export default CleanUp1
