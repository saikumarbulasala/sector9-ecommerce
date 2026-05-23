import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import mainImg from "../assets/about_img.png";
import SubscriptionForm from "../components/SubscriptionForm";
import DescribedImage from "../components/DescribedImage";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="about-page text-center py-3 pt-5"
		>
			<div className="container">
				{/* Page header with dashed styling */}
				<HeaderDashed head1="ABOUT" head2="US" classStyle="fw-normal fs-3" />
				
				{/* Main image with descriptive text */}
				<DescribedImage img={mainImg} imgTitle="clothes image" 
				styleInLarge="column-gap-xl-4"
				styleImg="col-xl-5"
				styleText="col-xl-6"
				sideText={					
					<>
					<p>
						Sector 9 was created with a vision to redefine modern fashion and elevate the online shopping experience for a new generation. Built around innovation, style, and individuality, our brand brings together contemporary streetwear and premium essentials designed for people who want to stand out.

From trend-driven apparel to everyday fashion staples, Sector 9 offers a carefully curated collection that blends comfort, quality, and modern aesthetics. Every product is selected to reflect confidence, creativity, and the evolving culture of fashion.
						<br />
						<br />
						At Sector 9, we believe fashion is more than clothing — it’s a statement of identity and lifestyle. Our mission is to deliver stylish, high-quality pieces that inspire self-expression while providing a seamless and enjoyable shopping experience.
					</p>
					{/* Mission statement */}
					<div className="mission">
						<h4 className="my-3 mt-4 c-black">Mission Sector 9</h4>
						<p className="mb-0">
							Our mission at Sector 9 is to inspire confidence through fashion by delivering modern, high-quality styles that combine comfort, individuality, and streetwear culture. We are committed to creating a seamless shopping experience that makes discovering the latest trends simple, accessible, and enjoyable.

From browsing to delivery, Sector 9 focuses on quality, innovation, and customer satisfaction — empowering every customer to express their style with confidence.

						</p>
					</div>
					</>}/>

				{/* Why Choose Us section */}
				<section className="choose-us mt-6">
					<HeaderDashed head1="WHY" head2="CHOOSE US" />
					<div className="pros mt-4">
						<div className="row row-gap-4">
							{/* Each article represents a benefit */}
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Quality Assurance:</h4>
								<p className="c-mm-gray mb-0 mt-4">
									Every Sector 9 product is carefully curated to deliver premium quality, modern design, and lasting comfort.
								</p>
							</div>
							</article>
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Convenience:</h4>
								<p className="c-mm-gray mb-0 mt-4">
								Sector 9 delivers a seamless shopping experience with effortless browsing, secure checkout, and fast, reliable delivery.
								</p>
							</div>
							</article>
							<article className="col-12 col-lg-4">
							<div className="text-start border rounded p-4 h-100">
								<h4 className="fs-6 fw-bold">Exceptional Customer Service:</h4>
								<p className="c-mm-gray mb-0 mt-4">
								Our dedicated support team is committed to providing fast, reliable assistance and ensuring every Sector 9 experience exceeds expectations.
								</p>
							</div>
							</article>
						</div>
					</div>
				</section>

				{/* Subscription form for users */}
				<SubscriptionForm />
			</div>
		</motion.div>
	);
};

export default About;
