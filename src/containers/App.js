import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {

	constructor()
	{
		super()
		this.state= {
			robot:[],
			searchField:''
		}
	}




	componentDidMount(){
		 fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({ robot:users}));
}




onSearchChange = (event) => {
	this.setState({searchField: event.target.value})
	}

render() {
	const {robot , searchField} = this.state;
	const filteredRobots= robot.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})

	return !robot.length ?
	 <h1> Loading </h1>:
   
   (
		<div className='tc'>
		<h1> MY BOT FRIENDS </h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
			<CardList robot ={filteredRobots}/>
		</Scroll>
		</div>
);
}	
}
export default App;