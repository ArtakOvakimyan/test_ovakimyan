import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (context) {
        return context;
    }
    console.error('useSearchContext must be used within a StoreProvider')
}