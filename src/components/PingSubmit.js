import { useState } from "react";
import "../styles/PingSubmit.css";

const PingSubmit = () => {

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    const submitEmail = (e) => {
        e.preventDefault();
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(validRegex)) {
            return setValidEmail(true);
        } else {
            setEmail("");
        }
    }

    return (
        <section className="ping-submit-section">
            <div className="ping-submit-info">
                <h2 className="ping-submit-header">
                    We are launching <span className="ping-submit-header-bold">soon!</span>
                </h2>
                <p className="ping-submit-tag">
                    Subscriber and get notified
                </p>
            </div>
            <form 
                className="ping-submit-submit"
                onSubmit={(e) => submitEmail(e)}

            >
                <input 
                    className={validEmail ? "ping-submit-input invalid" : "ping-submit-input"}
                    type="text"
                    placeholder="Your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                {validEmail ? 
                    <p className="ping-submit-invalid">Please provide a valid email address</p> : 
                    null
                }
                <button                                     
                    className="ping-submit-button"
                    type="submit"
                >
                    Notify Me
                </button>
            </form>
        </section>
    );
}

export default PingSubmit;