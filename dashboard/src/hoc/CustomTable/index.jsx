
import { Table } from 'antd';

const CustomTable = ({columns, rowData}) => {
    return (
        <div>
            <Table
                columns={columns}
                dataSource={rowData}
             />
        </div>
    )
}
export default CustomTable