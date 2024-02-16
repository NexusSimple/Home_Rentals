import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (event: MouseEvent) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon,
}: ButtonProps) => {
  return (
    <button
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline ? "bg-white" : "bg-primary"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
