import { Link, Slot, usePathname } from "expo-router";
import React from "react";
import { View } from "react-native";
import "./../global.css";
import FooterNav from "@/components/FooterNav";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/AuthContext";

const RootLayout = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  const hideFooter = ["/signup","/login" ].includes(pathname);

  return (
  <AuthProvider>  <SafeAreaView
      style={{ flex: 1, width: "100%" }}
      className="bg-[#e51aa1] justify-center items-center"
    >
      <Slot />

      {!hideFooter && <FooterNav />}
    </SafeAreaView>
    </AuthProvider>
  );
};

export default RootLayout;
