import React, {Component} from 'react';

class CardFront extends Component {

  render(){

    return(
      <div className="card-front" style={{backgroundImage: `url(${this.props.image})`}}>

      </div>
    )

  }
}

export default CardFront;