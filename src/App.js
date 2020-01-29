import React from 'react'
import Test from 'components/Test'

class App extends React.Component {
  render () {
    console.log('App rendering')
    return (
      <div>
        Testing
        <Test />
      </div>
    )
  }
}

export default App
