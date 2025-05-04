"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";  


const faqs = [
  {
    question: "Can I personalize the design of my Homely home?",
    answer: "Yes, you can customize your Homely home’s layout, materials, and finishes during the planning phase.",
  },
  {
    question: "Where can I find Homely homes?",
    answer: "Homely homes are available in select cities and expanding nationwide. Visit our site to explore locations.",
  },
  {
    question: "What steps are involved in buying a Homely home?",
    answer: "From consultation to customization, financing, and final delivery, our process is seamless and guided.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Images */}
      <div className="grid grid-cols-2 gap-4">
        <img src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded-xl object-cover w-full h-60" />
        <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded-xl object-cover w-full h-60" />
        <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded-xl object-cover w-full h-60 col-span-2" />
      </div>

      {/* FAQ */}
      <div className="">
        <h2 className="text-sm font-semibold text-green-600">FAQs</h2>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Everything about Homely homes
        </h1>
        <p className="text-gray-600 mb-6 ">
          We know that buying, selling, or investing in real estate can be overwhelming. Here are some frequently asked questions to help guide you through the process.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl px-6 py-4 cursor-pointer transition-all"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{index + 1}. {faq.question}</p>
                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
