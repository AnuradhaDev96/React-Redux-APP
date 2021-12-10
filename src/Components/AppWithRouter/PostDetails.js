import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = (props) => {
    const [data, setData] = useState({});
    let { post_id } = useParams();
    // console.log(post_id);
    // let post;
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id)
        .then(function(response) {
            // post = response.data;
            console.log(response);
            setData(response.data);
        }).catch(function(error){
            // console.log(error);
            setData(null);
        })
    }, []);

    // render(){
    // console.log(this.props);
    // let id = this.props.match.params.post_id;
    return (
        data
            ? <div className="container">
                <h4 className="center">{data.title}</h4>
                <p>{data.body}</p>
            </div>
            : <div className="center">
                Loading post...
            </div>
    );
    // }
}

export default PostDetails;
