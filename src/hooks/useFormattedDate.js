import { format } from "date-fns";

export function useFormattedDate(
  dateString,
  outputFormat = "yyyy-MM-dd HH:mm:ss"
) {
  if (!dateString) {
    return;
  }
  return format(new Date(dateString), outputFormat);
}
