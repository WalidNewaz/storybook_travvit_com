export default interface MultiSelectProps {
  options: string[];
  className?: string;
  selectedOptions: string[] | null;
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[] | null>>;
}
