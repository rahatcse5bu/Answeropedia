import { ReduxProvider } from "@/store/provider";
import Header from "./Header";

 
export default function Layout({ children }) {
  return (
    <>
    <ReduxProvider>
      <Header />
      <main>{children}</main>
      </ReduxProvider>
     
    </>
  )
}