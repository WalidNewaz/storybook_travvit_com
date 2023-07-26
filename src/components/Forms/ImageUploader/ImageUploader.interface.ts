export default interface ImageUploaderProps {
  label: string;
  onImageSelected: (image: File | null | undefined) => void;
}
