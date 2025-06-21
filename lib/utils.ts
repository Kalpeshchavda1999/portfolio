import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleDownloadCV() {
  const link = document.createElement("a");
  link.href = "/cv/Kalpesh-Chavda-CV.pdf"; // Adjust the path to your CV file
  link.download = "Kalpesh-Chavda-CV.pdf"; // The name of the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}