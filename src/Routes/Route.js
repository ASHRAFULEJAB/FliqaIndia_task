import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: '/services',
      //   element: <Services></Services>,
      // },
      // {
      //   path: '/services/:id',
      //   element: <ServiceAndReview></ServiceAndReview>,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://cardiologists-master-server.vercel.app/services/${params.id}`
      //     ),
      // },
      // {
      //   path: '/blog',
      //   element: <Blog></Blog>,
      // },
      // {
      //   path: '/login',
      //   element: <Login></Login>,
      // },
      // {
      //   path: '/register',
      //   element: <Register></Register>,
      // },
      // {
      //   path: '/my-reviews',
      //   element: (
      //     <PrivateRoute>
      //       <MyReviews></MyReviews>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: '/reviews/:id',
      //   element: <UpdateReview></UpdateReview>,
      // },
      // {
      //   path: '/add-service',
      //   element: (
      //     <PrivateRoute>
      //       <AddService></AddService>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);
