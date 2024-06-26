import { Col, Row, Layout, Select } from 'antd';
import { useSearchContext } from "../../hooks/useSearchContext";
import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/slices";
import { AppDispatch, RootState } from "../../store/store";
import "./ListPageHeader.css";

const { Header } = Layout;

const ListPageHeader = () => {
    const {setSearchQuery} = useSearchContext();
    const onSearch = (newValue: string) => {
        setQuery(newValue);
    }
    const [query, setQuery] = useState<string>('');
    const debouncedValue = useDebounce(query);
    const queries = useSelector((state: RootState) => state.init.value)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => setSearchQuery(debouncedValue), [debouncedValue]);
    useEffect(() => {
        if (debouncedValue)  {
            dispatch(add(debouncedValue));
        }
    }, [debouncedValue]);

    return (
        <Header>
            <Row>
                <Col span={8}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY0IiBoZWlnaHQ9IjM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTguODU5IDE4YzAtNS44ODkgMi45NTQtMTAuNiA4LjI4MS0xMC42IDUuMzI4IDAgOC4yODEgNC43MTEgOC4yODEgMTAuNiAwIDUuODktMi45NTQgMTAuNi04LjI4IDEwLjYtNS4zMjggMC04LjI4Mi00LjcxLTguMjgyLTEwLjZabTguMjgxIDcuNjZjMi4wNzIgMCAyLjk1NC0zLjUzNCAyLjk1NC03LjY1MiAwLTQuMTItLjg4OS03LjY1Mi0yLjk1NC03LjY1Mi0yLjA2NSAwLTIuOTU0IDMuNTMzLTIuOTU0IDcuNjUyLS4wMDcgNC4xMTguODgyIDcuNjUyIDIuOTU0IDcuNjUyWk0zLjg0MyA3Ljd2NS41OTZoLjI5NEw3Ljk4IDcuN2g1LjMybC03LjA5OCA2LjQ3NC4yOTQuMjkzTDE5LjUxIDcuNjkzdjQuNzExTDcuOTczIDE2LjUyM3YuMjkybDExLjUzNy0xLjAyOHY0LjQxOUw3Ljk3MyAxOS4xNzh2LjI5M2wxMS41MzcgNC4xMTh2NC43MTJMNi40OTYgMjEuNTI2bC0uMjk0LjI5MyA3LjA5OCA2LjQ3NEg3Ljk4bC0zLjg0My01LjU5NmgtLjI5NHY1LjU5NkgwVjcuNjg2aDMuODQzVjcuN1ptMTkuMjMgMEgyOC4xbC0uMjk0IDEyLjM2M2guMjk0TDM0LjAxNSA3LjdoNC40Mzh2MjAuNjA4aC01LjAyNmwuMjk0LTEyLjM2NGgtLjI5NEwyNy41MSAyOC4zMDloLTQuNDM4VjcuN1ptMjMuOTU1IDBoLTUuMDI2djIwLjYwOGg1LjAyNnYtOS4xM2g0LjEzN3Y5LjEzaDUuMDI2VjcuN2gtNS4wMjZ2Ny45NTJoLTQuMTM3VjcuN1ptNDUuMjUgMGgtMTQuMTl2MjAuNjA4aDUuMDI3VjExLjIzM2g0LjEzN3YxNy4wNzVoNS4wMjZWNy43Wm0yLjY2IDEwLjNjMC01Ljg4OSAyLjk1NC0xMC42IDguMjgyLTEwLjYgNS4zMiAwIDguMjgxIDQuNzExIDguMjgxIDEwLjYgMCA1Ljg5LTIuOTU0IDEwLjYtOC4yODEgMTAuNi01LjMyIDAtOC4yODItNC43MS04LjI4Mi0xMC42Wm04LjI4MiA3LjY2YzIuMDcyIDAgMi45NTQtMy41MzQgMi45NTQtNy42NTIgMC00LjEyLS44ODktNy42NTItMi45NTQtNy42NTItMi4wNzIgMC0yLjk1NCAzLjUzMy0yLjk1NCA3LjY1MiAwIDQuMTE4Ljg4MiA3LjY1MiAyLjk1NCA3LjY1MlpNMTE5LjE4NyA3LjdoLTUuMDI2djIwLjYwOGg0LjQzOGw1LjkxNi0xMi4zNjRoLjI5NGwtLjI5NCAxMi4zNjRoNS4wMjZWNy43aC00LjQzOGwtNS45MTYgMTIuMzYzaC0uMjk0bC4yOTQtMTIuMzYzWm0yMy42NjkgMTMuNTQxIDQuNzMyLjU4NWMtLjg4OSA0LjEyLTIuOTU0IDYuNzc0LTcuMzY0IDYuNzc0LTUuMzIgMC04LjAxNi00LjcxLTguMDE2LTEwLjYgMC01Ljg4OSAyLjY4OS0xMC42IDguMDE2LTEwLjYgNC4zMTcgMCA2LjQ3NSAyLjY0OSA3LjM2NCA2LjQ3NWwtNC43MzIgMS4xNzdjLS4yOTQtMi4wNjMtMS4xNTUtNC43MS0yLjYzMi00LjcxLTEuNzcxIDAtMi42ODkgMy41MzMtMi42ODkgNy42NTEgMCA0LjA5LjkxOCA3LjY1MiAyLjY4OSA3LjY1MiAxLjQ0OS4wMTUgMi4zMy0yLjM0MSAyLjYzMi00LjQwNFptMTEuODMtMTMuNTRoLTQuNzMydjIwLjYwN2g0LjczMnYtOS4xM2guMjk0bDMuNTQ5IDkuMTNIMTY0bC01LjE3Ny0xMC42TDE2My44NDkgNy43aC01LjAyNmwtMy44NDMgOS4xM2gtLjI5NFY3LjdaIiBmaWxsPSIjZmZmIi8+PC9zdmc+Cg==" />
                </Col>
                <Col span={8} style={{display: "flex", margin: "auto"}}>
                    <Select
                        style={{width: "100%"}}
                        showSearch
                        placeholder="Введите название"
                        onSearch={onSearch}
                        onChange={onSearch}
                        options={(queries || []).map((d) => ({
                            value: d,
                            label: d,
                        }))}
                    />
                </Col>
                <Col span={8}></Col>
            </Row>
        </Header>
    )
}

export default ListPageHeader;