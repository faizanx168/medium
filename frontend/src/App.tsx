import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticatedRoute from "./Auth"; // Import the AuthenticatedRoute component
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/blog/:id"
          element={
            <AuthenticatedRoute>
              <Blog />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <AuthenticatedRoute>
              <Blogs />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/publish"
          element={
            <AuthenticatedRoute>
              <Publish />
            </AuthenticatedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
