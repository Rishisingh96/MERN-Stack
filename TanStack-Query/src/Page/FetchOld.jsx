import React, { useEffect, useState } from 'react'
import { fetchPostsApi } from '../API/Api';

const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)


  const getPostData = async () => {
    try {
      const res = await fetchPostsApi();
      console.log(res.data);
      res.status === 200 && setPosts(res.data);
    } catch (error) {

      console.error('Error fetching posts:', error);
      return [];
    }
  }

  useEffect(()=>{
    getPostData();
  }, []);

  return (
    <div className='section-accordion'>
      {posts.map((curElement)=>{
        const {id, title, body} = curElement
        return(
          <li key={id}>
            <p>{title}</p>
            <p>{body}</p>
          </li>
        )
      })}
    </div>
  )
}

export default FetchOld
