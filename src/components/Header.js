import React, { Component } from "react";
import Styles from "./style.module.css";

export default class Header extends Component {
  render() {
    return (
      <div className={(Styles.grid__full__width, Styles.header__wrap)}>
        <p className={Styles.header}>TRY GLASSES APP ONLINE</p>
      </div>
    );
  }
}
