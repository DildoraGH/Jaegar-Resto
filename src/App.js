import Sidebar from "./layout/sidebar";
import Home from "./pages/home";
import ContextProvider from './services/context-store';
import Cart from './layout/cart';
import Profile from "./layout/profile";
import Settings from "./layout/settings";


function App() {

  return (
    <ContextProvider>
      <Sidebar />
      <Home />
      <Settings />
      <Cart />
      <Profile />
    </ContextProvider>
  );
}

export default App;
