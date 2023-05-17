import {Navbar} from "../../components/Navbar";
import {Prihlaseni} from "../../components/MainPages/Prihlaseni";
import {Footer} from "../../components/Footer";

export default function prihlaseni() {
    return (
        <>
            <Navbar></Navbar>
           <Prihlaseni></Prihlaseni>
            <Footer></Footer>
        </>
    )
}