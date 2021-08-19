import React, { useState } from 'react'

function HomePage() {

    const [inputList, setInputList] = useState();
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value)
    };
    const listOfItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDos List</h1>
                    <br />
                    <input type="text" placeholder="Add a Items"
                        onChange={itemEvent} value={inputList} />
                    <button onClick={listOfItem}> + </button>
                    <ol>
                        {/* <li> {inputList} </li> */}

                        {Items.map((itemval) => {
                            return <li> {itemval} </li>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default HomePage
