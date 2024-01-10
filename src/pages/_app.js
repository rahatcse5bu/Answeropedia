import Header from "@/components/Header";
import { ReduxProvider } from "@/store/provider";
import "../app/globals.css";
// export default function RootLayout({ children }) {
//     return (
//         <ReduxProvider>
//             <Header />
//             {children}
//         </ReduxProvider>
//     );
// }

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ReduxProvider>
        <Header />
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
