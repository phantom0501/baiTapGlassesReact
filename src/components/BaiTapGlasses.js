import React, { Component } from "react";
import Glasses from "./Glasses";
import Header from "./Header";
import Style from "./style.module.css";

export default class BaiTapGlasses extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "/img/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "/img/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 40,
      name: "DIOR D6700HQ",
      url: "/img/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 80,
      name: "DIOR D6005U",
      url: "/img/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 160,
      name: "PRADA P8750",
      url: "/img/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 95,
      name: "PRADA P9700",
      url: "/img/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 60,
      name: "FENDI F8750",
      url: "/img/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 20,
      name: "FENDI F8500",
      url: "/img/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 100,
      name: "FENDI F4300",
      url: "/img/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  render() {
    return (
      <div
        style={{
          backgroundImage: 'url("/img/background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div style={{ background: "rgba(0, 0, 0, 0.7)" }}>
          <Header />
          <div className={Style.grid}>
            <Glasses arrGlasses={this.arrProduct}></Glasses>
          </div>
        </div>
      </div>
    );
  }
}
