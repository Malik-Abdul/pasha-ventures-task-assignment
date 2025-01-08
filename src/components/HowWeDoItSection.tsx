import Image from "next/image";

const HowWeDoItSection = () => {
  return (
    <section className="bg-light-pink text-black py-20 text-center relative">
      <div className="space-y-8">
        <div className="mx-auto w-[472px] h-[34px] font-poppins font-bold text-[45px] leading-[32px] tracking-[-0.02em] text-white">
          How We Do it
        </div>

        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sharing Expertise */}
            <div className="relative flex flex-col items-center">
              <Image
                className="dark:invert mb-4" // mb-4 for spacing between image and heading
                src="/Group_596.svg"
                alt="Sharing Expertise"
                width={60}
                height={60}
                priority
              />
              <h2 className="font-poppins font-extrabold text-5xl leading-[55px] text-center tracking-[-0.02em] uppercase text-[#3B3E48]">
                Sharing Expertise
              </h2>
              <p className="text-gray-600 mt-[30px]">
                We give you access to insights from our experts in operations,
                supply chain, retail, and marketing.
              </p>
            </div>

            {/* Accelerating Growth */}
            <div className="relative flex flex-col items-center">
              <Image
                className="dark:invert mb-4" // mb-4 for spacing between image and heading
                src="/Group_597.svg"
                alt="Accelerating Growth"
                width={60}
                height={60}
                priority
              />
              <h2 className="font-poppins font-extrabold text-5xl leading-[55px] text-center tracking-[-0.02em] uppercase text-[#3B3E48]">
                Accelerating Growth
              </h2>
              <p className="text-gray-600 mt-[30px]">
                Through our multi-channel, data-driven approach, we help you
                reach new markets and customers.
              </p>
            </div>

            {/* Promoting Teamwork */}
            <div className="relative flex flex-col items-center">
              <Image
                className="dark:invert mb-4" // mb-4 for spacing between image and heading
                src="/Group_598.svg"
                alt="Promoting Teamwork"
                width={60}
                height={60}
                priority
              />
              <h2 className="font-poppins font-extrabold text-5xl leading-[55px] text-center tracking-[-0.02em] uppercase text-[#3B3E48]">
                Promoting Teamwork
              </h2>
              <p className="text-gray-600 mt-[30px]">
                By leveraging our operational insights and your industry
                expertise, we'll build a world-class team that achieves
                excellent results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoItSection;
