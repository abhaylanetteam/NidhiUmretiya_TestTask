import CommonBtn from '../../CommonBtn';

const DeleteStudentPopup = ({handleOpenModal,modalValue}) => {

    const handleSubmit = (e) => {
        const { rowData, setRowData, data } = modalValue;
        e.preventDefault();
        let temp = [...rowData]
        setRowData(temp?.filter((student)=> student?.endrollmentId !== data?.endrollmentId ))
        setTimeout(()=>{
            handleOpenModal();
        },500);
    }


    return (
        <div className="delete-student-popup">
            <h2>Delete Student</h2>
            <p>Are you sure delte student detail ?</p>
            <form className="" onSubmit={(e)=>handleSubmit(e)}>
                <button onClick={()=>handleOpenModal()}>No</button>
                <CommonBtn type={'submit'} value={"Yes"} className='submit_btn' />
            </form>
        </div>
    )
}
export default DeleteStudentPopup