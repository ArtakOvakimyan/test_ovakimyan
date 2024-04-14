import { FilmsListPage } from "../pages/FilmsListPage";
import { FilmPage } from "../pages/FilmPage";
import { Navigate } from "react-router-dom";

export default [
    {
        path: '/',
        children: [],
        element: <Navigate to={"films"} replace />
    },
    {
        path: ':filmId',
        element: <FilmPage/>,
    },
    {
        path: 'films',
        element: <FilmsListPage/>,
    },
];