import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const userImg = "";

const dashboard = () => {
  return (
    <div className="adminContainer">
        {/* Siderbar */}
        <AdminSidebar/>
        <main className="dashboard">
            <div className="bar">
                <BsSearch/>
                <input type="text" placeholder="Search for data, users, docs"/>
                <FaRegBell/>
                <img src={userImg} alt="" />
            </div>
            <section className="widgetcontainer">
                <WidgetItem percent={40} amount={true} value={34000} heading="Revenue" color="rgb(0,155,255)"/>
                <WidgetItem percent={40} amount={true} value={34000} heading="Revenue" color="rgb(0,155,255)"/>
                <WidgetItem percent={40} amount={true} value={34000} heading="Revenue" color="rgb(0,155,255)"/>
            </section>
        </main>
        {/* Main */}
    </div>
  )
}

interface WidgetItemProps {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean;
}

const WidgetItem = ({heading, value, percent, color, amount} : WidgetItemProps ) =>
    <article className="widget">
        <div className="widgetInfo">
            <p>{heading}</p>
            <h4>{amount ? `$${value}` : value}</h4>
            {
                percent > 0 ? <span className="green"><HiTrendingUp/> + {percent}%
                `</span> : <span className="red"><HiTrendingDown/> {percent}%
                `</span>
            }
        </div>
        <div className="widgetCircle" style={{
            background: `conic-gradient(
            $(color) 320deg, rgb(255, 255, 255) 0
            )`
        }}>
            <span color={color} > {percent} % </span>
        </div>
    </article>

export default dashboard;
