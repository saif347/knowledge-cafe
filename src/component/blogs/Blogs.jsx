import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleToAddBookMark, handleAddTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='w-2/3 py-8'>
            {
                blogs.map((blog, idx)=> <Blog key={idx}
                     blog={blog}
                     handleToAddBookMark={handleToAddBookMark}
                     handleAddTime={ handleAddTime}>
                    </Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes={
    handleToAddBookMark: PropTypes.func,
    handleAddTime: PropTypes.func
}

export default Blogs;