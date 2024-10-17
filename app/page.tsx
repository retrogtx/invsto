import PricingComponent from "@/components/PricingComponent";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFF] px-4 sm:px-6 py-8 sm:py-16">
      <main className="w-full max-w-[540px] relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-40px] sm:top-[-70px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145">
            <g fill="none" fillRule="evenodd" stroke="#CFD8EF">
              <circle cx="63" cy="82" r="62.5"/>
              <circle cx="105" cy="41" r="40.5"/>
            </g>
          </svg>
        </div>
        <h1 className="text-xl sm:text-3xl font-extrabold text-center mb-2 sm:mb-4 text-[#293356] relative z-10">
          Simple, traffic-based pricing
        </h1>
        <p className="text-sm sm:text-base text-center mb-8 sm:mb-12 text-[#858FAD] relative z-10 max-w-[200px] sm:max-w-none mx-auto">
          Sign-up for our 30-day trial.
          <br className="sm:hidden" /> No credit card required.
        </p>
        <PricingComponent />
      </main>
    </div>
  );
}
