export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center max-w-7xl mx-auto">
          <div className="px-8 lg:px-16 py-24 lg:py-32">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 opacity-30">
                <svg viewBox="0 0 100 100" className="text-forest-500">
                  <path d="M50 10 L30 40 L50 35 L40 70 L60 40 L50 45 Z" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream-100 mb-6 tracking-tight leading-tight">
              DISCOVER
              <span className="block mt-2">YOUR ESSENCE</span>
            </h1>

            <p className="text-cream-300 text-lg mb-10 leading-relaxed max-w-lg">
              Pure Rituals for Radiant Living
            </p>

            <button className="bg-forest-500 hover:bg-forest-600 text-cream-50 px-10 py-4 rounded-full font-semibold tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl">
              SHOP NOW
            </button>
          </div>

          <div className="relative h-[600px] lg:h-screen">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/80"></div>
            <img
              src="https://images.pexels.com/photos/5426397/pexels-photo-5426397.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="SHKL Products"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-16 left-8 opacity-40">
              <div className="w-32 h-32">
                <svg viewBox="0 0 100 100" className="text-forest-500">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
                  <path d="M50 20 Q60 40 50 60 Q40 40 50 20" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
