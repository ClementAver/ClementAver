import type { AppProps } from "next/app";
import MainLayout from "@/components/layouts/MainLayout";
import "../../public/css/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
