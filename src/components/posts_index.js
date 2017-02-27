import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends React.Component {

	componentDidMount(){
		this.props.fetchPosts();
	}

	render(){
		return(
			<div>
				<Link to="/posts/new">New Post</Link>
				<h2>Blog Posts</h2>
				{this.props.posts.all.map((post, i)=>{
					return <Link to={`/posts/${post.id}`}><li key={i}>{post.title} - {post.categories}</li></Link>
				})}
			</div>
		)
	}
}

function mapStateToProps(state){
	return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)