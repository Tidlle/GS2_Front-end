import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="
      min-h-screen flex flex-col 
      bg-slate-500 text-slate-900 
      dark:bg-gradient-to-b dark:from-[#0B1640] dark:via-[#020617] dark:to-[#020617] 
      dark:text-white 
      transition-colors duration-300
    ">
      <Navbar />

      <main className="
        flex-1 pt-6 pb-10 md:pt-10 md:pb-16
        text-slate-900 dark:text-white
      ">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
