const PingSubmit = () => {
    return (
        <section className="ping-submit-section">
            <div className="ping-submit-info">
                <h2 className="ping-submit-header">
                    We are launching <span className="ping-submit-header-bold">soon!</span>
                </h2>
                <p className="ping-submit-info">
                    Subscriber and get notified
                </p>
            </div>
            <div className="ping-submit-submit">
                <input 
                    className="ping-submit-input"
                    type="text"
                    placeholder="Your email address..."
                    for="ping-submit" 
                />
                <button className="ping-submit-button">Notify Me</button>
            </div>
        </section>
    );
}

export default PingSubmit;