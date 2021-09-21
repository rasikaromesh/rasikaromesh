import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Features</li>
                <li>Mobile App</li>
                <li>Web App</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/banking.png" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
