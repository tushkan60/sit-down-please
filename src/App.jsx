import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./pages/Root.jsx";
import { HomePage } from "./pages/Home";
import { CatalogPage } from "./pages/Catalog";
import { DetailPage, loader } from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "catalog/",
        element: <CatalogPage />,
      },
      {
        path: "catalog/:ItemId",
        element: <DetailPage />,
        id: "itemDetail",
        loader: loader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
