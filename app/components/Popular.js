import React from "react";
import api from "../utils/api";

function SelectLanguage (props) {//stateless functional component
	var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

	return (
		<div>
		<ul className= "languages">
		{languages.map(lang =>
		 <li
		 style = {lang === props.selectedLanguage ? {color: "blue"} :null}
		 onClick={props.handleChange.bind(null,lang)}
		 //return a new function, not invoking it right away
		 //
		 key = {lang}>
		 {lang}
		 </li>)}
		</ul>
		<p>{props.selectedLanguage}</p>
		</div>
		)
	}

function RepoGrid (props) {
	return (
		<ul className = "popular-list">
		{props.repos.map((repo,index) =>
			<li key = {repo.name} className = "popular-item">
			<div className = "popular-rank">#{index+1}</div>
			<ul className = "space-list-items">
			<li>
			<img
			className="avatar"
			src={repo.owner.avatar_url}
			alt={"Avatar for "+repo.owner.login}/>
			</li>
			<li><a href={repo.html_url}>{repo.name}</a></li>
			<li>@{repo.owner.login}</li>
			<li>{repo.stargazers_count} stars</li>
			</ul>
			</li>
	)}
		</ul>
		)
}

class Popular extends React.Component {
	constructor(props){
		super(props);
		this.state={
			selectedlang : "All",
			repos : null
		}

		this.handleChange=this.handleChange.bind(this)//no need if onClick()=>
		console.log(this)
		//Popular, context Object , props Object, state Object, updater Object
		//referencing the instance of the component
	}

    componentDidMount() {
      this.handleChange(this.state.selectedlang);
  }

	handleChange(lang){
		api.fetchAPI(lang)//return a promise
		.then(function(repos){
			this.setState({
				selectedlang: lang,
				repos: repos
			})
		}.bind(this)); //because function(repos) create its own context

	}

/*	You dont know what "this" of "this.setState" is bound to until you call handleChange
BIND => way to establish the this keyword with bind

*/
	render(){

		return (
			<div>
			<SelectLanguage selectedLanguage = {this.state.selectedlang}  handleChange = {this.handleChange}/>
			{!this.state.repos? <p>Loading...</p> : <RepoGrid repos = {this.state.repos}/>}
			</div>
			)

	}

}

//module.exports = Popular;//common JS
export default Popular;