const quiz = [
    {
        question: "Q1: 'Dandia' is a popular dance of",
       a: " UttraPradesh",
       b:     "Gujarat",              
       c:       "Tamil Nadu",
         d:     "Maharashtra",
         ans: "ans2"

    },

    {
        question: "Q2: The words 'Satyameva Jayate' inscribed below the base plate of the emblem of India are taken from",
       a: "Rigveda",
       b:     "Satpath Brahmana",              
       c:       "Mundak Upanishad",
         d:     "Ramayana",
         ans: "ans3"

    },

    {
        question: "Q3: The ratio of width of our National flag to its length is",
       a: "3:5",
       b:     "2:3",              
       c:       "2:4",
         d:     "3:4",
         ans: "ans2"

    },
    {
        question: "Q4:Which of the following folk dance forms is associated with Gujarat? ",
       a: "Nautanki ",
       b:     "Garba",              
       c:       "Kathakali",
         d:     "Bhangra",
         ans: "ans2"

    },
    {
        question: "Q5: The Rath Yatra at Puri is celebrated in honour of which Hindu deity",
       a: " Jaganath",
       b:     "Shiva",              
       c:       " Vishnu",
         d:     "Ram",
         ans: "ans1"

    },
    {
        question: "Q6: The book of Parsis is",
       a: "Torah ",
       b:     "Bible",              
       c:       "Zend Avesta",
         d:     "Gita",
         ans: "ans3"

    },
    {
        question: "Q7: The National Anthem was first sung in the year",
       a: " 1911",
       b:     "1939",              
       c:       "1945",
         d:     "1942",
         ans: "ans1"

    },
    {
        question: "Q8: 'Madhubani', a style of folk paintings, is popular in which of the following states in India?",
       a: " Uttar Pradesh",
       b:     "Rajasthan",              
       c:       "Madhya Pradesh",
         d:     "Bihar",
         ans: "ans4"

    },
    {
        question: "Q9: Kathak is a classical dance of ",
       a: " North India",
       b:     "Tamilnadu",              
       c:       "Manipur",
         d:     "Kerala",
         ans: "ans1"

    },
    {
        question: "Q10: The National Song of India was composed by",
       a: " Rabindranath Tagore",
       b:     "Bankim Chandra Chatterji",              
       c:       "Iqbal",
         d:     "Jai Shankar Prasad",
         ans: "ans2"

    },
]

const Question = document.querySelector('.Question');
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3  = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const sumbit = document.querySelector('#sumbit')
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let QuestionCount = 0;
let score = 0;
const loadQuestion = () =>{
    const questionList = quiz[QuestionCount];
    Question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () =>{
  let answer;

answers.forEach((curAnsElm) => {
  if(curAnsElm.checked){
    answer = curAnsElm.id;
  }
});
return answer;
};
const deselectAll= () =>{
answers.forEach((curAnsElm) => curAnsElm.checked = false);
}

 sumbit.addEventListener('click', () =>{
  const checkedAnswer = getCheckAnswer();
  if(checkedAnswer === quiz[QuestionCount].ans){
    score++;
  };
QuestionCount++;
deselectAll();
if(QuestionCount < quiz.length){
  loadQuestion();
}else{
  showScore.innerHTML = `<h3>You scored ${score}/${quiz.length} ✌ </h3>
  <button class ="btn1" onclick="location.reload()">Play Again</button>
  ` ;
  showScore.classList.remove('showArea');
}
 });