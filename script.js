function highlight() {
    //Write your code here
const boldWords  = document.querySelectorAll('strong');

	boldWords.forEach((words =>{
		words.style.color= "green";
	}))

}


function return_normal() {
    //Write your code here

    const returnedWords = document.querySelectorAll('strong');
	returnedWords.forEach((word=>{
		word.style.color = 'black'
	}))
}
