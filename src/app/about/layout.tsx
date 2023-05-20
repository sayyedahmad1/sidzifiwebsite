import Navbar from "../../../components/Navbar";
import Internet from "../../../components/Internet";
import Footer from "../../../components/Footer";
// import styles from "./page.module.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="header-container">
        <Navbar />
      </header>
      <main>{children}</main>
      <Internet />
      <Footer />
    </>
  );
}
