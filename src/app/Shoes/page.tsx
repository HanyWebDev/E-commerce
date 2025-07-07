import Products_Shoes from "../products/shoes";
import Heading from "../components/heading";
import Categories from "../components/categories";
import Footer from "../components/footer";
import ThemeToggle from "../theme/toggle";
export default function Shoes(){
    return( <>
    <Heading/>
    <Products_Shoes/>
    <Footer/>
    </>
    );
}