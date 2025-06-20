import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="p-[20px] sm:px-[60px] lg:px-[100px] py-[50px] bg-white rounded-t-[50px]">
        <div className="border-b-[1px] border-b-[#ddd]">
          <div className="flex flex-col sm:flex-row justify-between items-center pb-[30px]">
            <div className="text-[12px] lg:text-[14px] font-[300] text-[#505050] mb-[20px] sm:mb-0">
              © 2025 IoT Systems. All rights reserved.
            </div>
            <Link href="/">
              <img
                src="/logo.jpg"
                alt="Home"
                title="Home"
                className="w-[120px] sm:w-[150px] lg:w-[200px] h-auto mb-[20px] object-cover"
              />
            </Link>
            <div>

              <Link title="Product" href="#" className="text-[12px] sm:text-[14px] lg:text-[16px] font-[600] text-[#505050] px-[20px] py-[3px] rounded-[8px]">Product</Link>
              <Link title="Team" href="/team" className="text-[12px] sm:text-[14px] lg:text-[16px] font-[600] text-[#505050] px-[20px] py-[3px] rounded-[8px]">Team</Link>
              <Link title="Contact" href="/contact" className="text-[12px] sm:text-[14px] lg:text-[16px] font-[600] text-[#505050] px-[20px] py-[3px] rounded-[8px]">Contact</Link>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between mt-[30px] sm:mt-[50px]">
          <div className="w-[800px]">
            <div className="text-[8px] sm:text-[12px] lg:text-[14px] font-[300] text-[#505050]">This website is a student project developed as part of the Physics for Information Technology course. It is intended for educational purposes only and not for commercial use.</div>
            <div className="text-[8px] sm:text-[12px] lg:text-[14px] font-[300] text-[#505050]">This open source can be found at <a href="https://github.com/trngnneeee/IoT-Web" target="blank" className="text-[8px] sm:text-[12px] lg:text-[14px] font-[600] underline">IoT Website</a></div>
          </div>
          <div>
            <Link title="Privacy" href="#" className="text-[12px] sm:text-[14px] lg:text-[16px] font-[600] text-[#505050] px-[20px] py-[3px] rounded-[8px]">Privacy</Link>
            <Link title="License" href="#" className="text-[12px] sm:text-[14px] lg:text-[16px] font-[600] text-[#505050] px-[20px] py-[3px] rounded-[8px]">License</Link>
          </div>
        </div>
      </div>
    </>
  );
}