import React, {Component} from 'react';
import WitchCard from './card-components/WitchCard'
// here is where we want to generate all of our witch cards

class Section extends Component {
  generateWitchCards = () => {
    return this.props.witches.map( witch => {
        return <WitchCard 
           key={witch.id} 
           name={witch.name} 
           spells={this.props.spells}
           image={witch.image} 
           />
       })
  }  
  render(){

    return(
      <div id="witches">
        <h1>{this.props.title}</h1>
        <br/>
        {this.generateWitchCards()}
      </div>
    )

  }
}

export default Section;
