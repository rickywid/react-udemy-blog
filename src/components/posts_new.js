import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends React.Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props){
	
		this.props.createPost(props).then(()=>{
			this.context.router.push('/');
		})
	}

	render(){
		const {fields: {title, categories, content}, handleSubmit} = this.props;

		return(
			<div>
				Posts New
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<label htmlFor="">Title</label>
					<input type="text" {...title} />
					{title.touched ? title.error : ''}
					<br/>
					<label htmlFor="">Categories</label>
					<input type="text" {...categories}/>
					{categories.touched ? categories.error : ''}
					<br/>
					<label htmlFor="">Content</label>
					<textarea name="" id="" cols="30" rows="10" {...content} ></textarea>
					{content.touched ? content.error : ''}
					<button type="submit">Submit</button>
					<Link to="/">Back</Link>
				</form>
			</div>
		)
	}
}

function validate(values){
	const error = {};
	
	if(!values.title){
		error.title = "Enter a title";
	}
	if(!values.categories){
		error.categories = "Enter a categories";
	}
	if(!values.content){
		error.content = "Enter a content";
	}		
	return error;
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);