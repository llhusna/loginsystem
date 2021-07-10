import React, {Component} from 'react'
import LoginPage from './login'


class App extends Component {
  render() {
  return ( 
    <div className ="App h-screen w-full flex justify-center items-center bg-red-200" >
        <LoginPage />
      </div>
  );
}
}

export default App;
