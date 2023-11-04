import { Route, Routes } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import UserCreate from "./pages/Users/Create"
import UserEdit from "./pages/Users/Edit"
import UserList from "./pages/Users/List"

// import NotFound from "./pages/NotFound"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/">
        <Route path="/crud_react" element={<UserList />} />
        <Route path="/crud_react/new" element={<UserCreate />} />
        <Route path="/crud_react/:id" element={<UserEdit />} />
      </Route>
    </Routes>
  )
}
