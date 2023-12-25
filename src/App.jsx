import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import BookMarked from './component/bookmarked/BookMarked'
import Header from './component/header/header'

function App() {
  const [bookMarks, setBookMarks]= useState([])

  const [addTime, setAddTime] = useState(0)

  const handleToAddBookMark = blog=>{
    const newBookMarked = [...bookMarks, blog]
    setBookMarks(newBookMarked)
  }

  const handleAddTime = (id, time) =>{
    const newTime = addTime + time
    setAddTime(newTime);
    const removeBookMarks = bookMarks.filter(bookMark => bookMark.id !== id)
    setBookMarks(removeBookMarks)

  }
  

  return (
    <>
      <Header></Header>
     <div className='my-10 md:flex space-y-4 gap-8'>
      <Blogs handleToAddBookMark={handleToAddBookMark} 
       handleAddTime={handleAddTime}></Blogs>
      <BookMarked
       bookMarks={bookMarks}
       addTime={addTime}>
       </BookMarked>
     </div>
     
    </>
  )
}

export default App
