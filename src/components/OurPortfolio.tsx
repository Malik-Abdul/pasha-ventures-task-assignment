import Image from "next/image";

const OurPortfolio = () => {
  return (
    <section className="bg-white text-black py-20 text-center relative">
      <div className="space-y-8">
        {/* Section Title */}
        <div className="mx-auto w-[472px] font-poppins font-bold text-[45px] leading-[32px] tracking-[-0.02em] text-[#CBCBCB]">
          Our Portfolio
        </div>

        <div className="mx-auto w-[802px] font-poppins font-bold text-[70px] leading-[80px] tracking-[-0.02em] text-[#3B3E48]">
          Explore our brands in transformation
        </div>

        <div className="mx-auto w-[728px] font-poppins font-normal text-[28px] leading-[36px] tracking-[-0.02em] text-[#3B3E48]">
          Please add new text. This is from ‘Branded’ page. Dive in to see how
          our brands are growing. We’re just getting started.
        </div>

        {/* Images Section */}
        <div className="flex justify-center gap-8 px-8">
          {/* Image 1 */}
          <div className="text-center">
            <Image
              className="rounded-md"
              src="/Rectangle_191.jpg"
              alt="Rectangle 191"
              width={375}
              height={591}
              priority
            />
            <div className="font-poppins font-extrabold text-[45px] leading-[60px] tracking-[-0.02em]">
              Baby AND <br /> TODDLER
            </div>
            <p className="mt-2 font-poppins font-normal text-[28px] leading-[36px] tracking-[-0.02em] text-[#3B3E48]">
              We'll extend your reach on e-commerce platforms, capturing new
              audiences and increasing sales.
            </p>
          </div>

          {/* Image 2 */}
          <div className="text-center">
            <Image
              className="rounded-md"
              src="/Rectangle_192.jpg"
              alt="Rectangle 192"
              width={375}
              height={591}
              priority
            />

            <div className="font-poppins font-extrabold text-[45px] leading-[60px] tracking-[-0.02em]">
              Pets
            </div>
            <p className="mt-2 font-poppins font-normal text-[28px] leading-[36px] tracking-[-0.02em] text-[#3B3E48]">
              We'll extend your reach on e-commerce platforms, capturing new
              audiences and increasing sales.
            </p>
          </div>

          {/* Image 3 */}
          <div className="text-center">
            <Image
              className="rounded-md"
              src="/Rectangle_193.jpg"
              alt="Rectangle 193"
              width={375}
              height={591}
              priority
            />
            <h1 className="mt-4 font-poppins font-extrabold text-[60px] leading-[70px] tracking-[-0.02em] uppercase text-[#3B3E48]"></h1>
            <div className="font-poppins font-extrabold text-[45px] leading-[60px] tracking-[-0.02em]">
              Health and <br /> Personal Care
            </div>
            <p className="mt-2 font-poppins font-normal text-[28px] leading-[36px] tracking-[-0.02em] text-[#3B3E48]">
              Our experts help you refine and enhance your product offer,
              integrating new technologies and innovations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
