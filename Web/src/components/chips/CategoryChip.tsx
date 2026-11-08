type CategoryChipProps = {
  label: string;
};

export default function CategoryChip({ label }: CategoryChipProps) {
  return <li>{label}</li>;
}
