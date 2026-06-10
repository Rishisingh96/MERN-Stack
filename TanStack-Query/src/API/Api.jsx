import axios from "axios";



const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

// API call to fetch posts
export const fetchPostsApi = () => {
    return api.get("/posts");
}

export const fetchPosts = async () => {
    const res = await api.get("/posts");
    return res.status === 200 ? res.data : [];
}


// const getPostData = async () => {
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