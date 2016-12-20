import React, { Component } from 'react';

class ListCourseItem extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const{
			item,
		} = this.props;
		return(
			<li>{item}</li>
		);
	}
}

export default ListCourseItem