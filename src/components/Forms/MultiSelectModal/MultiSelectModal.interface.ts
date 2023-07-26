export default interface MultiSelectModalProps {
  options: string[] | null;
  id: string;
  selectedOptions: string[] | null;
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[] | null>>;
}
