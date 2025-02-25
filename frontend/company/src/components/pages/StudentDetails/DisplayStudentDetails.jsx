import { StoreContext } from '../../../components/context/StoreContext'
import { useContext } from "react";
import StudentDetails from './StudentDetails';
const DisplayStudentDetails = () => {
    const {appliedStudents}=useContext(StoreContext);

  return (
    <div className=''>
      <StudentDetails appliedStudents={appliedStudents}/>

    </div>
  );
}

export default DisplayStudentDetails