import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Shape from '../../assets/pokemon.png'

//Container component | Stateful
class Home extends Component {
    state = {
        posts: []
    }

    //similar to initState
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            // console.log(response);
            this.setState({
                posts: response.data.slice(0, 10)//to get first 10 records from the mounted array
            });
            console.log(this.state.posts);
        });
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length
            ? (
                posts.map(post => {
                    return (
                        <div className="post card" key={post.id}>
                            <img src={Shape} alt="A shape" />
                            <div className="card-content">
                                <Link to={`/${post.id}`}>
                                    <span className="card-title red-text">
                                        {post.title}
                                    </span>
                                </Link>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    )
                })
            )
            : (
                <p className="center">No posts yet</p>
            );
        return (
            <div className='container home'>
                <h4 className='center'>Home</h4>
                {postList}
            </div>
        );
    }
}

export default Home;
