interface Input extends Record<string, any> {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  extraElement?: React.ReactNode;
  autoComplete?: string; // Add the `autoComplete` prop
}

export default Input;
