import React, {Component} from 'react';

class CardBack extends Component {

  generateSpellList = () => {
      return this.props.spells.map( spell => {
          return <li>{spell.name}</li>
      })
  }  
  render(){

    return(
      <div className="card-back">
        <h3 className="name">{this.props.name}</h3>
        <ul className="spell-list">Spells:
            {this.generateSpellList()}
        </ul>
        <h4 className="witch-status">{this.props.goodWitch}</h4>
      </div>
    )

  }
}

export default CardBack;