import CustomTable from "../../hoc/CustomTable";
import {departmentList} from '../../utiles'

const Departments = () => {
    
    const columns = [
        {
            title: 'Department Id',
            dataIndex: 'id',
        },
        {
        title: 'Department Name',
        dataIndex: 'lable',
        }
]
    return(
        <div className="department_section">
            <CustomTable columns={columns} rowData={departmentList} />
        </div>
    )
}
export default Departments