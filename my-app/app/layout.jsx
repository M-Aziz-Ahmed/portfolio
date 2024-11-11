import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark">
        <div className="container-fluid p-0">
          <div className="row m-0">
            {/* Sidebar */}
            <div className="col-lg-2 p-0 fixed-sidebar">
              <NavBar />
            </div>

            {/* Main Content Area */}
            <div className="col-lg-10 offset-lg-2 p-4 main-content">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
