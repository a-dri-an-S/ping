import "../styles/PingFooter.css";

const PingFooter = () => {
    return (
        <footer className="ping-footer">
            <div className="ping-footer-socials">
                <button className="ping-footer-socials-btn">
                    <span className="icon icon-facebook"></span>
                </button>
                <button className="ping-footer-socials-btn">
                    <span className="icon icon-twitter"></span>
                </button>
                <button className="ping-footer-socials-btn">
                    <span className="icon icon-instagram"></span>
                </button>
            </div>
            <p className="ping-footer-copyright">
                Ⓒ Copyright Ping. All rights reserved.
            </p>
        </footer>
    );
}

export default PingFooter;