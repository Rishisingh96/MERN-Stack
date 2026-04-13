import.meta.env.VITE_SOME_KEY
export const GetApiMoveData = async () => {
    try{
        const response = await fetch(
            // "http://www.omdbapi.com/?i=tt3896198&apikey=5d1a97b5"
            // "http://www.omdbapi.com/?s=titanic&apikey=" + import.meta.env.VITE_SOME_KEY + "&page=1"

            `https://www.omdbapi.com/?s=titanic&apikey=${import.meta.env.VITE_SOME_KEY}&page=1`
        );
        const data = await response.json();
        return data;
        
    } catch(err){
        console.log(err);
    }
};