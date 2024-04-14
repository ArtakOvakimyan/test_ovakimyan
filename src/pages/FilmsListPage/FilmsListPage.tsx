import ListPageHeader from "../../components/ListPageHeader/ListPageHeader";
import { Layout } from "antd";
import { ListPageContent } from "../../components/ListPageContent";
import { ListPageFooter } from "../../components/ListPageFooter";

const FilmsListPage = () => {
    return (
        <Layout style={{height: '100%', display: "flex", flexDirection: "column"}}>
            <ListPageHeader />
            <ListPageContent />
            <ListPageFooter />
        </Layout>
    )
}

export default FilmsListPage;