import React from "react";

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {rate: props.rate};
    }

    calcRate = (event) => {
        event.preventDefault();
        console.log('work');
        let elements = event.target.elements;
        console.log(elements);
        console.log(elements['current-currency'].value);
        console.log(elements['type-currency'].value);
        let currentCurrency = elements['current-currency'].value;
        let typeCurrency = elements['type-currency'].value;
        this.setState({result: (currentCurrency / this.state.rate[typeCurrency])});
    }

    render() {
        return(
           <div className="calculator">
               <h3> Калькулятор обмена</h3>
               <div className="block">
                   <div>Я хочу</div>
                   <div>
                       <form onSubmit={this.calcRate}>
                       <input type="number" defaultValue="150" name="current-currency"/>
                       <select name="type-currency" id="">
                           {Object.keys(this.props.rate).map((keyName,i) => (
                               <option key={keyName} value={keyName}>{keyName}</option>
                           ))}
                       </select>
                           <input type="submit" defaultValue="calc"/>
                       </form>
                   </div>
                   <div>
                       <h4>Результат</h4>
                       <ul className="calc-res">
                           <li>EUR {this.state.result.toFixed(2)}</li>
                       </ul>
                   </div>
               </div>
           </div>
        );
    }
}
export default Calc;