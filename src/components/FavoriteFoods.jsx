import { Component } from 'react'

class FavoriteFoods extends Component {
    constructor() {
        super()
        this.state = {
            textValue: "",
            favorites: []
        }
        console.log('FavoriteFoods constructor()')
    }
    handleSubmit = event => {
        event.preventDefault()
        // Bug: pushing directly to state
        // this.state.push(this.state.textValue)

        // Method 1: push it to a temp array
        // let favs = this.state.favorites
        // favs.push(this.state.textValue)

        // Method 2: concat
        // let favs2 = this.state.favorites.concat([this.state.textValue])

        // method 3: array destructuring
        this.setState({
            textValue: '',
            favorites: [...this.state.favorites, this.state.textValue]
        })
    }
    handleChange = event => {
        this.setState({
            textValue: event.target.value
        })
    }
    componentDidMount() {
        console.log('FavoriteFoods componentDidMount()')
    }
    componentDidUpdate() {
        console.log('FavoriteFoods componentDidUpdate()')
    }
    componentWillUnmount() {
        console.log('FavoriteFoods componentWillUnmount()')
    }


    render() {
        console.log('FavoriteFoods render()')
        // Map converts an array into another array
        const favs = this.state.favorites.map((fav, idx) => {
            return <p key={idx}>{fav}</p>
        })
        // forEach equivalent
        // const myFavs = []
        // this.state.favorites.forEach(fav => {
        //     myFavs.push(<p>{fav}</p>)
        // })

        return <div>
            <h1>Favorite Foods:</h1>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.textValue} 
                    onChange={this.handleChange}
                />
                <input type="submit"/>
            </form>
            <div>
                {favs}
            </div>
        </div>
    }
}

export default FavoriteFoods