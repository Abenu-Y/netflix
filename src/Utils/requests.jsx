const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const requests = [

        {title:'Netflix Original', fetchUrl:`/discover/tv?api_key=${apiKey}&with_networks=213`,},
        {title:'Trending Now',    fetchUrl:`/trending/movie/week?api_key=${apiKey}&language=en-US`,   isLargeRow:true},
        {title:'Top Rated Movies', fetchUrl:`/discover/tv?api_key=${apiKey}&with_networks=213`,        isLargeRow:true},
        {title:'Action',           fetchUrl:`/discover/movie?api_key=${apiKey}&with_genres=28`,        isLargeRow:true},
        {title:'Comedy',           fetchUrl:`/discover/movie?api_key=${apiKey}&with_genres=35`,},
        {title:'Horror',           fetchUrl:`/discover/movie?api_key=${apiKey}&with_genres=27`,},
        {title:'Romance',          fetchUrl:`/discover/movie?api_key=${apiKey}&with_genres=10749`,     isLargeRow:true},
        {title:'Family',           fetchUrl:`/discover/movie?api_key=${apiKey}&with_genres=10751`,     isLargeRow:true} , 
        {title:'Documentaries',    fetchUrl:`/discover/movie?api_key=${apiKey}&with_genres=99`,        isLargeRow:true},
        {title:'History',          fetchUrl:`/discover/movie?api_key=${apiKey}&with_genres=14`,        isLargeRow:true},
        {title:'Tv Shows',         fetchUrl:`/trending/tv/day?api_key=${apiKey}&language=en-US`, },
        {title:'Mystery',          fetchUrl:`/discover/movie?api_key=${apiKey}&with_genres=9648`,},
        {title:'UpComing',         fetchUrl:`/movie/upcoming?api_key=${apiKey}&with_networks=213`,},
        {title:'Airing Today',     fetchUrl:`/tv/airing_today?api_key=${apiKey}&language=en-US`},
        {title:'Popular Tv-Shows', fetchUrl:`/tv/popular?api_key=${apiKey}&language=en-US`},
        {title:'Top Rated Tv-Shows', fetchUrl:`/tv/top_rated?api_key=${apiKey}&language=en-US`},
        {title:'Reality',          fetchUrl:`/discover/tv?api_key=${apiKey}&with_genres=10764`,},
        {title:'Crime',          fetchUrl:`/discover/tv?api_key=${apiKey}&with_genres=80`,},
        {title:'News',          fetchUrl:`/discover/tv?api_key=${apiKey}&with_genres=10763`,},
        {title:'Talk',          fetchUrl:`/discover/tv?api_key=${apiKey}&with_genres=10767`,},
        {title:'War & Politics',          fetchUrl:`/discover/tv?api_key=${apiKey}&with_genres=10768`,},
]


export default requests;