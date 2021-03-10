import { Component } from 'react'

class KanyeQuote extends Component {
    render() {
        return <li>
            <button onClick={() => this.props.removeQuote(this.props.idx)}>Delete</button>
            {this.props.quote}
        </li>
    }
}

export default KanyeQuote