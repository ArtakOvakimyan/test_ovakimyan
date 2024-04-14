import { useState } from "react";
import { SearchContext } from "./SearchContext";
import { type FC, ReactNode } from 'react'

type SearchProviderProps = {
    children?: ReactNode
};

export const SearchProvider: FC<SearchProviderProps> = ({children}) => {
    const [pageNum, setPageNum] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filmsCount, setFilmsCount] = useState<number>(0);
    const [filmsListLoading, setFilmsLoading] = useState<boolean>(true);

    return (
        <SearchContext.Provider
            value={{
                pageNum,
                setPageNum,
                pageSize,
                setPageSize,
                searchQuery,
                setSearchQuery,
                filmsCount,
                setFilmsCount,
                filmsListLoading,
                setFilmsLoading
        }}>
            {children}
        </SearchContext.Provider>
    )
}