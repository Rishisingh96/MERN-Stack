import.meta.env.VITE_SOME_KEY
export const getMovieDetails = async ({params}) => {
    console.log(params);
    const id = params.movieID;
    // console.log(id)


    try{
        const response = await fetch(
            `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_SOME_KEY}`
        );
        const data = await response.json();
        return data;
        
    } catch(err){
        console.log(err);
    }
};