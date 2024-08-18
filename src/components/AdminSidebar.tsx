import { IconType } from "react-icons";
import { RiDashboardFill } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

const AdminSidebar = () => {

const location = useLocation();

  return (
    <aside>
        <h2>Logo.</h2>
        <div>
            <h5>Dashboard</h5>
            <ul>
                <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location}/>
            </ul>
        </div>
    </aside>
  )
}

interface LiProps {url: string; text: string; location: Location; Icon: IconType;}

const Li = ({url,text, location, Icon}:LiProps) =>
    <li>
        <Link to={url}>
        <Icon/>
        {text}</Link>
    </li>;

export default AdminSidebar
