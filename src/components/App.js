import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import SignIn from './Auth/SignIn';
// import SignUp from './Auth/SignUp';

class App extends React.Component {
    render(){
        return (<div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/' exact component={() => {
                        return(<div><Header /></div>)
                    }} />
                    <Route path='/signin' exact component={SignIn} />
                    {/* <Route path='/signup' exact component={Signup} /> */}
                </div>
            </BrowserRouter>
            </div>);
    }
}

export default App;