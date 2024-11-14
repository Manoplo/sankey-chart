import Navbar from "../components/navbar/navbar";
import "./layout.scss";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
