

import { useState } from 'react';
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/BookMarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0)
  



  const handleAddToBookmark = blog=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id,time)=>{
   const newReadingTime = readingTime + +time;
   setReadingTime(newReadingTime);
   console.log('reading time',readingTime,time)
   console.log(typeof(time))

   //remove the read blog from bookmark
   //console.log('remove bookmark',id)
   const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id !== id);
   setBookmarks(remainingBookmarks);
  }

 
  

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
