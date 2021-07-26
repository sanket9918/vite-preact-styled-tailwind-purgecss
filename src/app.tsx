import { Hero } from "./components/Hero";
import { GlobalStyle } from "./app.style";
import { Navbar } from "./components/Navbar";


export function App() { 
    return (
      <GlobalStyle>
        <Navbar />
        <Hero />       
      </GlobalStyle>
    
  );
}
