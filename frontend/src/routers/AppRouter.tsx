import { BrowserRouter, Route, Routes } from "react-router";
import { AdminLogin, Footer, Login, Navbar, Register } from "../components";
import { AuthProvide } from "../context/AuthContext";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRouter";
import AdminRoute from "./AdminRoute";
import { CartPage, CheckoutPage, OrderPage, SingleBook } from "../pages/books";
import {
  AddBook,
  Dashboard,
  DashboardLayout,
  ManageBooks,
  UpdateBook,
  UserDashboard,
} from "../pages/dashboard";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvide>
          <Navbar />
          <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/orders"
                element={
                  <PrivateRoute>
                    <OrderPage />
                  </PrivateRoute>
                }
              />
              <Route path="/about" element={<div>About</div>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<CartPage />} />
              <Route
                path="/checkout"
                element={
                  <PrivateRoute>
                    <CheckoutPage />
                  </PrivateRoute>
                }
              />
              <Route path="/books/:id" element={<SingleBook />} />
              <Route
                path="/user-dashboard"
                element={
                  <PrivateRoute>
                    <UserDashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/admin" element={<AdminLogin />} />

              <Route
                path="/dashboard"
                element={
                  <AdminRoute>
                    <DashboardLayout />
                  </AdminRoute>
                }
              >
                <Route
                  path=""
                  element={
                    <AdminRoute>
                      <Dashboard />
                    </AdminRoute>
                  }
                />
                <Route
                  path="add-new-book"
                  element={
                    <AdminRoute>
                      <AddBook />
                    </AdminRoute>
                  }
                />
                <Route
                  path="edit-book/:id"
                  element={
                    <AdminRoute>
                      <UpdateBook />
                    </AdminRoute>
                  }
                />
                <Route
                  path="manage-books"
                  element={
                    <AdminRoute>
                      <ManageBooks />
                    </AdminRoute>
                  }
                />
              </Route>
            </Routes>
          </main>
          <Footer />
        </AuthProvide>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
