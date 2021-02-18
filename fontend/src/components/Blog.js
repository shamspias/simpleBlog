import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () =>{
    const [blog, setBlog] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() =>{
        const fatchData = async () => {
            try {

                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                setFeaturedBlog(res.data[0]);

            }
            catch (err) {

            }
        }
        fetchBlogs();

    }, []);
    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';

    };

    const getBlogs = () => {

    };

    return (
        <div className='container mt-3' >
            <div className='nav-scroller py-1 mb-2'>
                <nav className='nav d-flex justify-context-between'>
                    <Link className='p-2 text-muted' to='/category/world'>World</Link>
                </nav>
            </div>

        </div>
    );
};
 
export default Blog;