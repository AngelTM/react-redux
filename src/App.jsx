import { useState } from 'react'
import Navbar from './components/nav-bar'
import { UsersList } from './components/Users-list'
import {Provider} from 'react-redux'
import store from './store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Navbar/> 
      <UsersList/>
  </Provider>  
  )
}

export default App
