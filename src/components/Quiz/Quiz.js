import './Quiz.css';
import react from 'react';
import { useState} from "react";
var flag = Boolean(false)
export const Quiz = () =>{
    const [currentQuestion, setCurrentQuestion]= useState (0)
    const [score, setScore] = useState(0)
    const handleAnswerOptionClick = (isCorrect) =>{
        if ((isCorrect)&&(currentQuestion ==question.length-1)&&(flag == false)){
            setScore(score+1)
            flag = true
        }
        else if ((isCorrect)&&(currentQuestion ==question.length-1)&&(flag == true)){
            setScore(score+1)
        }
        else if (isCorrect){
            (setScore(score+1))
        }
        if (currentQuestion+1 < question.length){
            setCurrentQuestion(currentQuestion+1)
        }
    }
   
    const question = [
        {
            questionText:'У кого из этих героев есть эта способность?', //0
            questionImage: "https://dota2.ru/img/heroes/clinkz/ability5.jpg?1594879144", 
            answeroptions: [
                {answerText: "Clinkz", inCorrect: true},
                {answerText: "Spirit Breaker", inCorrect: false},
                {answerText: "Tide Hunter", inCorrect: false},
                {answerText: "Tusk", inCorrect: false},
            ]},{
            questionText:'Какой из этих героев относится к интелекту?', //0
            questionImage: "https://avatars.mds.yandex.net/i?id=39cc8a8f26cc972d29ddc8c0066929f8258a85fa90eb2c8e-11353407-images-thumbs&n=13",
            answeroptions: [
                {answerText: "Anti-Mage", inCorrect: false},
                {answerText: "Axe", inCorrect: false},
                {answerText: "Pudge", inCorrect: false},
                {answerText: "Rubic", inCorrect: true},
            ]},{
                questionText:'Кто из этих героев является мидером?', //0
                questionImage: "https://avatars.mds.yandex.net/i?id=233b4fbbe7f7ee83b480a57cda98616f8f795294-3482022-images-thumbs&n=13",
            answeroptions: [
                {answerText: "ursa", inCorrect: false},
                {answerText: "Bane", inCorrect: false},
                {answerText: "Arc Warden", inCorrect: true},
                {answerText: "Axe", inCorrect: false},
           ]},{
            questionText:'У кого из этих героев есть аркана?', //0
            questionImage: "https://avatars.mds.yandex.net/i?id=1c879dc4853b9a79ab184a4bf908a016e65bf7e6-12423090-images-thumbs&n=13",
        answeroptions: [
            {answerText: "Gyrocopter", inCorrect: false},
            {answerText: "Faceless Void", inCorrect: true},
            {answerText: "Templar assasin", inCorrect: false},
            {answerText: "Warlock", inCorrect: false},
       ]},{
        questionText:'На какого героя берут этот предмет?', //0
            questionImage: "https://dota2.ru/img/items/aether_lens.jpg?1730129550", 
            answeroptions: [
                {answerText: "Pudge", inCorrect: true},
                {answerText: "Drow ranger", inCorrect: false},
                {answerText: "Slark", inCorrect: false},
                {answerText: "Axe", inCorrect: false},
            ]},
    ]
    return(
        <div className='quiz'>
            <div className='question_section'>
                <div className='question_count'>
                    <span>Вопрос {currentQuestion +1}</span>/{question.length}
                </div>
                <div className='question_text'>{question[currentQuestion].questionText}</div>
                <img src = {question[currentQuestion].questionImage} width={'200px'} />
            </div>
            <div className='answer_section'>
                    {question[currentQuestion].answeroptions.map(
                        item=>(<button className='answer_button' onClick=
                        {() => handleAnswerOptionClick(item.inCorrect)}>
                          {item.answerText}
                          </button>
                    ))}
            <div className = "score_section">
        Правильных ответов {score} из {question.length}
    </div>
            </div>
        </div>
    )
}