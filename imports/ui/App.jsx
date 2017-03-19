import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import Shader from './Shader';
import ShaderList from './Shader-list';
import ShaderStats from './Shader-stats';

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppBar
                        title="Videodromm"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        showMenuIconButton={false}
                    />
                    <div className="row">
                        <div className="col s12 m7"><Shader /></div>
                        <div className="col s12 m5"><ShaderStats /></div>
                        <div className="col s12 m5"><ShaderList /></div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}