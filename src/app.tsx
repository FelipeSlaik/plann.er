import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreatTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/create-trip/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreatTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />
}