import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPanierFromApi,
  deleteFoods,
  totalPrice,
  sumPrice,
  moinsUn,
  plusUn,
} from "../Action/Actions";

class Order extends Component {
  componentDidMount() {
    this.props.getAllPanier();
  }

  render() {
    console.log(this.props.quantité.quantité);
    console.log(this.props.panier.id);
    const { panier } = this.props;
    const prixPanier = (
      <span>
        {panier.reduce(
          (a, el) =>
            a + Number.parseFloat(el.prix * this.props.quantité.quantité),
          0
        )}
      </span>
    );
    const foodPanier = panier.length ? (
      panier.map((el) => {
        return (
          <div className="carte" key={el.id}>
            <span
              title="Opps! Supprimer!"
              style={{ fontSize: "x-large", cursor: "pointer" }}
              role="img"
              aria-label="Opps! Supprimer!"
              onClick={() => this.props.delete(el.id)}
            >
              🗑️
            </span>
            <h2>{el.name}</h2>

            <img className="menu" src={el.photo} alt="select food" />
            <p>Prix : {el.prix} DNT </p>
            <div>
              Quantité :{" "}
              <span className="qte" onClick={this.props.moins}>
                ◄
              </span>
              {this.props.quantité.quantité}{" "}
              <span className="qte" onClick={this.props.plus}>
                ►
              </span>{" "}
            </div>
            <p>Total : {el.prix * this.props.quantité.quantité} DNT</p>
          </div>
        );
      })
    ) : (
      <h2>
        Votre liste de commande est vide
        <br />
        Veuillez choisir votre menu...
      </h2>
    );
    return (
      <div>
        <h1>Vous avez Commandé ...</h1>
        <div className="top">{foodPanier}</div>
        <h2>
          Prix Total de la Commande : <span>{prixPanier}</span> TND
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    panier: state.foods.panier,
    total: state.total,
    sum: state,
    quantité: state.quantité,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllPanier: () => dispatch(getPanierFromApi()),
  delete: (id) => dispatch(deleteFoods(id)),
  total: () => dispatch(totalPrice()),
  sum: () => dispatch(sumPrice()),
  plus: (payload) => dispatch(plusUn(payload)),
  moins: (payload) => dispatch(moinsUn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
