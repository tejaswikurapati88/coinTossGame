// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  toss = () => {
    const tos = Math.floor(Math.random() * (1 - 0 + 1)) + 0
    if (tos === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        total: prevState.total + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
    return tos
  }

  render() {
    const {total, heads, tails, imageUrl} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="img" />
          <button type="button" onClick={this.toss} className="button">
            Toss Coin
          </button>
          <div className="num-cont">
            <p className="results">Total: {total}</p>
            <p className="results">Heads: {heads}</p>
            <p className="results">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
