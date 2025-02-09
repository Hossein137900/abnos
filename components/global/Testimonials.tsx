'use client'
import { useLanguage } from './LanguageContext';
interface testomenial {
  name: string;
  location: string;
  comment: string;
  rating: string ;
}


export default function Testimonials({ testimonials }: { testimonials: testomenial[] }) {
  const { state } = useLanguage();
  
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#6FBDF5] mb-12">
          {state.currentLang === 'en' ? 'Client Testimonials' : 'نظرات مشتریان'}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
              
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.comment}</p>
              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
                <span className="text-sm text-gray-500 ml-2">{testimonial.rating}/5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
