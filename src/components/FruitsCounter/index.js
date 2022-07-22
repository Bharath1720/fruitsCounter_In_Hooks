import {Component} from 'react'
import './index.css'

export default class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  handleBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  handleMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="outer-container">
        <div className="inner-container">
          <h1>
            Bob ate <span>{mango}</span> mangoes <span>{banana} </span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button
                  onClick={this.handleMango}
                  className="eat-mango"
                  type="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <div>
                <button
                  onClick={this.handleBanana}
                  className="eat-banana"
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
