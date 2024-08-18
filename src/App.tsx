import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./components/Loader";

const DashBoard = lazy(() => import ("./pages/Dashboard"));
const Products = lazy(() => import ("./pages/Products"));
const  Transaction = lazy(()=> import ("./pages/Transaction"));
const Customers = lazy(() => import ("./pages/Customers"));

const App = () => {
  return (
    <Router>
        <Suspense fallback = {<Loader/>}>
        <Routes>
            <Route path="/admin/dashboard" element={<DashBoard/>} />
            <Route path="/admin/products" element={<Products/>} />
            <Route path="/admin/transaction" element={<Transaction/>} />
            <Route path="/admin/customers" element={<Customers/>} />
            {/* Charts */}
            {/* Apps */}
        </Routes>
        </Suspense>
    </Router>
  )
}

export default App
