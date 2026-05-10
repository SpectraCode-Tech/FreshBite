interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  stars: number;
}

const testimonialData: TestimonialItem[] = [
  {
    id: 1,
    name: "Tunde Adenuga",
    role: "Regular Customer",
    text: "The Amala is so soft and smooth, exactly how it's done back home. The Ewedu and Gbegiri mix was spot on. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=tunde",
    stars: 5,
  },
  {
    id: 2,
    name: "Chioma Okoro",
    role: "Food Critic",
    text: "The Jollof and Fried rice combo with that grilled turkey? Perfection. The smokey flavor of the Jollof is 10/10.",
    avatar: "https://i.pravatar.cc/150?u=chioma",
    stars: 5,
  },
  {
    id: 3,
    name: "Ibrahim Musa",
    role: "Verified Buyer",
    text: "Their Semo is well-pounded and the Egusi soup is loaded with stockfish and obstacles. It's proper 'man-size' portions too.",
    avatar: "https://i.pravatar.cc/150?u=ibrahim",
    stars: 5,
  },
  {
    id: 4,
    name: "Blessing Akpan",
    role: "Office Manager",
    text: "We ordered the Jollof and Chicken for our entire team. The delivery was fast and the food was still steaming hot when it arrived!",
    avatar: "https://i.pravatar.cc/150?u=blessing",
    stars: 5,
  },
  {
    id: 5,
    name: "Oluwaseun G.",
    role: "Daily Diner",
    text: "The Fried Rice is actually fried, not just boiled and colored. And that Turkey? Juicy and well-seasoned to the bone.",
    avatar: "https://i.pravatar.cc/150?u=seun",
    stars: 4,
  },
  {
    id: 6,
    name: "Anita Bello",
    role: "Weekend Regular",
    text: "I love their Eba—no lumps at all. It's hard to find a place that delivers swallows this well without them getting cold or hard.",
    avatar: "https://i.pravatar.cc/150?u=anita",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            Real Taste, Real Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See why hundreds of people trust Fresh Bite for their daily Amala,
            Jollof, and hearty African meals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < item.stars ? "text-orange-500" : "text-gray-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 grow">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <div className="relative">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-base leading-tight">
                    {item.name}
                  </p>
                  <p className="text-orange-600 text-xs font-semibold uppercase tracking-wider mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
