import { useState } from 'react';
import CustomTable from '../../hoc/CustomTable';
import { studentList } from '../../utiles';
import CustomModal from '../../hoc/CustomModal';
import propsComponent from '../../hoc/propsComponent';
import { Checkbox } from 'antd';

let tempArray = []
const Students = () => {
    const [rowData,setRowData] = useState(studentList);
    const [deleteMultiple, setDeleteMultiple] = useState([])
    const [modalDetail, setModalDetail] = useState({
        modalName:'',
        modalValue:'',
        modalOpen:false
    })
    let Modal = propsComponent[modalDetail?.modalName]

    const handleChange = (e, row) => {
            if(e.target.checked){
                console.log('enter',row)
                tempArray.push(row?.id);
            }else{
           
                tempArray =  tempArray?.filter(data => data !== row?.id)
            }
            setDeleteMultiple(tempArray)
    }
        
    const columns = [
        {
            title: '',
            dataIndex: '',
            render: (row) => {
                return <td > <Checkbox  onChange={(e)=>handleChange(e, row)}/></td>
            }
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Enrollment Id',
            dataIndex: 'endrollmentId',
        },
        {
            title: 'Department',
            dataIndex: 'department',
        },
        {
            title: 'Tuition Fee Status',
            dataIndex: '',
            render: (row) => {
                return <td className={row?.tuitionFeeStatus === 'Yes' ? 'success': 'faild'}> {row?.tuitionFeeStatus}</td>
            }
        },
        {
            title: 'Year',
            dataIndex: 'year',
        },
        {
            title: 'Action',
            dataIndex: '',
            render: (row) => {
                return <td className=''>
                    <span className='edit-action-row' onClick={()=>handleOpenModal('updateStudent', row)}>Edit</span>
                    <span className='edit-action-row' onClick={()=>handleOpenModal('deleteStudentPopup', row)}>Delete</span>
                </td>
            },
        },
        
    ];

    const handleOpenModal = (modalName, data) => {
        switch (modalName) {
            case 'deleteStudentPopup':
                setModalDetail({...modalDetail, modalName: modalName, modalValue: {data:data,setRowData:setRowData, rowData:rowData}, modalOpen: true})   
                break;
            case 'updateStudent' : 
            setModalDetail({...modalDetail, modalName: modalName, modalValue: {data:data,setRowData:setRowData, rowData:rowData}, modalOpen: true})   
            break;
            case 'AddStudent':{
                setModalDetail({...modalDetail, modalName: modalName, modalValue: {data:data,setRowData:setRowData, rowData:rowData}, modalOpen: true})   
                break;
            }
            default:
                setModalDetail({...modalDetail, modalOpen: false})   
                break;
        }
    };

    const multipleStudentDelete = () => {
        let temp = [...rowData]
        let deleteAry = [...deleteMultiple]
      
        deleteMultiple.filter(function(ra) {
            temp = temp.filter(function(sa) {
                return sa.id !== ra;
            });
        });
        setDeleteMultiple(deleteAry)
        setRowData(temp)
    }

    return(
        <div className="student_section">
           <div className='delete_multiple_section'>
                <button className={deleteMultiple?.length <= 0 ? "delete_multiple_disabled" :'delete_multiple'} disabled={deleteMultiple?.length <= 0} onClick={()=>multipleStudentDelete()}>Delete Multiple Student</button>
           </div>
           <div className='delete_multiple_section'>
                 <button className={ "delete_multiple_disabled" }  onClick={()=>handleOpenModal('AddStudent')}>Add  Student</button>
           </div>
            <CustomTable columns={columns} rowData={rowData} />
            <CustomModal modalOpen={modalDetail?.modalOpen} handleOpenModal={handleOpenModal} >
                <Modal modalValue={modalDetail?.modalValue} handleOpenModal={handleOpenModal} />
            </CustomModal>
    </div>
    )
}
export default Students