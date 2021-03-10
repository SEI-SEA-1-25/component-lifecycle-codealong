import { Component } from 'react'
import KanyeQuote from './KanyeQuote'

class Kanye extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: '',
            favorites: []
        }
    }
    fetchQuote = async event => {
        const response = await fetch('https://api.kanye.rest/')
        const json = await response.json()
        this.setState({
            quote: json.quote
        })
    }
    addToFavorites = event => {
        this.setState({
            quote: '',
            favorites: [...this.state.favorites, this.state.quote]
        })
        this.fetchQuote()
    }
    async componentDidMount() {
        this.fetchQuote()
    }
    removeQuote = idx => {
        // handle the deletion of that quote from the favorites array
        console.log("hello from kanye")
        let favs = this.state.favorites
        favs.splice(idx, 1)
        this.setState({
            favorites: favs
        })
    }

    render() {
        const kanyeQuote = this.state.quote
        const favoriteQuotes = this.state.favorites.map((fav, idx) => {
            return <KanyeQuote 
                key={idx}
                idx={idx}
                removeQuote={this.removeQuote}
                quote={fav}
            />
        })
        return <div>
            <h1>Quotes from Kanye</h1>
            <button onClick={this.fetchQuote}>Get New Quote</button>
            <button onClick={this.addToFavorites}>Add To Favorites</button>
            <p>{kanyeQuote}</p>

            <h2>Favorites:</h2>
            <ul>
                {favoriteQuotes}
            </ul>
        </div>
    }
}

export default Kanye