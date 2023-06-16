// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  changeBtn = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      this.setState({isSubscribe: false})
    } else {
      this.setState({isSubscribe: true})
    }
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div>
        <div className="welcome-bg">
          <h1 className="welcome-heading">Welcome</h1>
          <p className="welcome-description">Thank you! Happy Learning</p>
          {isSubscribe ? (
            <button
              type="button"
              className="subscribe-btn"
              onClick={this.changeBtn}
            >
              Subscribe
            </button>
          ) : (
            <button
              type="button"
              className="subscribe-btn"
              onClick={this.changeBtn}
            >
              Subscribed
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
