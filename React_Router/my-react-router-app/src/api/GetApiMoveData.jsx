export const GetApiMoveData = async () => {
    try{
        const response = await fetch(
            // "http://www.omdbapi.com/?i=tt3896198&apikey=5d1a97b5"
            "http://www.omdbapi.com/?s=titanic&apikey=5d1a97b5&page=1"
        );
        const data = await response.json();
        return data;
    } catch(err){
        console.log(err);
    }
};