import 'react-circular-progressbar/dist/styles.css';
import './App.css';
import Curve from './component/Curve';
import { gsap, Power2 } from 'gsap';
import {useRef,useEffect} from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
	
	
	const container = useRef(null);
	const sec1 = useRef(null);
	const sec2 = useRef(null);
	const sec3 = useRef(null);
	const sec4 = useRef(null);
	const sec5 = useRef(null);
	const sec6 = useRef(null);
	const sec7 = useRef(null);

	useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section1"))
		gsap.fromTo(
			element.querySelector("#section1"),
			{
			  	opacity: 1,
			},
			{
				opacity: 0,
				scrollTrigger: {
					trigger: element.querySelector("#section1"),
					start: "3% 2%",
					end: "20% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	  useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section2"))
		gsap.fromTo(
			element.querySelector("#section2"),
			{
			  	opacity: 0,
			},
			{
				opacity: 1,
				scrollTrigger: {
					trigger: element.querySelector("#section2"),
					start: "5% 2%",
					end: "20% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	  useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section2"))
		gsap.fromTo(
			element.querySelector("#section2"),
			{
			  	opacity: 1,
			},
			{
				opacity: 0,
				scrollTrigger: {
					trigger: element.querySelector("#section2"),
					start: "25% 2%",
					end: "35% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	  
	  useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section3"))
		gsap.fromTo(
			element.querySelector("#section3"),
			{
			  	opacity: 0,
			},
			{
				opacity: 1,
				scrollTrigger: {
					trigger: element.querySelector("#section3"),
					start: "25% 2%",
					end: "35% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	  useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section3"))
		gsap.fromTo(
			element.querySelector("#section3"),
			{
			  	opacity: 1,
			},
			{
				opacity: 0,
				scrollTrigger: {
					trigger: element.querySelector("#section3"),
					start: "40% 2%",
					end: "50% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	  
	  useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section4"))
		gsap.fromTo(
			element.querySelector("#section4"),
			{
			  	opacity: 0,
			},
			{
				opacity: 1,
				scrollTrigger: {
					trigger: element.querySelector("#section4"),
					start: "40% 2%",
					end: "50% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	  useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section4"))
		gsap.fromTo(
			element.querySelector("#section4"),
			{
			  	opacity: 1,
			},
			{
				opacity: 0,
				scrollTrigger: {
					trigger: element.querySelector("#section4"),
					start: "55% 2%",
					end: "65% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	  useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section5"))
		gsap.fromTo(
			element.querySelector("#section5"),
			{
			  	opacity: 0,
			},
			{
				opacity: 1,
				scrollTrigger: {
					trigger: element.querySelector("#section5"),
					start: "55% 2%",
					end: "65% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	  useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section5"))
		gsap.fromTo(
			element.querySelector("#section5"),
			{
			  	opacity: 1,
			},
			{
				opacity: 0,
				scrollTrigger: {
					trigger: element.querySelector("#section5"),
					start: "70% 2%",
					end: "80% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	  useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section6"))
		gsap.fromTo(
			element.querySelector("#section6"),
			{
			  	opacity: 0,
			},
			{
				opacity: 1,
				scrollTrigger: {
					trigger: element.querySelector("#section6"),
					start: "70% 2%",
					end: "80% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	  useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section6"))
		gsap.fromTo(
			element.querySelector("#section6"),
			{
			  	opacity: 1,
			},
			{
				opacity: 0,
				scrollTrigger: {
					trigger: element.querySelector("#section6"),
					start: "85% 2%",
					end: "95% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	  
	  useEffect(() => {
		const element = container.current;
		console.log(element.querySelector("#section7"))
		gsap.fromTo(
			element.querySelector("#section7"),
			{
			  	opacity: 0,
			},
			{
				opacity: 1,
				scrollTrigger: {
					trigger: element.querySelector("#section7"),
					start: "85% 2%",
					end: "100% 2%",
					// markers:true,
					scrub: true,
					ease: Power2.easeOut,
				},
			}
		);
	  }, []);

	return (

		<div className="app">
			<div className="container" ref={container}>
				
				<div className="section" id="section7" ref={sec7}  style={{"--left":"#00824b","--i":7,"--right":"#00b768"}}>
					<div className="leftSection">
					<div className="left_title">
							<p>Biggest Classifieds</p>
							<h1>East Asia</h1>
							<p>Countries</p>
						</div>
						<Curve till={7}/>
						<div className="left_img">
							<img alt="" src="/images/mobile-app-of-the-year-by-entrepreneur.png"/>
						</div>
						<h1>ABC 234567</h1>
						<p className="left_p">We are the best web development company in the world</p>
						<div className="left_footer">
							<span>Comming Soon <b>&rarr;</b></span>
							<span className="skip">Skip</span>
						</div>
					</div>
					<div className="rightSection">
						<div className="img" style={{position:"relative",bottom:"-165px",right:"20px",width:"auto",maxWidth:"650px"}}>
							<img alt="" src="/images/melltoo-img2.png" style={{position:"relative",right:"-85px",zIndex:"1"}}/>
							<img alt="" src="/images/melltoo-img1.png" style={{width:"35%"}}/>
						</div>
					</div>
				</div>

				<div className="section" id="section6" ref={sec6}  style={{"--left":"#012a90","--i":6,"--right":"url('/images/interior1.jpg')"}}>
					<div className="leftSection">
						<div className="left_title">
							<p>Developing ERP Solution for</p>
							<h1>Text Headline</h1>
							<p>in furniture industry</p>
						</div>
						<Curve till={6}/>
						<h1>ABC 678</h1>
						<p className="left_p">We are the best web development company in the world</p>
						<div className="left_footer">
							<span>View Case Study <b>&rarr;</b></span>
							<span className="skip">Skip</span>
						</div>
					</div>
					<div className="rightSection">
						<div className="img" style={{alignItems:"flex-end",width:"100%"}}>
							<img alt="" style={{width:"100%",maxHeight:"500px"}} src="/images/erp-app-development-service.png"/>
						</div>
					</div>
				</div>
				
				<div className="section" id="section5" ref={sec5}  style={{"--left":"#1263e7","--i":5,"--right":"#22cfe9"}}>
					<div className="leftSection">
						<div className="left_title">
							<p>Text Headline</p>
							<h1>Text Headline</h1>
							<p>Footer Headline</p>
						</div>
						<Curve till={5}/>
						<h1>ABC 567</h1>
						<p className="left_p">We are the best web development company in the world</p>
						<div className="left_footer">
							<span>View Case Study <b>&rarr;</b></span>
							<span className="skip">Skip</span>
						</div>
					</div>
					<div className="rightSection">
						<div className="img" style={{paddingLeft:"85px"}}>
							<div className="img_sec">
								<img alt="" src="/images/karavan-social-networking-app-screen.png" style={{width:"90%",position:"relative",top:"-65px"}}/>
								<img alt="" src="/images/karavan_2.png" style={{width:"90%",position:"relative",bottom:"-55px",left:"10px"}}/>
							</div>
							<div className="img_sec">
								<img alt="" src="/images/social-networking-app-case-study.png" style={{width:"90%",position:"relative",top:"-5px"}}/>
								<img alt="" src="/images/karavan-social-networking-app-screen-2.png" style={{width:"90%",position:"relative",bottom:"-135px"}}/>
							</div>
							<div className="img_sec">
								<img alt="" src="/images/developers-for-social-media-app.png" style={{width:"100%",position:"relative"}}/>
							</div>
						</div>
					</div>
				</div>
				
				<div className="section" id="section4" ref={sec4} style={{"--left":"#14243a","--i":4,"--right":"#0d131b"}}>
					<div className="leftSection">
						<div className="left_title">
							<p>Redefining</p>
							<h1>UX Strategy</h1>
							<p>and UI design</p>
						</div>
						<Curve till={4}/>
						<h1>ABC 456</h1>
						<p className="left_p">We are the best web development company in the world</p>
						<div className="left_footer">
							<span>View Case Study <b>&rarr;</b></span>
							<span className="skip">Skip</span>
						</div>
					</div>
					<div className="rightSection">
						<div className="img" style={{display:"block"}}>
							<img alt="" style={{width:"50%",maxWidth:"300px",top:"-35px",left:"0px",position:"absolute"}} src="/images/pizza_box.png"/>
							<img alt="" style={{top:"-140px",maxWidth:"169px",right:"30px",position:"absolute",width:"28%"}} src="/images/dominos-bread.png"/>
							<img alt="" style={{top:"120px",maxWidth:"200px",right:"150px",position:"absolute",width:"35%"}} src="/images/developers-for-social-media-app.png"/>
							<img alt="" style={{bottom:"-20px",maxWidth:"240px",left:"75px",position:"absolute",width:"40%"}} src="/images/domi-img1.png"/>
							<img alt="" style={{bottom:"-80px",maxWidth:"300px",right:"-10px",position:"absolute",width:"50%"}} src="/images/dominos-bread1.png"/>
						</div>
					</div>
				</div>
			
				<div className="section" id="section3" ref={sec3} style={{"--left":"#0e1139","--i":3,"--right":"#141648"}}>
					<div className="leftSection">
						<div className="left_title">
							<p>Powered by advance</p>
							<img alt="" height="40px" src="/images/nasa-mobile-app.png" />
							<p>algorithm</p>
						</div>
						<Curve till={3}/>
						<h1>ABC 345</h1>
						<p className="left_p">We are the best web development company in the world</p>
						<div className="left_footer">
							<span>Comming Soon <b>&rarr;</b></span>
							<span className="skip">Skip</span>
						</div>
					</div>
					<div className="rightSection">
						<div className="img">
							<img alt="" src="/images/nasa-fitness-tracking-mobile-app.png" style={{right:"-20px",bottom:"-50px"}}/>
							<img alt="" src="/images/measure-total-body-weight-through-fitness-app.png" style={{width:"33%",right:"-60px",top:"-170px"}}/>
						</div>
					</div>
				</div>
				
				<div className="section" id="section2" ref={sec2} style={{"--left":"#4d27cd","--i":2,"--right":"#1b0361"}}>
					<div className="leftSection">
						<div className="left_title">
							<p>The Next Big</p>
							<h1>BlockChain</h1>
							<p>Revolution</p>
						</div>
						<Curve till={2}/>
						<h1>ABC 234</h1>
						<p className="left_p">We are the best web development company in the world</p>
						<div className="left_footer">
							<span>Comming Soon <b>&rarr;</b></span>
							<span className="skip">Skip</span>
						</div>
					</div>
					<div className="rightSection">
						<div className="img">
							<img alt="" src="/images/veme-blockchain-app-developed.png" style={{width:"35%",left:"80px",bottom:"-70px",position:"absolute"}}/>
							<img alt="" src="/images/veme-app-ui-design.png" style={{right:"50px",top:"-75px",position:"absolute"}}/>
						</div>
					</div>
				</div>
				
				<div className="section" id="section1" ref={sec1} style={{"--left":"#6111a5","--i":1,"--right":"#cdcdcd"}}>
					<div className="leftSection" >
						<div className="left_title">
							<p>&nbsp;</p>
							<h1>25M+ Downloads</h1>
							<p>on appstore & google playstore</p>
						</div>
						<Curve till={1}/>
						<div className="left_img">
							<img alt="" src="/images/world-communication-awards-for-best-digital-experience.png"/>
						</div>
						<h1>ABC 123</h1>
						<p className="left_p">We are the best web development company in the world</p>
						<div className="left_footer">
							<span>View Case Study <b>&rarr;</b></span>
							<span className="skip">Skip</span>
						</div>
					</div>
					<div className="rightSection">
						<div className="img">
							<img alt="" src="/images/nexgtv-entertainment-mobile-app-development.png" style={{position:"relative",right:"-25px"}}/>
							<img alt="" src="/images/nexgtv-mobile-app-ui-design.png"/>
						</div>
					</div>
				</div>
				
				
			</div>
		</div>
	);
}

export default App;