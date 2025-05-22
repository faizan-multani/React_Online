// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App.jsx"
// import "./index.css"
// import { ThemeProvider } from "./contexts/theme"

// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom"
// import Layout from "./Layout.jsx"
// import Home from "./components/Homme/Homme.jsx"
// import About from "./components/About/About.jsx"
// import Contact from "./components/Contact/Contact.jsx"
// import User from "./components/User/User.jsx"
// import Github, { githubInfoLoader } from "./components/Github/Github.jsx"

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:userid" element={<User />} />
//       <Route loader={githubInfoLoader} path="github" element={<Github />} />
//     </Route>
//   )
// )

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <RouterProvider router={router} />
//     </ThemeProvider>
//   </React.StrictMode>
// )

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { ThemeProvider } from "./contexts/theme"

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "./components/Homme/Homme.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import User from "./components/User/User.jsx"
import Github, { githubInfoLoader } from "./components/Github/Github.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" loader={githubInfoLoader} element={<Github />} />
    </Route>
  )
)

// Move your state and functions from App.jsx to main.jsx
import { useState } from "react"

function Root() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => setThemeMode("light")
  const darkTheme = () => setThemeMode("dark")

  
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
