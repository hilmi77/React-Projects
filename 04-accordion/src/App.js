// import React, { useState } from "react";
// import data from "./data";
// import SingleQuestion from "./Question";
// function App() {
//   const [questions, setQuestions] = useState(data);
//   return (
//     <main>
//       <div className="container">
//         <h3>questions</h3>
//         <section>
//           {questions.map((question) => {
//             return (
//               <SingleQuestion key={question.id} {...question}></SingleQuestion>
//             );
//           })}
//         </section>
//       </div>
//     </main>
//   );
// }

// export default App;

import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions</h3>
        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
