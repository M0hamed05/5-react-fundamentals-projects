import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}



function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

//notes
//You can reduce the number of props, by sending the innerHtml to the child component using child props<=!!!!!
//making the usual button not only self closing tag
//using the 'children' reversed key word in react to give child element access to the parent component html <=!!!Ps
//allows you to use it overall the application, with any content needed<=!!!!!!
/*
الخيار 1: متصفح VS Code المدمج "Simple Browser" (بدون إضافة أي ملحقات)
يتضمن VS Code متصفحاً محلياً بداخل التطبيق جاهزاً للاستخدام:

افتح قائمة الأوامر Command Palette بالضغط على Ctrl + Shift + P.

اكتب واختر Simple Browser: Show.

أدخل رابط السيرفر المحلي الخاص بمشروعك (مثل http://localhost:5173 لمشاريع Vite أو http://localhost:3000 لمشاريع CRA) ثم اضغط Enter.

قم بسحب النافذة المفتوحة إلى جانب الشاشة لتعرض الكود والتطبيق جنباً إلى جنب.
*/
