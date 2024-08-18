import AdminSidebar from "../components/AdminSidebar"

const dashboard = () => {
  return (
    <div className="adminContainer">
        {/* Siderbar */}
        <AdminSidebar/>
        <main>
            Main
        </main>
        {/* Main */}
    </div>
  )
}

export default dashboard
