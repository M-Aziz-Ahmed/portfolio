import localFont from "next/font/local";
import "./globals.css";
import SideBar from "./components/sidebar/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=''
      >
        <SideBar/>
        {children}
      </body>
    </html>
  );
}
