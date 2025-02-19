import type { User } from "../types/User"
import customStyles from "./CustomButton.module.css"


interface CustomButtonProps {
    buttonText: string,
    userData: User,
    onClick: () => void;
}

const CustomButton = ({buttonText, onClick}: CustomButtonProps) => {
return (
    <button onClick={onClick} className={customStyles.customButton}>
        {buttonText}
    </button>
  );
};

export default CustomButton;