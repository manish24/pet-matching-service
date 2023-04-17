import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import Routing from "./routing/routing";

const theme = createTheme();

// const ProtectedRoute = ({
//   isAllowed,
//   redirectPath = "/login",
//   children = null,
// }: {
//   isAllowed?: boolean;
//   redirectPath?: string;
//   children?: any;
// }) => {
//   if (!isAllowed) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return children ? children : <Outlet />;
// };


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Routing />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
