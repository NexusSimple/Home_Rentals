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
  return <button></button>;
};

export default Button;
