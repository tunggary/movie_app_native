import axios from "axios";

const TMDB_KEY = "7eb9fcca196f0bb3821f5bb628b256d7";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (error) {
    return [null, error];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
  search: (word) => getAnything("/search/movie", { query: word }),
  movie: (id) => getAnything(`/movie/${id}`, { append_to_response: "videos" }),
  discover: () => getAnything("/discover/movie"),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: (word) => getAnything("/search/tv", { query: word }),
  show: (id) => getAnything(`/tv/${id}`, { append_to_response: "videos" }),
};

export const apiImage = (
  path,
  defaultPoster = "https://images.unsplash.com/photo-1584448098255-234156529929?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBvc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
) => (path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPoster);
