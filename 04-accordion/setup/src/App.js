import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  const [questions, SetQuestions] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers</h3>
        <section className='info'> {questions.map((question) => {
          return <Question key={question.id} {...question} />
        })}
        </section>
      </div>
    </main>

  )

}
export default App;


/*

soruların olduğu datamızı useState kullanarak questions değişkenine tanımladık. Liste halinde olan verimizi maps mathodu ile return ettik.

*/