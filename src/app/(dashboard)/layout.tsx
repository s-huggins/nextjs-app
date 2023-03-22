import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";
import { FC, PropsWithChildren } from "react";

interface IProps {}

const DashboardRootLayout: FC<PropsWithChildren<IProps>> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default DashboardRootLayout;
