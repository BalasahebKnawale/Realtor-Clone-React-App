import { ToastContainer } from "react-toastify";
import Header from "./layout/Header";
import { AllRoutes } from "./routes/AllRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <AllRoutes></AllRoutes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
