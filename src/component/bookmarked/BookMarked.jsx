import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const BookMarked = ({bookMarks, addTime}) => {

    return (
        <div className="text-center p-4 space-y-5">
            <div className=" p-3  border border-violet-600 rounded-lg w-full bg-violet-100">
                <h3 className='text-2xl font-bold text-violet-500'>Spent time on read : {addTime} min</h3>
            </div>
            <div className="bg-gray-50 p-4 space-y-4 rounded-lg">
                <h4 className="text-2xl font-bold">Book marked blog: {bookMarks.length}</h4>
                {
                    bookMarks.map(bookMark => <Bookmark key={bookMark.id} bookMark={bookMark}></Bookmark>)
                }
            </div>
            
        </div>
    );
};
BookMarked.propTypes={
    bookMarks:PropTypes.array,
    addTime: PropTypes.number
}

export default BookMarked;