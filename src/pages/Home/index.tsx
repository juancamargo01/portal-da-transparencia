import About from "components/About";
import Attendance from "components/Attendance";
import Banner from "components/Banners";
import Footer from "components/Footer";
import Header from "components/Header";
import NavBar from "components/NaveBar";
import Questions from "components/Questions";

const Home = () => {
    return (
        <div >
            <Header/>
            <NavBar/>
            <Questions/>
            <About/>
            <Banner/>
            <Attendance/>
            <Footer />
            
        </div>

    );
}

export default Home;