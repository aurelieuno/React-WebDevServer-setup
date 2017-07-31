/*only one class and see how this works*/

var React = require("react");

class Popular extends React.Component {
	constructor(props){
		super(props);
		this.state={
			selectedlang : "All"
		}

		this.handleChange=this.handleChange.bind(this)//no need if onClick()=>
		console.log(this)
		//Popular, context Object , props Object, state Object, updater Object
		//referencing the instance of the component
	}

	handleChange(lang){
		this.setState({
			selectedlang: lang
		})
	}

/*	You dont know what "this" of "this.setState" is bound to until you call handleChange
BIND => way to establish the this keyword with bind 

*/

	render(){
		var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

		return (
			<div>
			<ul className= "languages">
			{languages.map(lang =>
			 <li 
			 style = {lang === this.state.selectedlang ? {color: "blue"} :null}
			 onClick={this.handleChange.bind(null,lang)}
			 //return a new function, not invoking it right away
			 //
			 key = {lang}>
			 {lang}
			 </li>)}
			</ul>
			<p>{this.state.selectedlang}</p>
			</div>
			)

	}

}

module.exports = Popular;//common JS