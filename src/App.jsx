import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./root-layout/RootLayout";
import ErrorPage from "./pages/error-page/ErrorPage";
import HomePage from "./pages/home-page/HomePage";
import CvPage from "./pages/cv-page/CvPage";
import ContactPage from "./pages/contact-page/ContactPage";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: `/`,
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/cv", element: <CvPage /> },
          { path: "/kontakt", element: <ContactPage /> },
        ],
      },
    ],
    { basename: "/portfolio" }
  );
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
