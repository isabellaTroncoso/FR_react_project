import type { Student } from "../types/Student";

const StudentComponent = ({ name, age, isActive }: Student) => {
  return (
    <div className={`student ${isActive ? "active" : ""}`}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{isActive ? "Active" : "Inactive"}</p>
    </div>
  );
};

export default StudentComponent;
