import { Input, Layout, Flex, Button } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Content } from "antd/es/layout/layout";
import { getFilms } from "../../api/getFilms";
import { PagesPagination } from "../PagesPagination";
import { Link } from "react-router-dom";
import { useSearchContext } from "../../hooks/useSearchContext";
import "./ListPageContent.css";

const ListPageContent = () => {
    const {pageNum, pageSize, searchQuery} = useSearchContext();
    const {data, isLoading, refetch, isPlaceholderData} = useQuery({
        queryKey: [pageNum, searchQuery, pageSize],
        queryFn:  () => getFilms(pageNum, searchQuery, pageSize),
        placeholderData: keepPreviousData,
    });
    const handleClick = () => {
        if (!data || isPlaceholderData) {
            refetch();
        }
    }

    return (
        <Content>
            <Flex gap="middle" vertical align="center" justify="space-between" className="flexMain">
                {isLoading ? null : data.docs.map(film =>
                    <Button key={film.id} className="buttonStyle">
                        <Link className="linkStyle" to={`/${film.id}`}>{film.name}</Link>
                    </Button>)}
                <PagesPagination total={data?.total || 1} />
            </Flex>
        </Content>
    )
}

export default ListPageContent;