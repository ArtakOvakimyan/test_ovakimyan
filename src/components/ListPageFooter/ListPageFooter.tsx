import {Col, Layout, Row, Flex} from "antd";

const { Footer } = Layout;
const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgb(0, 21, 41)',
    // position: "relative",
    // bottom: 0,
    width: "100%",
};

const ListPageFooter = () => {
    return (
        <Footer style={footerStyle}>
            <Flex justify="space-between">
                <div>2024</div>
                <div>А.Овакимян</div>
            </Flex>
        </Footer>
    )
}

export default ListPageFooter;