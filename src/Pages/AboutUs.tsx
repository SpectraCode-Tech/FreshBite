import { Link } from "react-router-dom";
import aboutImg from "../assets/about-us.jpeg";

const AboutUs = () => {
  return (
    <section className="bg-white">
<div 
      className="relative py-20 bg-orange-50 bg-cover bg-center"
      style={{ 
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
        backgroundImage: `url(${aboutImg})` 
      }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <nav className="mb-4" aria-label="Breadcrumb">
          <ol className="flex justify-center items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary/80">
            <li>
              <Link to="/" className="hover:text-orange-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400" aria-hidden="true">/</li>
            <li className="text-gray-300">About Us</li>
          </ol>
        </nav>
        
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">
          Our <span className="text-primary italic">Roots.</span>
        </h1>
      </div>
    </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Chef cooking"
                className="w-full h-150 object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-orange-100 hidden md:block">
              <p className="text-4xl font-black text-primary">10k+</p>
              <p className="text-gray-500 font-bold uppercase text-xs tracking-tighter">
                Meals Delivered
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Bringing the heat of the <br />
              <span className="text-primary">African kitchen</span> to you.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              FreshBite was born in a small kitchen with a big mission: to prove
              that "fast food" can still be "soul food." We don't cut corners on
              our Jollof, and we definitely don't rush our Egusi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Fresh Ingredients",
                  desc: "Sourced daily from local markets.",
                },
                {
                  title: "Fast Delivery",
                  desc: "Hot meals at your door in under 30 mins.",
                },
                {
                  title: "Authentic Recipes",
                  desc: "No fusion, just tradition.",
                },
                {
                  title: "Eco-Packaging",
                  desc: "Good for you, better for the earth.",
                },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-100 shrink-0 mt-1 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Market Sourcing",
                text: "Every morning at 5 AM, our team selects the freshest habaneros, meats, and vegetables.",
              },
              {
                step: "02",
                title: "Slow Cooking",
                text: "We use traditional wood-fire and steam methods to ensure flavors are locked in deep.",
              },
              {
                step: "03",
                title: "Express Dispatch",
                text: "Once ready, our riders are pinged. Your food stays in heat-insulated bags until arrival.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <span className="text-6xl font-black text-primary/20 absolute top-4 right-8 group-hover:text-primary/40 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 text-center">
        <h3 className="text-3xl font-bold mb-8">
          Ready to taste the difference?
        </h3>
        <Link
          to="/menu"
          className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-orange-700 transition-all hover:px-12"
        >
          Explore the Menu
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
