export default interface DropDownProps {
  id: string;
  options: string[];
  placeholder?: string;
  setDropdownValue: React.Dispatch<React.SetStateAction<string | null>>;
}
