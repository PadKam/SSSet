import React from "react"
import s from './Game.module.css'
import News from "../News/News";

class Games extends React.Component {
    state = {
        table: [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ],
        historyy: [],
        move: true,
        vin: ''
    }

    updateState = (props) => {

        if (this.state.table[props] == '') {
            let arr = [];
            for(let i = 0; i<this.state.table.length; i++)
                arr[i] = this.state.table[i];

            arr[props] = this.state.move ? "X" : "O";

            let copH = this.state.historyy
            copH.push(arr)

            this.setState({
                table: arr,
                move: !this.state.move,
                historyy: copH
            },()=>this.vin(this.state.move))

        }
    }

    backHistory = (index) =>{
        let copyHistory = this.state.historyy.slice(0,index+1);
        this.setState({
            table: copyHistory[index],
            historyy: copyHistory,
            vin:'',
            move: (index+1)%2 !=0 ? true: false
        })

        return;
    }

    lilo = () =>{
        let hist = this.state.historyy
        hist = hist.map((el,index)=><li><button onClick={()=>this.backHistory(index)}>{index+1}</button></li>)
        return(
            <lo>
                {hist}
            </lo>
        )
    }

    vin = (vinUs) => {
        let vinn = !vinUs ? "X" : "O";
        let arr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let key in arr) {
            if ((this.state.table[arr[key][0]] == vinn) && (this.state.table[arr[key][1]] == vinn) && (this.state.table[arr[key][2]] == vinn))
                this.setState({
                    vin: vinn
                })
        }

    }

    throwOff = () => {
        let arr = ['', '', '', '', '', '', '', '', ''];
        this.setState({
            table: arr,
            move: true,
            vin:'',
            historyy:[]
        })
    }

    ComponentButton = (props) => {
        return (
            <div>
                <button onClick={() => this.updateState(props)}>{this.state.table[props]}</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className={s.crnol}>
                    <div>
                        {this.ComponentButton(0)}
                        {this.ComponentButton(1)}
                        {this.ComponentButton(2)}
                    </div>
                    <div>
                        {this.ComponentButton(3)}
                        {this.ComponentButton(4)}
                        {this.ComponentButton(5)}
                    </div>
                    <div>
                        {this.ComponentButton(6)}
                        {this.ComponentButton(7)}
                        {this.ComponentButton(8)}
                    </div>
                </div>
                {this.state.vin != '' && <span>Vin {this.state.vin}</span>}
                <button onClick={this.throwOff}>Сброс</button>
                <div>
                    {this.lilo()}
                </div>
            </div>
        )
    }
}


export default Games