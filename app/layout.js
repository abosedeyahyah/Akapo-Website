
import Mainlayout from "./Components/Mainlayout";
import "./globals.css";

export const metadata = {
  title: "Nextjs Akapo",
  description: "This is a project from the magnital technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Mainlayout>{children}</Mainlayout>
      </body>
    </html>
  );
}
