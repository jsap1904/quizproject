var questions = [
	{
	question: "What is my favorite food?",
	answer: "pizza"
	},
	{
	question: "What is my favorite color?",
	answer: "black"
	},
	{
	question: "Who is my favorite superhero?",
	answer: "spiderman"
	},
	{
	question: "What car should I have not sold?",
	answer: "s2000"
	},
	{
	question: "What is my newest hobby?",
	answer: "climbing"
	},
	{
	question: "What kind of dog do I want?",
	answer: "corgi"
	}

]

for(i=0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;

	for(i=0;i<questions.length;i++) {
		var answer = questions[i].answer
		var guess = document.getElementById('answer' +[i]).value
		var questionSpot = document.getElementById('question' +[i])

		if(answer == guess) {
			questionSpot.className = "correct"
			correct++
		} else {
			questionSpot.className= "incorrect"
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}