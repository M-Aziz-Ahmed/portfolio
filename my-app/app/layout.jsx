import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-dark`}
      >
        <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 bg-white fixed-top" style={{height:'100vh'}}>
            <NavBar />
          </div>
          <div className="col-lg-10">
            {children}
          </div>
        </div>
        </div>
      </body>
    </html>
  );
}
