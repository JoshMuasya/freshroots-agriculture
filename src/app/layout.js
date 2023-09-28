import './globals.css'

export const metadata = {
  title: 'Fresh Roots Agriculture',
  description: 'Fresh Products from farm',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
