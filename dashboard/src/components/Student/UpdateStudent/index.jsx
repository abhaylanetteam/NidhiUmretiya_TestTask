import React, { useEffect } from 'react';
import { Button, Form, Input, Radio, Select, } from 'antd';
import {departmentList} from '../../../utiles'

import CommonBtn from '../../CommonBtn'

const UpdateStudent = ({handleOpenModal,modalValue}) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const { rowData, setRowData, data } = modalValue;   
        let temp = [...rowData];

        let index = temp?.findIndex((row)=> row?.id ===  data?.id)
            if(index > -1) {
                temp[index] = values
            }
         setRowData(temp)
         setTimeout(()=>{
            handleOpenModal();
        },500);

    };

    useEffect(() => {
        if(modalValue){
            form?.setFieldsValue({
                ...modalValue?.data
            })
        }
    }, [modalValue])
    

    return (
        <div className="update_student_details">
            <div className="title">
                <h1>Update Student Detail</h1>
            </div>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                layout={'vertical'}
                form={form}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Student Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Student Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    label="Endrollment Id"
                    name="endrollmentId"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Endrollment Id!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item> */}

                <Form.Item label="Department" name='department'>
                    <Select>
                        {
                            departmentList?.map((department)=>  <Select.Option key={department?.id} value={department?.lable}>{department?.lable}</Select.Option> )
                        }
                       
                    </Select>
                </Form.Item>

                <Form.Item label="tuition Fee" name="tuitionFeeStatus">
                    <Radio.Group>
                        <Radio.Button value="Yes">Yes</Radio.Button>
                        <Radio.Button value="No">No</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Student year"
                    name="year"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Student Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <div className='form_btn'>
                    <button    onClick={()=>handleOpenModal()}>Cancel</button>
                    <CommonBtn type={'submit'} value={'Update'} className='submit_btn' />
                </div>
            </Form>
        </div>
    )
}
export default UpdateStudent