import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoodsFromApi, selectFood } from "../Action/Actions";

class Food extends Component {
  componentDidMount() {
    this.props.getAllFoods();
  }$
  
  render() {
    const { foods } = this.props;
    const foodMenu = foods.length ? (
      foods.map((el) => {
        return (
          <div className="carte" key={el.id}>
            <h2>{el.name}</h2>
            <img className="menu" src={el.photo} alt="Mon Menu" />
            <p>{el.compo}</p>
            <p>{el.prix} DNT</p>
            <button title="Click et savour" onClick={()=>this.props.selectFood(el)}>
              Ajouter
            </button>
          </div>
        );
      })
    ) : (
      <p>Le menu du jour n'est pas encore prêt</p>
    );
    return (
      <div>
        <h1>Menu du jour</h1>
        <div className="top">{foodMenu}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foods: state.foods.foods,
    panier: state.foods.panier,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllFoods: () => dispatch(getFoodsFromApi()),
  selectFood: (data) => dispatch(selectFood(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Food);
