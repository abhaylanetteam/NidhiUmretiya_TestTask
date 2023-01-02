import Sidebar from "./Sidebar";
import { Layout } from 'antd';


const { Header, Footer, Sider, Content } = Layout;
const LayoutPage = ({children}) => {

    return(
        <div>
            <Layout>
                <Sider>   
                    <Sidebar/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>{children}</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
export default LayoutPage