import React, { Component } from 'react';
import ListCourseItem from './ListCourseItem'

class ListCourses extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const {
			newList,
		} = this.props;

		return(
			<ul>
				{
					newList.map((item,i) =>
						<ListCourseItem
							item={item}
							key={i} />
					)
				}
			</ul>
		)
	}
}

export default ListCourses