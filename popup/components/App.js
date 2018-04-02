import React, { Component } from 'react';
import { Link } from 'react-router/lib/Link';
import { connect } from 'react-redux';
import Routes from '../Routes';
// import Login from './Login';
// import Main from './Main';
import Options from './Options';
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props);
        return (
            <div className='App'>
                {this.props.children}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(App);
