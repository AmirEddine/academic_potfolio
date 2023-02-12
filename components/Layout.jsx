import Animation_test from "./Animation_test";
import BarNavigation from "./BarNavigation";
import Footer from "@/components/Footer";


export default function Layout({setPage, children}) {
    return <>
        <BarNavigation setPage={setPage} />
        <div className="relative ">
            <Animation_test />
            {children}
            <Footer/>
        </div>
        
    </>
}