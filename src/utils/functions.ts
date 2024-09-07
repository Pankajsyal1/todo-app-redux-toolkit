export function formatDate(date: Date | string, format: string = "mm-dd-yyyy"): string | null {
    // If the input is a string, convert it to a Date object
    if (typeof date === "string") {
        date = new Date(date);
    }

    // Ensure the date is valid
    if (isNaN(date.getTime())) {
        return null;
    }

    const day: string = String(date.getDate()).padStart(2, '0');
    const month: string = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year: number = date.getFullYear();

    // Replace format tokens with actual date values
    return format
        .replace("dd", day)
        .replace("mm", month)
        .replace("yyyy", year.toString());
}
