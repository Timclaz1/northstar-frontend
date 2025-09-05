import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
// import SignIn from "./pages/Login";

import { useState } from "react";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0F]">
      {/* Header */}
      <Header setIsLogin={() => setIsSignUp(false)} setIsSignUp={() => setIsSignUp(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        {isSignUp && <SignUp />
          // : <SignIn />}
        }
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
