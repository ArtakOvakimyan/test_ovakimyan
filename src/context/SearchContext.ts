import { createContext } from "react";
import { AppData } from "../types/appData";

export const SearchContext = createContext<AppData>({
    searchQuery: '',
    setSearchQuery: (): void => {},
    filmsCount: 0,
    setFilmsCount: (): void => {},
    pageNum: 1,
    setPageNum: (): void => {},
    pageSize: 10,
    setPageSize: (): void => {},
    filmsListLoading: true,
    setFilmsLoading: (): void => {}
});