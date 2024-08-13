"use client";
import React from "react";
// import ShootingStars from "@/components/ui/ShootingStars";
// import StarsBackground from "@/components/ui/StarsBg";
import Image from "next/image";
import '../css/Footer.css';


export default function Footer2() {
  return (
    <div className="h-fit rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <div className="relative w-full flex-col py-8 md:flex-row z-10 text-xl md:text-2xl md:leading-tight px-8 mx-auto tracking-tight font-medium flex items-center gap-2 md:gap-8">
            <div className="footer-cont">
                <div className="row1">
                    <div className="col1">
                        <div className="col11 col1-each title">
                            <Image src="/images/dct_logo.svg" alt="DCT Logo" width={100} height={100} className="mr-4"/>
                            <span className="title-name"> Pioneering Innovation <br /> with Smart Technology Solutions</span>
                        </div>
                        <div className="col12 col1-each  address">
                            <strong>Address</strong>: RAJEEV NAGAR, NEW DELHI <br />
                            INDIA - 110086
                        </div>
                        <div className="col13  col1-each linkedin">
                            <span className="find-heading">Find Us On</span> <br />
                            <a href="https://www.linkedin.com/company/data-culture-technolgies/" target="blank"> <Image src="/linked.svg" alt="LinkedIn" width={30} height={30} />
                            </a>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="each-service"><b>Our Services</b></div>
                        <div className="each-service">AI In Health</div>
                        <div className="each-service">Fintech</div>
                        <div className="each-service">Digital Marketing</div>
                        <div className="each-service">AI & ML Ops</div>
                    </div>
                </div>
                <div className="row2">
                    <div className="r2 c1"><p>&copy; 2024 DCT All rights reserved.</p></div>
                    <div className="r2 c2"><p>Made with ❤️ In India</p></div>
                </div>
            </div>
        </div>
      {/* <ShootingStars />
      <StarsBackground /> */}
    </div>
  );
}
