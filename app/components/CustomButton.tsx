import type { User } from "../types/User"

interface CustomButtonProps {
    buttonText: string,
    userData: User,
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({buttonText, userData, onClick}) => {
return (
    <button onClick={onClick} className="custom-button">
        {buttonText}
    </button>
);
};

export default CustomButton;