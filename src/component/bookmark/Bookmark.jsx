import PropTypes from 'prop-types';

const Bookmark = ({bookMark}) => {
    const {title}= bookMark
    console.log(bookMark)
    return (
        <div className='w-[351px] p-3 mb-3 text-left bg-white'>
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookMark: PropTypes.object
}

export default Bookmark;