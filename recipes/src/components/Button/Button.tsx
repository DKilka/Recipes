interface ButtonProps {
  title: string;
  type?: 'button' | 'submit';
  style?: string;
  isDisabled?: boolean;
  onClick: () => void;
}

const Button = ({
  title,
  type = 'button',
  style,
  isDisabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gray-400 p-2 rounded-lg cursor-pointer active:bg-gray-300 disabled:cursor-not-allowed disabled:bg-gray-500 ${style}`}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default Button;
