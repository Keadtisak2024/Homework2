function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
    } 
    else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    checkTotal();
 }

 function checkAnswer2(answer) {
    const result2 = document.getElementById("result2")
    if (answer === '2'){
        result2.textContent = "ถูกต้องอยู่ 2 ชั้น";
        result2.style.color = 'green';
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
    }
    checkTotal();
}

function checkTotal(){
    const check1 = document.getElementById('result');
    const check2 = document.getElementById("result2");
    if (check1.textContent == "ถูกต้อง PIM ย่อมาจาก PIM" && check2.textContent == "ถูกต้องอยู่ 2 ชั้น") {
        document.getElementById("sumTotal").textContent = "ตอบถูก 2 ข้อ";
        document.getElementById("sumTotal").style.color = 'green';
        document.getElementById("sumTotal").style.fontWeight = "bold";
    } else if(check1.textContent == "ถูกต้อง PIM ย่อมาจาก PIM" || check2.textContent == "ถูกต้องอยู่ 2 ชั้น") {
        document.getElementById("sumTotal").textContent = "ตอบถูก 1 ข้อ";
        document.getElementById("sumTotal").style.color = 'green';
        document.getElementById("sumTotal").style.fontWeight = "normal";
    } else {
        document.getElementById("sumTotal").textContent = "ลองใหม่นะ";
        document.getElementById("sumTotal").style.color = "red"
    }
}