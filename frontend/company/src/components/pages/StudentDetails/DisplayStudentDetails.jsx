import { StoreContext } from '../../../components/context/StoreContext'
import { useContext } from "react";
import StudentDetails from './StudentDetails';
const DisplayStudentDetails = () => {
    const {appliedStudents}=useContext(StoreContext);

  return (
    <StudentDetails appliedStudents={appliedStudents}/>
  );
}

export default DisplayStudentDetails