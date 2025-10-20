import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm  z-50 mx-16">
            <div className="container px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-8 w-2/3">
                    <div className="">
                        <Link to="/">Klinika <b>CRM</b></Link>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="flex md:flex items-center">

                        <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                            Shifokor
                        </a>
                        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                            Foydalanuvchilar
                        </a>
                        <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                            Bemorlar
                        </a>
                    </nav>
                </div>

                <div className=" md:flex items-center space-x-2">
                    <Button variant="outline" className="border-none bg-[#a6c1ee] hover:bg-[#87acec">
                        <Link to="/login">Logout</Link>
                    </Button>
                </div>

            </div>
        </header>
    );
};

export default Header;