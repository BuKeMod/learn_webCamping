
import Layout from "@/layouts/layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import About from "@/pages/About";
import Camping from "@/pages/admin/Camping";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Home from "@/pages/Home";
import Notfound from "@/pages/Notfound";
import Profile from "@/pages/user/Profile";

import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import ProtectRoute from "./ProtectRoute";
import CampingDetail from "@/pages/user/CampingDetail";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>

                {/* Private User */}
                <Route path="user" element={<Layout />}>
                    <Route path='profile' element={<Profile />} />
                    <Route path="camping/:id" element={<CampingDetail/>} />

                </Route>


                {/* Private */}
                <Route path="admin"
                    element={<ProtectRoute el={ <LayoutAdmin />} />}>
                    <Route index element={<Dashboard />} />
                    <Route path="manage" element={<Manage />} />
                    <Route path="camping" element={<Camping />} />

                </Route>


                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;