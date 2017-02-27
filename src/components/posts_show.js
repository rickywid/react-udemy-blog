import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';

class PostsShow extends React.Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentDidMount(){
		this.props.fetchPost(this.props.params.id);
	}

	handleDelete(){
		this.props.deletePost(this.props.params.id).then(()=>{
			this.context.router.push('/');
		})
	}

	render(){

		if(!this.props.post.post){
			return <div>loading...</div>
		}
		return(
			<div>
				<h2>{this.props.post.post.title}</h2>
				<p>{this.props.post.post.content}</p>
				<button onClick={this.handleDelete.bind(this)}>delete</button>
			</div>
		)
	}
}

function mapStateToProps(state){
	return { post: state.posts }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)