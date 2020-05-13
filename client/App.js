import React, { Component } from 'react';
import store, {ADD_ROW, addRow, changeColor} from '../src/store'


export default class App extends Component {
    constructor() {
        super()
        this.state = store.getState();

    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {

        return (
            <div>
                <h1>Pixelate</h1>

                <div>
                    <button onClick={() => store.dispatch(addRow())} id='add-row'>Add a row</button>
                    <select onChange={()=> store.dispatch(changeColor(event.target.value))}>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="brown">Brown</option>
                    </select>
                </div>
                <table>
                    <tbody>
                    {this.state.grid.map((row, rowIndex) =>
                        <tr key={rowIndex}>
                            {row.map((color, cellIndex) => <td key={cellIndex} className={color}></td>)}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

        )
    }
}