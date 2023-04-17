import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";
import { SessionContext } from "../context/session-context";
import Dashboard from "../features/dashboard/dashboard";

import Login from "../features/login/login";
import SignUp from "../features/signUp/signUp";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/signUp",
//     element: <SignUp />,
//   },
// ])

const ProtectedRoute = ({
  isAllowed,
  redirectPath = "/login",
  children = null,
}: {
  isAllowed?: boolean;
  redirectPath?: string;
  children?: any;
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default function Routing() {
  // return <RouterProvider router={router} />;
  const session = useContext(SessionContext);
console.log('session', session)
  return (
    <SessionContext.Provider value={session}>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route element={<ProtectedRoute isAllowed={session.isValid} />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </SessionContext.Provider>
  );
}
