import React, { Component } from 'react';
import DemoList_33 from '../components/DemoList_33';
import { demo } from '../demo';
import SearchBox_33 from '../components/SearchBox_33';
import './App_33.css';
import Scroll_33 from '../components/Scroll_33';

class App_33 extends Component {
	constructor() {
		super();
		this.state = {
			
			demo: demo,
			searchField: ''
		};
	}



	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};
	render() {
		const filterRobots = this.state.demo.filter((demo) => {
			return demo.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
			return (
				<div className="tc">
                    <h1>Class Demo</h1>
                    <div className="bg-yellow bt" >
					<SearchBox_33 searchChange={this.onSearchChange} />
                    </div>
                    <Scroll_33>
					<DemoList_33 demo={filterRobots} />
                    </Scroll_33>
				</div>
			);
	}
}
export default App_33;
