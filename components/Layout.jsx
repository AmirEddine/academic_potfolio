import Animation_test from "./Animation_test";
import BarNavigation from "./BarNavigation";
import Footer from "@/components/Footer";


export default function Layout({ children}) {
    return <>
        <BarNavigation  />
        <div className="relative ">
            <Animation_test />
            {children}
            <Footer/>
        </div>
        
    </>
}