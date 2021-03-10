import { Component } from 'react'

class Kanye extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: ''
        }
    }
    fetchQuote = async () => {
        const response = await fetch('https://api.kanye.rest/')
        const json = await response.json()
        this.setState({
            quote: json.quote
        })
    }
    addToFavorites = () => {

    }
    async componentDidMount() {
        console.log(this)
    }
    render() {
        const kanyeQuote = this.state.quote
        return <div>
            <h1>Quotes from Kanye</h1>
            <button onClick={this.fetchQuote}>Get New Quote</button>
            <button onClick={this.addToFavorites}>Add To Favorites</button>
            <p>{kanyeQuote}</p>

            <h2>Favorites:</h2>
            <ul>
                
            </ul>
        </div>
    }
}

export default Kanye