import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How long does delivery usually take?",
    answer:
      "Our average delivery time is between 25–40 minutes depending on your location and traffic conditions.",
  },
  {
    question: "Is there a minimum order amount?",
    answer:
      "Yes, the minimum order for delivery is $15.00. Pickup orders have no minimum requirement.",
  },
  {
    question: "Do you offer gluten-free or vegan options?",
    answer:
      "Absolutely! You can use the 'Filters' on our menu page to toggle Vegan, Vegetarian, and Gluten-Free options.",
  },
  {
    question: "Can I track my order in real-time?",
    answer:
      "Once your order is confirmed, you will receive a tracking link via SMS and email to follow your meal's journey.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // Responsive padding: py-12 on mobile, py-20 on desktop
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about FreshBite.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`group border rounded-xl transition-all duration-300 ${
                  isOpen
                    ? "border-orange-500 bg-white shadow-md"
                    : "border-gray-200 bg-white hover:border-orange-300 hover:shadow-sm"
                }`}
              >
                <button
                  className="w-full flex justify-between cursor-pointer items-center p-5 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-lg transition-colors ${
                      isOpen ? "text-orange-600" : "text-gray-800"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Enhanced Icon: Circular background for the arrow */}
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-orange-500 text-white rotate-180"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-50 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed">
                    <div className="w-full h-px bg-gray-100 mb-4" />
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
