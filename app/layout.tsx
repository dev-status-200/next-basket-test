import { Montserrat } from "next/font/google";
import "./css/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from "./Components/MainLayout";

const monterrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Bandage",
  description: "Next Basket Assessment",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
  <html lang="en">
    <body className={monterrat.className}>
      <MainLayout>
        {children}
      </MainLayout>
    </body>
  </html>
  );
}