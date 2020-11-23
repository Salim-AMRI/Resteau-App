import React, { Component } from 'react'

export default class Commande extends Component {


    Favorite = (item) => {
        this.setState((prevState) => ({
          favorites: prevState.favorites.concat(item),
        }));
      };

    render() {
        return (
            <div>
                //
                 <a
                      href="#6"
                      title="Ajouter aux favoris"
                      className="fav"
                      onClick={() => this.Favorite(item)}
                    >
                      ❤
                    </a>
                    //
                    <div>
            <h2 className="titre" id="favoris">
              Movies Favoris
            </h2>
          </div>
          <div className="top">
            {this.state.favorites.map((item) => (
              <div className="section">
                <img className="photo2" src={item.image} alt="moviepic" />
                <h3>{item.name}</h3>
                <div>{item.role}</div>
                <div className="rating2">
                  <a href="#7" title="Avis du public">
                    {item.avis}
                  </a>
                </div>
                <p>
                  <a className="voir" href={item.info}>
                    [Voir]
                  </a>
                </p>
              </div>
            ))}
          </div>

          
                
            </div>
        )
    }
}
