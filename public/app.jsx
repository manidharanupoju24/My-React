var Greeter = React.createClass({
  render : function(){
    return (
      <div>
        <h1>Hello React!</h1>
        <p>This is from the first component, I've first written </p>
      </div>
    );
  } //render method

}); //most common react method

var Checker = React.createClass({
  render : function(){
      return(
        <div>
            <h1>Hello again!</h1>
            <p>Just checking the second component</p>
            <p>Hurrah!</p>
        </div>

      );
  }
});

ReactDOM.render( //most common react DOM
    <dom>
      <Greeter/>
      <Checker/>
    </dom>,    
  document.getElementById('app')
);
