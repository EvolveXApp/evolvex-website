import React, {Component} from "react";
import "./index.scss";
import App from "../App";
import * as serviceWorker from "../serviceWorker";

import "../assets/fonts/Gilroy-Regular.otf";


export default class index extends Component {
  render() {
    return (
      <React.StrictMode>
        <App />
    </React.StrictMode>
    )
  }
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


