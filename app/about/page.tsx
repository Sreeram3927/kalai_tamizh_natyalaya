import AppBar from '../components/app_bar';
import CenteredView from "../components/centered_view";
import Footer from '../components/footer';

export default function About() {
    return (
        <CenteredView>
            <AppBar />
            <h1>About</h1>
            <p>This is the about page</p>
            <Footer />
        </CenteredView>
    )
}