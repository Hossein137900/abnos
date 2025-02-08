'use client'
import { useState } from "react";
import { useLanguage } from "./LanguageContext";

const quizData = {
  en: {
    title: "Interactive Quiz: Test Your Knowledge About Tempered Glass",
    questions: [
      {
        question: "How is tempered glass manufactured?",
        options: [
          "Through rapid cooling after heating",
          "By mixing metals into glass",
          "Using plastic materials",
          "Through high-pressure compression",
        ],
        answer: "Through rapid cooling after heating",
        explanation: "Tempered glass is created through a specialized thermal treatment process that involves heating and rapid cooling, making it 4-5 times stronger than regular glass."
      },
      {
        question: "What is the main characteristic of tempered glass?",
        options: [
          "Impact and heat resistance",
          "High flexibility",
          "Moisture absorption",
          "Higher light reflection",
        ],
        answer: "Impact and heat resistance",
        explanation: "Tempered glass offers superior strength and safety features, breaking into small, rounded pieces instead of sharp shards when shattered."
      },
      {
        question: "Where is tempered glass commonly used?",
        options: [
          "Building doors and windows",
          "Only in automotive industry",
          "Food packaging",
          "Medical equipment",
        ],
        answer: "Building doors and windows",
        explanation: "Tempered glass is widely used in construction, particularly for doors, windows, and safety barriers due to its strength and safety properties."
      },
    ]
  },
  fa: {
    title: "نمره  دانش خود را درباره شیشه سکوریت بیازمایید",
    questions: [
      {
        question: "شیشه سکوریت چگونه ساخته می‌شود؟",
        options: [
          "از طریق سرد شدن سریع بعد از گرمادهی",
          "با ترکیب فلزات در شیشه",
          "با استفاده از مواد پلاستیکی",
          "با فشرده‌سازی تحت فشار بالا",
        ],
        answer: "از طریق سرد شدن سریع بعد از گرمادهی",
        explanation: "شیشه سکوریت از طریق فرآیند حرارتی ویژه‌ای تولید می‌شود که شامل گرم کردن و سرد کردن سریع است و آن را ۴ تا ۵ برابر قوی‌تر از شیشه معمولی می‌کند."
      },
      {
        question: "ویژگی اصلی شیشه سکوریت چیست؟",
        options: [
          "مقاومت در برابر ضربه و حرارت",
          "قابلیت خم شدن بالا",
          "جذب رطوبت",
          "انعکاس نور بیشتر از شیشه معمولی",
        ],
        answer: "مقاومت در برابر ضربه و حرارت",
        explanation: "شیشه سکوریت دارای مقاومت و ایمنی بالاتری است و در صورت شکستن به قطعات کوچک و گرد تبدیل می‌شود."
      },
      {
        question: "در چه جاهایی از شیشه سکوریت استفاده می‌شود؟",
        options: [
          "درب و پنجره‌های ساختمان‌ها",
          "تنها در صنایع خودروسازی",
          "برای بسته‌بندی مواد غذایی",
          "در مصارف پزشکی",
        ],
        answer: "درب و پنجره‌های ساختمان‌ها",
        explanation: "شیشه سکوریت به طور گسترده در ساخت و ساز، به ویژه برای درب‌ها، پنجره‌ها و موانع ایمنی به دلیل استحکام و ایمنی بالا استفاده می‌شود."
      },
    ]
  }
};

export default function InteractiveQuiz() {
  const { state } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentLang = state.currentLang;
  const questions = quizData[currentLang].questions;

  const handleAnswerClick = (option: string) => {
    setSelectedAnswer(option);
    setShowExplanation(true);
    
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
  };

  return (
    <div className="max-w-2xl mx-auto  p-8 g mt-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#6FBDF5]">{quizData[currentLang].title}</h2>
        <div className="text-sm text-gray-500">
          {currentQuestion + 1} / {questions.length}
        </div>
      </div>

      {showResult ? (
        <div className="text-center">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-bold mb-4">
            {currentLang === 'en' ? 'Your Score:' : 'نمره شما:'} {score} / {questions.length}
          </h3>
          <button
            onClick={restartQuiz}
            className="bg-[#6FBDF5] text-white px-6 py-2 rounded-lg hover:bg-[#5CA8E0] transition-colors"
          >
            {currentLang === 'en' ? 'Try Again' : 'تلاش مجدد'}
          </button>
        </div>
      ) : (
        <div>
          <p className="text-lg font-semibold mb-6 text-gray-800">
            {questions[currentQuestion].question}
          </p>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`w-full text-right px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedAnswer === option
                    ? option === questions[currentQuestion].answer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700">
                {questions[currentQuestion].explanation}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
