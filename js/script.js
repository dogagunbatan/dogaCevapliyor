const questionInputElement = document.querySelector("#question-input");
const answerSectionElement = document.getElementById("answer-section");
questionInputElement.addEventListener("input", checkingQMark);

function checkingQMark() {
  if (this.value.includes("?")) {
    //  window.location.href = "https://yesno.wtf";

    fetchingApi();
  }
}

const fetchingApi = () => {
  const inputValue = questionInputElement.value;

  fetch("https://yesno.wtf/api/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
     // document.getElementById("answer").textContent = data.answer.toUpperCase();
      answerSectionElement.style.backgroundImage = 'url('+data.image+')';
      //answerSectionElement.textContent = data.answer.toUpperCase();
    
      showAnswerSection();
      setTimeout(() => {
      hideAnswerSection();
       
      }, 3000);
    })
    .catch(function (error) {
      console.error(error);
      alert("There is an error occurred! Control the internet connection.");
    });
};

const showAnswerSection = () => {
 answerSectionElement.style.display = 'block';
 
}

const hideAnswerSection = () => {
    answerSectionElement.style.display = 'none';
}


