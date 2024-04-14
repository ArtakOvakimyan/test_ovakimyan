import { Pagination } from "antd";
import { useSearchContext } from "../../hooks/useSearchContext";


interface PaginationProps {
    total: number
}

const PagesPagination = (props: PaginationProps) => {
    const {setPageNum, setPageSize} = useSearchContext();
    return (
        <Pagination
            defaultCurrent={1}
            total={props.total}
            onChange={(pageNumber, pageSize) => {
                setPageNum(pageNumber);
                setPageSize(pageSize);
            }}
        />
    )
}

export default PagesPagination;