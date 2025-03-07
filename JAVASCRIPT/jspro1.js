const question= [
    {
        'que': 'Which of the following is markup language',
        'a': 'HTML',
        'b': 'JavaScript',
        'c': 'React',
        'd': 'CSS',
        'correct': 'a'
    },
    {
        'que':'Choose the correct HTML element for the largest heading:',
        'a': 'h6',
        'b': '<heading>',
        'c': 'h1',
        'd': '<head>',
        'correct': 'c'
    },
    {
        'que':'Inside which HTML element do we put the JavaScript?',
        'a': '<scripting>',
        'b': 'JavaScript',
        'c': '<js>',
        'd': '<script>',
        'correct': 'd'
    },
    {
        'que': 'Where is the correct place to insert a JavaScript',
        'a': 'The <body> section',
        'b': 'Both Head and Body are correct',
        'c': 'The <head> section',
        'd': 'The CSS section',
        'correct': 'a'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'computer Styles Sheets',
        'b': 'Cascading Style Sheet',
        'c': 'Colourful Style Sheet',
        'd': 'Creative Style Sheet',
        'correct': 'b'
    }
    
]



let index = 0;
let total= question.length;
let right = 0, 
wrong = 0;
const quebox = document.querySelector("#quebox");
const optionsinput = document.querySelectorAll(".options")
const loadquestion= ()=>{
    if(index === total){
        return endquiz()
    }
    reset()
    const data = question[index]
    quebox.innerText =`${index+1}) ${data.que}`;
    optionsinput[0].nextElementSibling.innerText = data.a;
    optionsinput[1].nextElementSibling.innerText = data.b;
    optionsinput[2].nextElementSibling.innerText = data.c;
    optionsinput[3].nextElementSibling.innerText = data.d;

}


const submitquiz= ()=>{
    const data = question[index];
    const ans = getanswer()
    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadquestion()
    return;
}


const getanswer=()=>{
    let answer;
    optionsinput.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;

}


const reset= ()=>{
    optionsinput.forEach(
        (input)=>{
            input.checked=false;

        }
    )
}

const endquiz = () =>{
    document.getElementById("box").innerHTML=`
    <h3> Thankyou for playing the quiz</h3>
    <h2> ${right} / ${total} are correct</h21>`
}


loadquestion()