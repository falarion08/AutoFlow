import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
     <h1>Hello, Vite + React!</h1>
     <Card>
       <p>This is a card components.</p>
     </Card>
     <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
    </ThemeProvider>
  )
}

export default App;