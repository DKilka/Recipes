interface DropDownProps {
  optionsList: string[];
  style?: string;
  value: string;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown = ({ optionsList, style, value, onSelect }: DropDownProps) => {
  return (
    <select
      id="selectMenu"
      className={`bg-gray-400 rounded-lg outline-none w-1/4 h-10 ${style}`}
      value={value}
      onChange={onSelect}
    >
      {optionsList.map((option) => {
        return (
          <option
            key={crypto.randomUUID()}
            value={option}
          >
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default DropDown;
