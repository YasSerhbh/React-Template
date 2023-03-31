import Home from "./../Home/index"
import About from "./../About/index"
import Portfolio from "./../Portfolio/index"
import Profile from "./../Profile/index"
import SocialMedia from "./../SocialMedia/index"
import Work from "./../Work/index"

function Index() {
return (
    <div className="Index">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
    </div>
  );
}

export default Index;
