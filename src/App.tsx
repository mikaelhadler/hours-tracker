import Header from "./components/custom/Header";
import { cn } from "./lib/utils";

function App() {
  return (
    <main
      className={cn(
        "min-h-screen bg-background font-sans antialiased flex flex-col"
      )}
    >
      <Header />
      <div className="flex flex-1 h-full flex-col justify-center items-center">
        <h1>dadsa</h1>
      </div>
    </main>
  );
}

export default App;
