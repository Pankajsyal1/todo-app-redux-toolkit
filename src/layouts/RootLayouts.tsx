import TheFooter from "@/components/common/TheFooter";
import TheHeader from "@/components/common/TheHeader";
import { Outlet } from "react-router-dom";

const RootLayouts = () => {
  return (
    <>
      <TheHeader />
      <main>
        <Outlet />
      </main>
      <TheFooter />
    </>
  );
};

export default RootLayouts;
