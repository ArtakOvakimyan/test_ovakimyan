import { Dispatch, SetStateAction } from "react";

export interface AppData {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
    filmsCount: number;
    setFilmsCount: Dispatch<SetStateAction<number>>;
    pageNum: number;
    setPageNum: Dispatch<SetStateAction<number>>;
    pageSize: number;
    setPageSize: Dispatch<SetStateAction<number>>;
    filmsListLoading: boolean;
    setFilmsLoading: Dispatch<SetStateAction<boolean>>;
}