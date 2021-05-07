import './rate.css';
import React from "react";

class Rate extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        'date': '',
        'currencyRate': {

        }
    }
    this.currency = ['USD','RUB','CAD','UAH'];
    this.getRate();
}

    getRate = () => {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=24955a4a23bc8f031dd31a6cc0a842db&format=1')
            .then(data => {
                return data.json();
            })
            .then(data => {
                this.setState({date:data.date});
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]];
                    this.setState({currencyRate: result});
                }
            })
    }
    render() {
        return(
          <div className="rate">
              <h3> Курс валют на {this.state.date}</h3>
              <div className="flex-container">
                  {Object.keys(this.state.currencyRate).map((keyName, i) => (
                      <div className="block flex-item" key={keyName}>
                          <div className="currency-name">{keyName}</div>
                          <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}
                          </div>
                          <p>* Можно купить за один EUR</p>
                      </div>
                  ))}

                  {/*<div className="block flex-item">*/}
                  {/*    <div className="currency-name">USD</div>*/}
                  {/*    <div className="currency-in">1500 Kr</div>*/}
                  {/*    <div className="currency-out">1200 Kr</div>*/}
                  {/*</div>*/}
                  {/*<div className="block flex-item">*/}
                  {/*    <div className="currency-name">USD</div>*/}
                  {/*    <div className="currency-in">1500 Kr</div>*/}
                  {/*    <div className="currency-out">1200 Kr</div>*/}
                  {/*</div>*/}
              </div>
          </div>
        );
    }
}
export default Rate;