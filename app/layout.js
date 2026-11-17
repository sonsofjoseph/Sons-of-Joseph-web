import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Sons of Joseph',
  description: 'A formation group for young Catholic men rooted in brotherhood, prayer, virtue, and devotion to Mary and Saint Joseph.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}<Analytics /></body>
    </html>
  );
}
