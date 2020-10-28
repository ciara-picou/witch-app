import React, {Component} from 'react';
import Section from './Section'
import WitchForm from './WitchForm'
import witches from './data/witches'
import spells from './data/spells'

class App extends Component {

  state = {
    allWitches: witches,
    allSpells: spells
  }

  addNewWitch = (newWitch) => {
    this.setState({
      allWitches: [...this.state.allWitches, newWitch]
    })
  }

  render(){

    return(
      <div>
        < WitchForm addNewWitch={this.addNewWitch}/>
        <Section 
        title="Good"
        name="Good Section"
        witches={this.state.allWitches.filter( witch => witch.goodWitch === true)} 
        spells={this.state.allSpells.filter( spell => spell.goodSpell === true)}
        />
        < Section 
        title="Bad" 
        witches={this.state.allWitches.filter( witch => witch.goodWitch === false)}
        spells={this.state.allSpells.filter( spell => spell.goodSpell === false)}
        />
      </div>
    )

  }
}

export default App;
