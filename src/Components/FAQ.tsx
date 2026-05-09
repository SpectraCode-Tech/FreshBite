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
    <section className="p-10 bg-orange-600">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-medium cursor-pointer text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
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
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-5 text-gray-600 border-t border-gray-100">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
