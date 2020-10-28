import React, {Component} from 'react';
import CardFront from './CardFront'
import CardBack from './CardBack'

class WitchCard extends Component {

  render(){

    return(
      <div className="witch-card">
        <CardFront image={this.props.image}/>
        <CardBack name={this.props.name} spells={this.props.spells} />
      </div>
    )

  }
}

export default WitchCard;