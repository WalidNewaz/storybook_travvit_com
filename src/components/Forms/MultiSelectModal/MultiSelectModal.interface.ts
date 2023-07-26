export default interface MultiSelectModalProps {
  id: string;
  options: string[] | null;
  placeholder?: string;
  selectedOptions: string[] | null;
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[] | null>>;
}
