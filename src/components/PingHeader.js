import HeaderImage from "../assets/logo.svg"
import "../styles/PingHeader.css";

const PingHeader = () => {
    return (
        <header className="ping-header">
            <img className="ping-header-img" src={HeaderImage} alt="ping"/>
        </header>
    );
}

export default PingHeader;