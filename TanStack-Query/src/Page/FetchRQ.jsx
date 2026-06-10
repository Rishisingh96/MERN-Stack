// import React from 'react'
// import { fetchPosts } from '../API/Api';
// import { useQuery } from "@tanstack/react-query"


// const FetchRQ = () => {
  
//   const getPostData = async () => {
//     try {
//       const res = await fetchPosts();
//       console.log(res.data);
//       if (res.status === 200) {
//         return res.data;
//       } else {
//         return [];
//       }
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       return [];
//     }
//   }

//   const {data} = useQuery({
//     queryKey:["posts"], //useState
//     queryFn:getPostData, //useEffect
//   });

//   return (
//     <div className='section-accordion'>
//       {data?.map((curElement)=>{
//         const {id, title, body} = curElement
//         return(
//           <li key={id}>
//             <p>{title}</p>
//             <p>{body}</p>
//           </li>
//         )
//       })}
//     </div>
//   )
// }

// export default FetchRQ


import React from 'react'
import { fetchPosts } from '../API/Api';
import { useQuery } from "@tanstack/react-query"



const FetchRQ = () => {
  
  const {data} = useQuery({
    queryKey:["posts"], //useState
    queryFn:fetchPosts, //useEffect
  });

  return (
    <div className='section-accordion'>
      {data?.map((curElement)=>{
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

export default FetchRQ

