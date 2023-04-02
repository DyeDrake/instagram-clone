import '../styles/landingPage.scss';
import Navigation from './Navigation';
import Cards from './Cards'
import Sidebar from './Sidebar'

function LandingPage() {
    return (
        <div className={"LandingPage"}>
            <Navigation />
            <main>
                <div className="container">
                    <Cards />
                    <Sidebar />
                </div>
            </main>
        </div>
    )
}

export default LandingPage;
