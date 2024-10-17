import PricingComponent from "@/components/PricingComponent";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFF]">
      <main className="w-full max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#293356]">
          Simple, traffic-based pricing
        </h1>
        <p className="text-center mb-12 text-[#858FAD]">
          Sign-up for our 30-day trial. No credit card required.
        </p>
        <PricingComponent />
      </main>
    </div>
  );
}
