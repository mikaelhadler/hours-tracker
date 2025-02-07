import Header from "./components/custom/Header";
import HoursCard from "./components/custom/HoursCard";
import { Card } from "./components/ui/card";
import { cn } from "./lib/utils";

function App() {
  return (
    <main
      className={cn(
        "min-h-screen bg-background font-sans antialiased flex flex-col"
      )}
    >
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 h-full px-4 sm:px-0">
        <Card>
          <HoursCard />
        </Card>
      </div>
    </main>
  );
}

export default App;
