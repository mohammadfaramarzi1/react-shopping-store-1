import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="bg-zinc-900 text-white/80 font-DosisMedium">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
