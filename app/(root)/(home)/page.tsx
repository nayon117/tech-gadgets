import About from "@/components/shared/About";
import Banner from "@/components/shared/Banner";
import Newsletter from "@/components/shared/Newsletter";
import Testimonial from "@/components/shared/Testimonial";

const HomePage = () => {
    return (
        <section className=''>          
                <Banner />
                <About/>
                <Testimonial/>
                <Newsletter/>
        </section>
    )
}
export default HomePage;