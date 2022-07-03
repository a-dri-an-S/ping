import Dashboard from "../assets/dashboard.png";
import "../styles/PingDashboard.css";

const PingDashboard = () => {
    return (
        <section>
            <img className="ping-dashboard-img" src={Dashboard} alt="ping-dashboard"/>
        </section>
    );
}

export default PingDashboard;