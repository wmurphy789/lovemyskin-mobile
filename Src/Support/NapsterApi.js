export const getMoviesFromApiAsync = async () => {
    try {
      let response = await fetch(
        'http://api.napster.com/v2.2/genres?apikey=NTY0ZmYxODItNmNkYS00MDQyLTliM2UtMWMwNTI0NjE0Mjk1'
      );
      let json = await response.json();
      console.log('json of movies',json)
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  export const getSongsWithGenreId = async(id)=>{
    try {
        let response = await fetch(
          'http://api.napster.com/v2.2/genres/'+id+'/tracks/top?apikey=NTY0ZmYxODItNmNkYS00MDQyLTliM2UtMWMwNTI0NjE0Mjk1'
        );
        let json = await response.json();
        console.log('json of songs by generes',json)
        return json;
      } catch (error) {
        console.error(error);
      }
  };

  export const getSongsDetailWithId = async(id)=>{
    try {
        let response = await fetch(
          'http://api.napster.com/v2.2/tracks/'+id+'?apikey=NTY0ZmYxODItNmNkYS00MDQyLTliM2UtMWMwNTI0NjE0Mjk1'
        );
        let json = await response.json();
        console.log('json of songs by generes',json)
        return json;
      } catch (error) {
        console.error(error);
      }
  }
  export const getSongsSearchWithId = async(id)=>{
    // /v2.2/search?query=weezer&per_type_limit=5&offset=5
    try {
        let response = await fetch(
          'http://api.napster.com/v2.2/search?apikey=NTY0ZmYxODItNmNkYS00MDQyLTliM2UtMWMwNTI0NjE0Mjk1&offset=5&per_type_limit=5&genres='+id+'&query=shape'
        );
        let json = await response.json();
        console.log('json search search by generes',json)
        return json;
      } catch (error) {
        console.error(error);
      }
  }

  export const getSongsWithAlbumIds = async()=>{
    // http://api.napster.com/v2.2/albums/alb.576423303,alb.522732580,alb.499976487,alb.521723770/tracks?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4
    try {
      let response = await fetch(
        'http://api.napster.com/v2.2/albums/alb.576423303,alb.522732580,alb.499976487,alb.521723770/tracks?apikey=MDE0OGIzYzAtNDdkNS00YzJlLTg4NjMtNTg5Y2I5NzBkN2Jk'
      );
      let json = await response.json();
      console.log('json of songs by album ids',json)
      return json;
    } catch (error) {
      console.error(error);
    }
 
 
  }
