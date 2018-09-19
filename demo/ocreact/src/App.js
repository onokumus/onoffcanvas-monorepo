import React, { Component } from "react";
import { OnoffCanvas, OnoffCanvasToggler } from "@onoffcanvas/react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      octop: false,
      ocright: false,
      ocbottom: false,
      ocleft: false,
      occenter: false,
      ocfull: false
    };
    this.toggleTop = this.toggleTop.bind(this);
    this.toggleRight = this.toggleRight.bind(this);
    this.toggleBottom = this.toggleBottom.bind(this);
    this.toggleLeft = this.toggleLeft.bind(this);
    this.toggleCenter = this.toggleCenter.bind(this);
    this.toggleFull = this.toggleFull.bind(this);
  }

  toggleTop() {
    this.setState({
      octop: !this.state.octop
    });
  }

  toggleRight() {
    this.setState({
      ocright: !this.state.ocright
    });
  }
  toggleBottom() {
    this.setState({
      ocbottom: !this.state.ocbottom
    });
  }
  toggleLeft() {
    this.setState({
      ocleft: !this.state.ocleft
    });
  }
  toggleCenter() {
    this.setState({
      occenter: !this.state.occenter
    });
  }
  toggleFull() {
    this.setState({
      ocfull: !this.state.ocfull
    });
  }

  render() {
    const ocbtnStyle = {
      width: 100 + "px",
      height: 100 + "px"
    };

    const ocbtnBigStyle = {
      width: 200 + "px",
      height: 200 + "px",
      top: 50 + "%",
      left: 50 + "%",
      transform: "translate(-50%, -50%)"
    };

    const { octop, ocright, ocbottom, ocleft, occenter, ocfull } = this.state;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a
              className="navbar-brand"
              href="https://github.com/onokumus/onoffcanvas-monorepo/tree/master/packages/react"
            >
              onoffcanvas/react
            </a>
          </div>
        </nav>
        <div class="jumbotron jumbotron-fluid text-center">
          <div className="container">
            <h1 className="display-3">OnoffCanvas/react</h1>
            <p className="lead">OnoffCanvas react component</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Page Canvas</h4>
                  <p className="card-text">position: fixed</p>
                </div>
                <nav className="nav flex-column">
                  <li className="nav-item px-5">
                    <OnoffCanvasToggler
                      className="is-animated"
                      isOpen={octop}
                      onClick={this.toggleTop}
                    />
                    Top
                  </li>
                  <li className="nav-item px-5">
                    <OnoffCanvasToggler
                      className="is-animated"
                      isOpen={ocright}
                      onClick={this.toggleRight}
                    />
                    Right
                  </li>
                  <li className="nav-item px-5">
                    <OnoffCanvasToggler
                      className="is-animated"
                      isOpen={ocbottom}
                      onClick={this.toggleBottom}
                    />
                    Bottom
                  </li>
                  <li className="nav-item px-5">
                    <OnoffCanvasToggler
                      className="is-animated"
                      isOpen={ocleft}
                      onClick={this.toggleLeft}
                    />
                    Left
                  </li>
                  <li className="nav-item px-5">
                    <OnoffCanvasToggler
                      className="is-animated"
                      isOpen={occenter}
                      onClick={this.toggleCenter}
                    />
                    Center
                  </li>
                  <li className="nav-item px-5">
                    <OnoffCanvasToggler
                      className="is-animated"
                      isOpen={ocfull}
                      onClick={this.toggleFull}
                    />
                    Full
                  </li>
                </nav>
              </div>
            </div>
            <div className="col-sm-9" />
          </div>
        </div>
        <OnoffCanvas
          className="is-fixed is-top bg-dark text-white"
          isOpen={octop}
        >
          <h1>Top Canvas</h1>
          <OnoffCanvasToggler
            className="is-animated"
            style={ocbtnStyle}
            isOpen={octop}
            onClick={this.toggleTop}
          />
        </OnoffCanvas>
        <OnoffCanvas
          className="is-fixed is-right bg-dark text-white"
          isOpen={ocright}
        >
          <h1>Right Canvas</h1>
          <OnoffCanvasToggler
            className="is-animated"
            style={ocbtnStyle}
            isOpen={ocright}
            onClick={this.toggleRight}
          />
        </OnoffCanvas>
        <OnoffCanvas
          className="is-fixed is-bottom bg-dark text-white"
          isOpen={ocbottom}
        >
          <h1>Bottom Canvas</h1>
          <OnoffCanvasToggler
            className="is-animated"
            style={ocbtnStyle}
            isOpen={ocbottom}
            onClick={this.toggleBottom}
          />
        </OnoffCanvas>
        <OnoffCanvas
          className="is-fixed is-left bg-dark text-white"
          isOpen={ocleft}
        >
          <h1>Left Canvas</h1>
          <OnoffCanvasToggler
            className="is-animated"
            style={ocbtnStyle}
            isOpen={ocleft}
            onClick={this.toggleLeft}
          />
        </OnoffCanvas>
        <OnoffCanvas
          className="is-fixed is-center bg-dark text-white p-5 text-center"
          isOpen={occenter}
        >
          <h1>Center Canvas</h1>
          <OnoffCanvasToggler
            className="is-animated"
            style={ocbtnStyle}
            isOpen={occenter}
            onClick={this.toggleCenter}
          />
        </OnoffCanvas>
        <OnoffCanvas className="is-fixed bg-dark text-white" isOpen={ocfull}>
          <h1>Full Canvas</h1>
          <OnoffCanvasToggler
            className="is-animated"
            style={ocbtnBigStyle}
            isOpen={ocfull}
            onClick={this.toggleFull}
          />
        </OnoffCanvas>
      </React.Fragment>
    );
  }
}

export default App;
