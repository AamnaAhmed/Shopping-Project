import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home"
import Shop from "../components/Shop"
import About from "../components/About"
import Blog from "../components/Blog"
import Contact from "../components/Contact"

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <Layout>
        <Home />
        </Layout>
      ),
    },
    {
        path: "/shop",
        element: (
            <Layout>
            <Shop />
          </Layout>
        ),
      },
    {
        path: "/about",
        element: (
            <Layout>
            <About />
          </Layout>
        ),
      },
    {
        path: "/blog",
        element: (
            <Layout>
            <Blog />
          </Layout>
        ),
      },
    {
        path: "/contact",
        element: (
            <Layout>
            <Contact />
          </Layout>
        ),
      },
  ]);
  