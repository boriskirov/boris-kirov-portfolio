export default function CurrentYear() {
  const NewYear = new Date();
  const CurrentYear = NewYear.getFullYear();

  return CurrentYear;
}
