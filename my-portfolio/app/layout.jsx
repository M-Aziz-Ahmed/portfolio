import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from "./components/sidebar/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='bg-dark'
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 bg-light position-absolute h-100 fixed-top">
              <SideBar/>
            </div>
            <div className="col">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
