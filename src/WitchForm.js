import React from 'react';
//gives us access to react magic via the react library

class WitchForm extends React.Component {
    // created our class component which inherits from react.component
    //A controlled form is a form that derives its input values from state.
    state = {
        name: "",
        goodWitch: false,
        image: ""
    }

    handleNameChange = event => {
        console.log(event.target.name.value)
        //If we can change state values, React will re-render and our inputs will display 
        //the new state. setState is what we'll need to initiate a state change
        //We want to fire setState every time the form changes...for this we'll use onChange event listener
        this.setState({
            name: event.target.value
        })
    }

    handleIsGoodWitchChange = event => {
        // we're updating state based on event.target.value.
        // This, in turn, causes a re-render.
        console.log(event.target)
        this.setState({
            //isGoodWitch: event.target.value
            goodWitch: !this.state.goodWitch
        })
    }

    handleChange = (event) => {
        // console.log(value)
        let {name, value} = event.target
        console.log(name, value)
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        //Now, whenever the form is submitted (by pressing Enter/Return, or clicking a Submit button), 
        //an anonymous function will be called, event => this.handleSubmit(event)
        event.preventDefault()
      
        this.props.addNewWitch(this.state)
    }

    

    render() {
        return (
            <div>
                <h1>Join the coven</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label className="witch-name">Witch Name </label>
                    <input
                        type="text"
                        name="name"
                        onChange={event => this.handleChange(event)}
                    />
                    <br/>
                    <br/>
                    
                    <label className="witch-name">Is A Good Witch? </label>
                    <input 
                    type="radio" 
                    name="goodWitch" 
                    checked={this.state.goodWitch}
                    onChange={event => this.handleIsGoodWitchChange(event)} 
                    />
                    Yes!
                    <br></br>
                    <label>Witch Profile Pic </label>
                    <input type="text" name="image" onChange={event => this.handleChange(event)}/>
                   <br></br>
                    <input type="submit" />
                </form>
           
            </div>
        )
    }
}

export default WitchForm;


 