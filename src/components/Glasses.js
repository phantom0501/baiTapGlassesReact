import React, { Component } from "react";
import Styles from "./style.module.css";

export default class Glasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glassesDetail: {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "/img/v1.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    };
  }

  render() {
    let { arrGlasses } = this.props;
    let glasses = this.state.glassesDetail;

    this.renderGlasses = () => {
      return arrGlasses.map((item, index) => {
        return (
          <img
            key={index}
            src={item.url}
            alt={item.name}
            className={Styles.glasses__list}
            onClick={this.btnChangeGlasses.bind(this, item)}
          />
        );
      });
    };

    this.btnChangeGlasses = (item) => {
      this.setState(
        {
          glassesDetail: item,
        },
        () => {}
      );
    };

    return (
      <div>
        <div className={Styles.glasses__model__item}>
          <div
            className={Styles.model__bg__img}
            style={{
              position: "relative",
              backgroundImage: "url(./img/model.jpg)",
              backgroundPosition: "center top",
              backgroundSize: "cover",
              width: "30%",
              height: "460px",
              border: "5px solid green",
            }}
          >
            <img
              className={Styles.vglasses__img}
              src={glasses.url}
              alt={glasses.name}
            />
            <div className={Styles.model__info}>
              <h5 className={Styles.model__info__name}>{glasses.name}</h5>
              <p className={Styles.model__info__price}>{glasses.price + "$"}</p>
              <p className={Styles.model__info__desc}>{glasses.desc}</p>
            </div>
          </div>

          <div
            style={{
              border: "5px solid green",
              backgroundImage: "url(./img/model.jpg)",
              backgroundPosition: "center top",
              backgroundSize: "cover",
              width: "30%",
              height: "460px",
            }}
          ></div>
        </div>

        {/* Glasses List */}
        <div className={Styles.vglasses__img__wrap}>{this.renderGlasses()}</div>
      </div>
    );
  }
}
