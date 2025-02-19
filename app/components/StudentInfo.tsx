import StudentComponent from "~/components/StudentComponent";
import type { Student } from "~/types/Student";
import style from "../welcome/welcome.module.css"

export function StudentInfo() {
  const studentData: Student = {
    name: "Isabella Troncoso",
    age: 25,
    isActive: true,
  };

  return (
    <div className={style.interfaceContent}>
      <h3>Student</h3>
      <StudentComponent {...studentData} /> 
    </div>
  );
}