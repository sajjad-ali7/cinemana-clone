import Aside from "../common/aside";
import Navbar from "../common/nav";
import AsideModal from "../modal";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <AsideModal />
      <Aside />
      <div style={{flexGrow : 1}}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
