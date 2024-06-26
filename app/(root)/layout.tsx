import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const layout = ({children}:{children:React.ReactNode}) => {
    return(
        <main className="background-light850_dark100 relative">
              <Navbar/>
            
                 <section className=" min-h-screen px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-screen-xl">
                        {children}
                    </div>
                 </section>
                 <Footer/> 
               
       
        </main>
    )
}
export default layout;