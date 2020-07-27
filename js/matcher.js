 // get all needed classes and id
 const generateBtn = document.querySelector('.generate-btn');
 const showRandomField = document.getElementById('show-random-field');
 const showMatchingNum = document.getElementById('showMatchingNum');
 const numberBtn = document.querySelectorAll('.number-btn');
 const calcButtonRows = document.querySelectorAll('.calc-button-row');
 const submitBtn = document.querySelector('.submit-btn');

 // generate random number and push it to the input field
 generateBtn.addEventListener('click',function(){
     const randomNumber = Math.random();
     const fourDigitInt = Math.ceil(randomNumber*10000);

     //if the number is less than 1000, add 1000 with the number
     if(fourDigitInt< 1000){
        fourDigitInt = 1000 + fourDigitInt;
     }
     showMatchingNum.value = '';
     showRandomField.value = fourDigitInt;

     //remove the remarker when it will click
     removeMatchingResult()
 })

 
 //add 'click' event listener for every button
 calcButtonRows.forEach(buttonRow => buttonRow.addEventListener('click',function(e){
    // get the id of clicked button
    const curBtnId = e.target.id;

    //when button haven't any id
    if(curBtnId === ''){
        const currentNum = e.target.textContent;
        let getValue = showMatchingNum.value;
        if(getValue == ''){
            showMatchingNum.value = currentNum
        }else{
            showMatchingNum.value = getValue + currentNum;
        }
    }
    
    //when button have the 'clear' id
    if(curBtnId === 'clear'){
        showMatchingNum.value = '';
        removeMatchingResult()
    }

    // when button have the 'backSpace' id
    if(curBtnId === "backSpace"){
        backSpace()
    }
 }))

 
 //compare the two input field number for matching by submit button
 submitBtn.addEventListener('click',function(){
     const randomValue = showRandomField.value;
     const matchingValue = showMatchingNum.value;

     if(randomValue === matchingValue){
         hideShow('.notify.password-right','.notify.password-wrong');
     }else{
         hideShow('.notify.password-wrong','.notify.password-right')
     }
 })

 // remove the last number from the string
 function backSpace(){
    let curNum = showMatchingNum.value;
    showMatchingNum.value = curNum.substr(0,curNum.length-1)
 }

 
// remove the result of matching
 function removeMatchingResult(){
    const wrongResult = document.querySelector('.notify.password-wrong');
    wrongResult.style.display = 'none';
    const rightResult = document.querySelector('.notify.password-right');
    rightResult.style.display = 'none';
 }


 // for getting the result,does it correct or wrong?
 function hideShow(class1,class2){
       const getClass1 = document.querySelector(class1);
       const getClass2 = document.querySelector(class2);
       getClass1.style.display = 'block';
       getClass2.style.display = 'none';
 }