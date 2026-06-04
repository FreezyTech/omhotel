import Navbar from "@/component/Layout/Navbar/Navbar";
import Footer from "@/component/Layout/Footer/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
