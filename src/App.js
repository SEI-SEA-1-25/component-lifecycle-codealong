import { Component } from 'react'
// import FavoriteFoods from './components/FavoriteFoods'
import Kanye from './components/Kanye'

class App extends Component {
  render() {
    return <div>
      {/* <FavoriteFoods /> */}
      <Kanye exampleProp = {"this is a prop"}/>
    </div>
  }
}

export default App