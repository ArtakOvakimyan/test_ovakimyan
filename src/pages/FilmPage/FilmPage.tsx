import { useParams } from "react-router-dom";
import {Layout} from "antd";

const FilmPage = () => {
    const {filmId} = useParams();
    return (
        <Layout style={{height: '100vh'}}>
            <div>{filmId}</div>
        </Layout>
    )
}

export default FilmPage;