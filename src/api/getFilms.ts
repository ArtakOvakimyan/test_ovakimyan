import {FilmType} from "../types/filmType";

interface resp {
    docs: Array<FilmType>,
    total: number
}

export const getFilms = async (page: Number = 1, searchQuery: string, limit: Number = 10) => {
    const options = {method: 'GET', headers: {accept: 'application/json', "X-API-KEY": process.env.TOKEN}};
    const response = await fetch(
        `https://api.kinopoisk.dev/v1.4/movie/search?page=${page}&limit=${limit}&query=${searchQuery}`,
        options);
    const data: resp = await response.json();
    return {
        docs: data.docs.map(film => ({name: film.name, id: film.id})),
        total: data.total
    };
}