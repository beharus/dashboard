import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminDashboard from "./pages/admin-dashboard/adminDashboard";

function App() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/admin-dashboard/main')
    }, [])
    return (
        <div className=" h-[100vh] w-full">
            <Routes>
                <Route path="/admin-dashboard/:category" element={<AdminDashboard />} />
            </Routes>
        </div>
    );
}

export default App;

