import PropTypes from 'prop-types';
import frame from '../../assets/images/Frame.png'

const Blog = ({blog, handleToAddBookMark,  handleAddTime}) => {
    const {title, cover_img, author, posted_date, hashtags, reading_time}= blog

    return (
        <div className='p-4 border-b-2 mb-8 space-y-6' >
            <img className='rounded-[15px] w-[845px] h-[450px]' src={cover_img} alt={title} />
            <div className='flex justify-between items-center'>
                <div className='flex my-4'>
                    <img className='w-14 h-14 rounded-full' src={author.profile_img} alt="" />

                    <div className='ml-6'>
                        <h2 className='text-2xl font-medium'>{author.name}</h2>
                        <p className='text-xl text-gray-500'>{posted_date}</p>
                    </div>

                </div>
                <div className='flex items-center '>
                    <p className='font-normal text-gray-500 mr-2'> {reading_time} min read</p>
                    <button onClick={()=>handleToAddBookMark(blog)}><img src={frame} alt="" /></button>

                </div>
            </div>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx)=> <span className='font-normal text-gray-500' key={idx}><a>{hash}</a></span>)
                }
            </p>

          <div className='mt-4'>
            <button onClick={() =>handleAddTime(reading_time)} className='border-b-2 border-violet-500 text-violet-600 font-bold'>Mark as read</button>
          </div>
            
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleToAddBookMark: PropTypes.func,
    handleAddTime: PropTypes.func

}

export default Blog;