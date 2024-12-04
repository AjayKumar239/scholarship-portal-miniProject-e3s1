import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./components/redux/store.js";

import App from "./components/routes/App.jsx";
import Home from "./components/pages/Home.jsx";
import Signup from "./components/pages/Signup.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import FreshFormFillup from "./components/pages/FreshFormFillup.jsx";
import Signin from "./components/pages/Signin.jsx";
import Step1 from "./components/Form/Step1.jsx";
import Step2 from "./components/Form/Step2.jsx";
import Step3 from "./components/Form/Step3.jsx";
import AboutUs from "./components/pages/AboutUs.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import Services from "./components/pages/Services.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/saf" element={<FreshFormFillup />}>
        <Route index element={<Step1 />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Services" element={<Services />} />


    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
