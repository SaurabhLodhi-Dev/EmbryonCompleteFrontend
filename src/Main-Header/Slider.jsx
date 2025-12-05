import { useEffect } from "react";
import "../Main-Header/slideshow.js";
import "../index.css";

function Slider() {
  useEffect(() => {
    const el = document.querySelector(".slideshow");

    if (el) {
      new window.Slideshow(el);
    }
  }, []);

  return (
    <section className="my_hero_banner">
        <div className="my_main_banner">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-10">
                        <div className="banner_text_my">
                           <h1>WE ARE…</h1>
                           <h2>Surrogacy in Ukraine</h2>                                                      
                        </div>                        
                    </div>
                </div>
            </div>
        </div>

 

    <div className="sub_section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                <div className="sub_section_text">
                    <h3>Surrogacy Programs <span>for ______ Couples</span></h3>
                   <p>Embryon Fertility proudly supports intended parents from Germany and across Europe with transparent surrogacy and egg donation programs in Ukraine.</p>
                   
                    <div className="mybutton">
                        <a href="#" className="">Book Your Free Consultation</a>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div className="about_ira">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="ira_about_image_box">
                    <div className="image_about">
                        <img src="/assets/about-img.webp" className="img-fluid" alt="" />
                    </div>
                    <div className="image-round">
                    <img src="/assets/circle-text.webp" className="img-fluid rotate-infinite-2" alt="" />
                    <img src="/assets/star.webp" className="img-fluid tg-chose-3-star" alt="" />
                    </div>
                    </div>                    
                </div>
                <div className="col-lg-6">
                    <div className="ira_about_text">
                       <h3>Your Dream of Parenthood <span>Made Possible in Ukraine</span></h3>
                       <p>Every journey to parenthood is unique — and so is ours.</p>
                       <p>With 30+ years of experience, Embryon Fertility delivers comprehensive surrogacy, egg donation, and IVF programs tailored to your values, health, and hopes.</p>
                       <p>We combine advanced reproductive medicine with genuine emotional support, ensuring your fertility journey is safe, transparent, and deeply personal.</p>
                       <h4>Transparent pricing and reporting — no hidden fees, ever.</h4>
                      
                        
                         
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="why_choose">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h3>Why Families <span>Choose Embryon Fertility</span></h3>
                    <div className="why-box">
                        <div className="why-icon">
                             <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="why-content">                            
                            <p>American Owned & Managed</p>
                        </div>
                    </div>
                    <div className="why-box">
                        <div className="why-icon">
                             <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="why-content">                            
                            <p>Ukrainian Ministry of Health License AG598678</p>
                        </div>
                    </div>
                    <div className="why-box">
                        <div className="why-icon">
                             <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="why-content">                            
                            <p>30+ Years of Experience</p>
                        </div>
                    </div>
                    <div className="why-box">
                        <div className="why-icon">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="why-content">                            
                            <p>Surrogate Support Team with Personal Surrogacy Experience</p>
                        </div>
                    </div>
                    <div className="why-box">
                        <div className="why-icon">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="why-content">                            
                            <p>±95% Live Birth Rate</p>
                        </div>
                    </div>
                     <div className="why-box">
                        <div className="why-icon">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="why-content">                            
                            <p>Lower Costs — No Agency Fees</p>
                        </div>
                    </div>
                    <div className="why-box">
                        <div className="why-icon">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="why-content">                            
                            <p>Largest Egg & Sperm Cryobank in Ukraine</p>
                        </div>
                    </div>
                    <div className="why-box">
                        <div className="why-icon">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="why-content">                            
                            <p>Top 5% of Egg Donors & Surrogates</p>
                        </div>
                    </div>
                    <div className="why-box">
                        <div className="why-icon">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="why-content">                            
                            <p>No Waiting Period — All Candidates Prequalified</p>
                        </div>                        
                    </div>
                     <div className="why-box">
                        <div className="why-icon">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div className="why-content">                            
                            <p>Legal Partnerships with Leading _______Family Law Firms</p>
                        </div>                        
                    </div>
                </div>
                <div className="col-lg-6">
                <p>At Embryon Fertility, we understand that many couples hesitate to begin their journey abroad because they fear losing control or not being fully informed.</p>
                    <p>That’s why we’ve built a unique model — an international team within a licensed Ukrainian fertility clinic.</p>
                    <p>Acting as your direct representatives inside the process, we safeguard your interests, ensure transparency at every stage, and bridge cultural and communication gaps.</p>
                    <p>Our Western background allows us to stand beside you — not above you — so you feel supported, informed, and in control from your first consultation to your baby’s birth.</p>
                    <div className="my_video mt-4">
                        <iframe 
                            width="100%" 
                            height="348px" 
                            src="https://www.youtube.com/embed/tPASiikd6AY?autoplay=1" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                   </div>                   
                </div>
            </div>
        </div>
    </div>

    <div className="affordable">
       <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
                <h3>About <span>Embryon Fertility</span></h3>
                <p>Established in 1994, Embryon Fertility was Ukraine’s first fertility clinic and an early leader in IVF innovation.</p>
                <p>Over the years, we’ve proudly helped more than 5,000 families achieve their dream of parenthood through safe and ethical surrogacy and egg donation programs.</p>
            </div>
        </div>
        <div className="row mt-5 align-items-center">
            <div className="col-lg-6">
                <div className="fertility-image">
                    <img src="/assets/embryon-fertility.webp" alt=""  className="img-fluid"/>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="fertility-content">
                <h4>Head of the IVF Unit at Embryon Fertility</h4>
                 <div className="doc_box mt-3 mb-3">
                                <h5>Dr. Vira Sirenko</h5>
                                <p>Gynecologist-Endocrinologist and Reproductive Specialist with over 34 years of experience.</p>
                                <p>Dr. Sirenko has helped thousands of couples achieve successful pregnancies through advanced fertility treatments and personalized care.</p>
                            </div>                    
                       
                       <p>We maintain uncompromising standards, accepting only the top 5% of candidates to ensure safety, ethics, and care beyond comparison.</p>
                       <div className="mybutton">
                        <a href="#" className="">Meet Our Accomplished Egg Donors</a>
                        </div>                
                </div>
            </div>
        </div>
       </div>
    </div>

    <div className="affordable-surrogacy">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h3>All-Inclusive & Affordable Surrogacy <span>Program in Ukraine — Like No Other</span></h3>
                <p>Our Serenity Program covers every detail — from matching and medical care to legal guidance and post-birth support.</p>
                <p>Our five-step All Inclusive Serenity Surrogacy Programs offers clarity, simplicity, and peace of mind.</p>
                <p>We carefully match intended parents with experienced surrogates and provide complete emotional, and medical support every step of the way.</p>
                <div className="mybutton">
                    <a href="#" className="">Explore surrogacy costs in Ukraine</a>
                 </div> 
            </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12">
                    <div className="guide_download">
                         <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="program_image">
                               <img src="/assets/Serenity Surrogacy Programs E-Guide.webp" alt="" className="img-fluid"/>
                            </div>                            
                        </div>
                        <div className="col-lg-7">
                          <div className="program-guide">
                            <h3>Embryon’s Comprehensive Care & <span>Support for Every Surrogate Mother</span></h3>
                            <p className="mt-3">We ensure every surrogate receives exceptional medical, emotional, and logistical care throughout her journey.</p>
                            <p>Trusted and ethical surrogacy services — many surrogates return for a second journey due to our compassionate care, informed consent process, and unwavering commitment to their health, rights, and safety.</p>
                            <div className="mybutton">
                                <a href="/assets/Embryon_Serenity_Surrogacy_Infosheet.pdf" target="_blank" className=""><i class="fa-regular fa-file-lines"></i> Serenity Surrogacy Program Guide</a>
                            </div> 
                          </div>
                        </div>                        
                    </div>
                    </div>                   
                </div>
            </div>
        </div>
    </div>

    <div className="testimonials">
        <div className="container">
          
            <div className="row mt-5 align-items-center">
                <div className="col-lg-6">
                    <h3>What Our <span>Surrogates Say</span></h3>
                    <p>Every surrogate’s story is unique. Their experiences highlight the dedication, support, and care we provide from the very start to the final milestone.</p>
                </div>
                <div className="col-lg-6">
                    <div class="item">
                            <div className="testimonial-box">
                                <div className="testimonial-content">
                                    <div className="content-star">
                                        <ul>
                                            <li className="active"><i class="fas fa-star"></i></li>
                                            <li className="active"><i class="fas fa-star"></i></li>
                                            <li className="active"><i class="fas fa-star"></i></li>
                                            <li className="active"><i class="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>                                    
                                    <p>“Being impressed by a surrogacy program is one thing.<br/>
                                    But being so inspired that you choose to become a surrogate yourself — that’s truly life-changing.”
                                    </p>
                                </div>
                                <div className="testimonial-man">
                                    <div className="testimonial-man-image">
                                        <img src="/assets/user.png" alt="Customer" />
                                    </div>
                                    <div className="testimonial-man-content">
                                        <h5>Yulia UA</h5>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    <div className="donor-database">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <h3>Explore Our Premium <span>Ukrainian Egg Donor Database</span></h3>
                    <p>Create your free account to browse prequalified Ukrainian egg donors and begin your parenthood journey with confidence.</p>
                    <div className="mybutton">
                        <a href="#" target="_blank" className="">Explore Egg Donation Programs in Ukraine </a>
                    </div>
                    <h4 className="mt-5">Find Your Perfect Match</h4> 
                    <div className="mybutton mybutton_login">
                        <a href="#" target="_blank" className="">Login</a>
                        <span>or</span>
                        <a href="#" target="_blank" className="">Create Account</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="about_video">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                   <div className="Laboratory_img">
                        <img src="/assets/embryology-laboratory.webp" alt="" className="img-fluid" />
                   </div>
                </div> 
                <div className="col-lg-6">
                   <div className="my_content">
                       <h3>Inside Our IVF <span>Embryology Laboratory</span></h3>
                       <p>Behind every successful birth is science and precision.</p>
                       <p>Our lab uses world-class technology to nurture each embryo under optimal conditions for development and healthy pregnancy..</p>
                       <p>For efficiency and success, we follow a single-embryo transfer policy to maximize the chance of a healthy pregnancy and reduce the risks of a multiple pregnancy.</p>                       
                   </div>
                </div>                               
            </div>
        </div>
    </div> 
    <div className="trusted" >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">                    
                    <div className="trusted_box">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Trusted by Over <span>5,000 Families</span></h3>
                                <p>Through rigorous screening and transparent matching, intended parents connect with qualified, preapproved surrogates and donors.</p>
                                <p>From your first consultation to your baby’s arrival, our dedicated care team is with you every step of the way.</p>
                            </div>
                            <div className="col-lg-6">
                                <h3>From Our <span>Intended Parents</span></h3>
                                <p>“Our journey with Embryon was seamless and heartfelt.</p>
                                <p>Their team combined expertise with compassion — we always felt supported and understood. Their agreements are equitable and legally solid.</p>
                                <p>We’re forever grateful for the family they helped us create.”</p>
                                <span className="author">AK Germany</span>
                            </div>                        
                        </div>             
                      
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="connects_families">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="connects_families_content text-center">
                        <h3>Technology That <span>Connects Families</span></h3>
                        <p>Embryon Fertility is the first fertility clinic in Ukraine to implement the ‘Orchid Journey Management System’.</p>
                        <p>Orchid provides a tailored technology solution for surrogacy and egg donation clinics, ensuring secure management throughout the entire process, from initial contact to birth and beyond, while streamlining each step for a smooth and stress-free experience.</p>                         
                    </div>
                    <div className="connects_families_img mt-5">
                        <img src="/assets/connects-families.webp" alt="" className="img-fluid"/>
                    </div>
                </div>                
            </div>
        </div>
    </div>

    <div className="exclusive_egg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="guide_download">
                         <div className="row align-items-center">
                            <div className="col-lg-7">
                            <div className="program-guide">
                                <h3>Exclusive Egg Donor <span>Database & Cryobank</span></h3>
                                <p className="mt-3">Our egg donor database includes Ukraine’s top 5% of prequalified candidates.</p>
                                <p>Each donor completes full genetic, health, and psychological screening for optimal outcomes.</p>
                                <p>We offer both fresh and frozen oocytes (eggs) to ensure flexibility and the highest chance of success.</p>
                                <p>Trusted, ethical, and expertly managed — designed to give every family the best start.</p>
                                <div className="mybutton">
                                    {/* <a href="src/assets/Embryon_Serenity_Surrogacy_Infosheet.pdf" target="_blank" className=""><i class="fa-regular fa-file-lines"></i> Your Guide to Choosing an Egg Donor</a> */}
                               <a href="/assets/Embryon_Serenity_Surrogacy_Infosheet.pdf" target="_blank" className="">
   <i class="fa-regular fa-file-lines"></i> Your Guide to Choosing an Egg Donor
</a>

                                </div> 
                            </div>
                        </div> 

                        <div className="col-lg-5">
                            <div className="program_image">
                               <img src="/assets/Serenity Surrogacy Programs E-Guide.webp" alt="" className="img-fluid"/>
                            </div>                            
                        </div>                                               
                    </div>
                    </div>                   
                </div>
            </div>
        </div>
    </div>

    <div className="my_faq">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="guidance_box">
                         <h3>Legal Guidance for <span>German Intended Parents</span></h3>
                         <p className="mt-3">Our collaboration with _________’s leading family law firms ensures full legal compliance and recognition for your surrogacy journey abroad.</p>
                    </div> 
                    <div className="guidance_video_box text-center">
                             <iframe 
                            width="100%" 
                            height="400px" 
                            src="https://www.youtube.com/embed/S-8soYF_bhc?autoplay=1" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq_my_box">
                            <h3>Surrogacy in Ukraine — Answers to the <span>Questions Intended Parents Ask Most</span></h3>
                    <p className="mt-3">Discover clear, honest answers about surrogacy in Ukraine — from legal rights to program costs — to help you begin your parenthood journey with confidence.</p>
                    <div className="faq_box mt-5">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h3 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Is surrogacy legal in Ukraine for international couples?
                                </button>
                                </h3>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Yes. Surrogacy is fully legal in Ukraine for married heterosexual couples, including foreign citizens. The law recognizes intended parents as the baby’s legal parents from birth, and Embryon Fertility operates under full Ministry of Health licensing for safe, ethical programs.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How much does surrogacy cost in Ukraine?
                                </button>
                                </h3>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Surrogacy in Ukraine typically costs €54,500 for an all-inclusive program. Embryon Fertility offers transparent pricing with no agency fees, covering medical care, legal support, and surrogate compensation.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h3 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What makes Embryon Fertility’s surrogacy program unique?
                                </button>
                                </h3>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Embryon Fertility’s all-inclusive program combines medical, legal, and emotional support. With 30+ years of experience and a ±95% live birth rate, our team provides transparent, compassionate, and results-driven care.
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <div className="surrogacy_journey">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                   <div className="journey_box">
                       <div className="row">
                        <div className="col-lg-6">
                            <h3>Ready to Begin <span>Your Surrogacy Journey?</span></h3>
                         <p className="mt-3">Start with a free, private consultation with our Surrogacy Specialists</p>
                         <p>We’ll answer your questions, explain program options, and help you take the first step toward building your family.</p>
                         <div className="my_ca_box mt-5">
                            <h4>Every family’s journey begins with trust. Let our experts guide yours</h4>
                            <div className="mybutton">
                                <a href="#" className="">Book Your Free Consultation</a>
                            </div>
                         </div>
                        </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact_us">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="contact_content">
                        <h3>Ready to <span>See More?</span></h3>
                        <p className="mt-3">Explore detailed information on pricing, clinic facilities, fertility team, and success stories.</p>
                        <div className="mybutton">
                                <a href="#" className="">Discover More</a>
                            </div>
                        <img src="/assets/contact-img.webp" alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact_box">
                          <div className="row">
                            <div className="col-lg-6">
                                <div className="input_box">
                                    <label for="" className="form-label">First Name</label>
                                    <input type="email" className="form-control" id="" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input_box">
                                    <label for="" className="form-label">Last Name</label>
                                    <input type="email" className="form-control" id="" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input_box">
                                    <label for="" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input_box">
                                    <label for="" className="form-label">Phone</label>
                                    <input type="email" className="form-control" id="" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input_box">
                                    <label for="" className="form-label">I would like more information</label>
                                    <select className="form-select">
                                        <option selected>---Select---</option>
                                        <option value="1">Egg Donation</option>
                                        <option value="2">Egg & Sperm Donation</option>
                                        <option value="3">Surrogacy + egg donor</option>
                                        <option value="3">Surrogacy w/ FET</option>
                                        <option value="3">Surrogacy w/ My eggs</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input_box">
                                    <label for="" className="form-label">Preferred method of contact</label>
                                    <select className="form-select">
                                        <option selected>---Select---</option>
                                        <option value="1">Zoom Consult</option>
                                        <option value="2">Webex</option>
                                        <option value="3">Google Meet</option>
                                        <option value="3">WhatsApp</option>
                                        <option value="3">Email</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input_box">
                                    <label for="" className="form-label">City</label>
                                    <input type="email" className="form-control" id="" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input_box">
                                    <label for="" className="form-label">State</label>
                                    <input type="email" className="form-control" id="" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="input_box">
                                    <label for="" className="form-label">Country</label>
                                    <input type="email" className="form-control" id="" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="input_box">
                                    <label for="" className="form-label">Enter Your Message Here</label>
                                     <textarea class="form-control" id=""></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <span>Licensed by the Ukrainian Ministry of Health | Trusted by ______ Families | 💜 5,000+ Successful Births</span>
                            </div>
                            <div className="mybutton">
                                <a href="#" className="">Submit</a>
                            </div>

                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="my_footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">                    
                    <div className="footer_conct_details">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="conct_details_box">
                                    <div className="conct_details_icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="conct_details_text">
                                        <h5>Address</h5>
                                        <a href="">Zahorivska St, 1,  City: Kyiv, Ukraine</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="conct_details_box">
                                    <div className="conct_details_icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="conct_details_text">
                                        <h5>Hotline Number</h5>
                                        <a href="tel:+38020975972636">+380 20975972636</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="conct_details_box">
                                    <div className="conct_details_icon">
                                        <i class="fa-solid fa-tty"></i>
                                    </div>
                                    <div className="conct_details_text">
                                        <h5>Toll-Free Number</h5>
                                        <a href="tel:+1(866)20446-6222">+1 (866) 446-6222</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3">
                                <div className="conct_details_box">
                                    <div className="conct_details_icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="conct_details_text">
                                        <h5>Email</h5>
                                        <a href="mailto:letstalk@embryon-ukraine.com">letstalk@embryon-ukraine.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_menu">
                        <div className="row">
                            <div className="col-lg-5">
                                <p>© 2012–2025 Embryon Fertility LLC™ — All Rights Reserve</p>
                            </div>
                            <div className="col-lg-2">
                                <a href="#">Privacy Policy</a>
                            </div>
                            <div className="col-lg-5">
                                <p>Powered by <a href="https://monkoutsourcing.com/" target="_blank">Monk Outsourcing</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   <div className="stage">
  <div className="mariposa">
    <div className="mariposa-turn">
      <div className="mariposa-flutter"></div>
    </div>
  </div>

  <div className="mariposa">
    <div className="mariposa-turn">
      <div className="mariposa-flutter"></div>
    </div>
  </div>

  <div className="mariposa">
    <div className="mariposa-turn">
      <div className="mariposa-flutter"></div>
    </div>
  </div>
</div> 

   <div className="stage_2">
  <div className="mariposa">
    <div className="mariposa-turn">
      <div className="mariposa-flutter"></div>
    </div>
  </div>

  <div className="mariposa">
    <div className="mariposa-turn">
      <div className="mariposa-flutter"></div>
    </div>
  </div>

  <div className="mariposa">
    <div className="mariposa-turn">
      <div className="mariposa-flutter"></div>
    </div>
  </div>
</div> 
    

</section>
  );
}

export default Slider;