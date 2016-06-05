var Greeter = React.createClass({
  getDefaultProps : function(){
    return {
      name:'React',
      yo : 'Object'
    }; //return is an object whose name is set to React in this case
  },
  //if the name is not given where we initialize, this method sets the default name property

  render : function(){
    var name = this.props.name;
    var yo = this.props.yo;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>The object name is {yo}</p>
        <p>This is from the first component, I've first written </p>
      </div>
    );
  } //render method

}); //most common react method

var Checker = React.createClass({

  getDefaultProps : function(){
    return{
      name: 'Whatever',
      message : 'This is a default message! You have not provided any of your own'
    };
  },

  render : function(){
    var name = this.props.name;
    var message = this.props.message;
      return(
        <div>
            <h1>Hello again {name}!</h1>
            <p>Just checking the second component</p>
            <p>{message + '!!'}</p>
            <p>Hurrah!</p>
        </div>

      );
  }
});

var Input = React.createClass({

  onButtonClick: function(e){
    e.preventDefault(); // e is regular javascript event handler object

    var name = this.refs.name.value; //name is an  HTML attribute and a node element, and its value is fetched by .value

    alert(name);
  },

  render : function(){
    return(
        <div>
          <form onSubmit={this.onButtonClick}>
            <input type= 'text' ref="name"/>
            <button>Name will be set</button>
          </form>
        </div>
    );
  }


}); // onButtonClick is a user defined function unlike  render and getDefaultProps given above
 //ref above lets us give us name to an element that we can access later

var swagger = 'Himaja';

ReactDOM.render( //most common react DOM
    <dom>
      <Greeter name = 'Manidhar'/>
      <Checker name = {swagger} message = "Hello there! If you recieve this message, this will be printed"/>
      <Input/>
    </dom>,
  document.getElementById('app')
);                                  //name can be sent directly
                                    //or can be sent through js expression
                                    // the data we send through js expression could be string object or an array
