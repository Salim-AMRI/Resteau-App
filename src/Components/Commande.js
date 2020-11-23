import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deletePanierFromApi,
  getPanierFromApi,
  totalPrice,
  sumPrice,
  plusUn,
  moinsUn,
} from "../Action/Actions";

class Order extends Component {
  state = {
    Quantité: 1,
  };
  componentDidMount() {
    this.props.getAllPanier();
    
  }

  render() {
    console.log(this.props.panier.id);
    const { panier } = this.props;
    const prixPanier = (
      <span>
        {panier.reduce((a, el) => a + Number.parseFloat(el.prix * el.qtite), 0)}
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
              onClick={() => {
                this.props.delete(el.id);
              }}
            >
              🗑️
            </span>

            <h2>{el.name}</h2>

            <img className="menu" src={el.photo} alt="select food" />
            <p>Prix : {el.prix} DNT </p>
            <div>
              Quantité :{" "}
              <span
                className="qte"
                aria-label="Enlever 1"
                onClick={() =>
                  this.props.decriment(
                    {
                      photo: el.photo,
                      name: el.name,
                      compo: el.compo,
                      qtite: el.qtite--,
                      prix: el.prix,
                    },
                    el.id
                  )
                }
              >
                ◄
              </span>
              {el.qtite}{" "}
              <span
                className="qte"
                aria-label="Ajouter 1"
                onClick={() =>
                  this.props.incriment(
                    {
                      photo: el.photo,
                      name: el.name,
                      compo: el.compo,
                      qtite: el.qtite++,
                      prix: el.prix,
                    },
                    el.id
                  )
                }
              >
                ►
              </span>{" "}
            </div>
            <p>Total : {el.prix * el.qtite} DNT</p>
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
  total: () => dispatch(totalPrice()),
  sum: () => dispatch(sumPrice()),
  decriment: (el, id) => dispatch(moinsUn(el, id)),
  incriment: (el, id) => dispatch(plusUn(el, id)),
  delete: (id) => dispatch(deletePanierFromApi(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
