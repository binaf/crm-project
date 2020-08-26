import React, { Component } from 'react';

class Form extends Component {
    render() { 
        return ( 
            <div className="row">
                <form className="col s12" id="addContact">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="prenom" type="text" className="validate"/>
                            <label htmlFor="prenom">Prénom</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nom" type="text" className="validate"/>
                            <label htmlFor="nom">Nom</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="text" className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="compagnie" type="text" className="validate"/>
                            <label htmlFor="compagnie">Compagnie</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8">
                            <input id="poste" type="text" className="validate"/>
                            <label htmlFor="poste">Notes</label>
                        </div>
                        <div className="input-field col s4">
                            <button className="btn waves-effect waves-light" type="submit" name="action">
                                Ajouter <i className="material-icons right">send</i> 
                            </button>
                        </div>
                    </div>
                </form> 
            </div>
         );
    }
}
 
export default Form;