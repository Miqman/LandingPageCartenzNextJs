import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function convertToThumbnailUrl(url: string) {
  // Regex pattern to extract the file ID
  const regex = /\/d\/([a-zA-Z0-9_-]+)\//
  const match = url.match(regex)

  if (match && match[1]) {
    const fileId = match[1]
    // Construct the new thumbnail URL
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
  } else {
    // Return the original URL if it doesn't match the expected pattern
    return url
  }
}
