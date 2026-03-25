import { ref, getBytes } from "firebase/storage";
import { storage } from "./firebase";

/**
 * Converts a Firebase Storage path to a public CDN URL
 * @param storagePath - Path in Firebase Storage (e.g., "images/header.png")
 * @returns Public CDN URL
 */
export function getImageUrl(storagePath: string): string {
  const bucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  const encodedPath = encodeURIComponent(storagePath);
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodedPath}?alt=media`;
}