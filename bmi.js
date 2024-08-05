function bmi(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmiValue = weight / ((height/100) * (height/100));
    var bmi;
    if(bmiValue < 18.5){
        bmi = "ผอมเกินไป";
    }else if(bmiValue <= 25.0){
        bmi = "สมส่วน";
    }else if(bmiValue <= 30.0){
        bmi = "เริ่มอ้วน";
    }else if(bmiValue <= 35.0){
        bmi = "อ้วน";
    }else{
        bmi = "อ้วนมาก"
    }

    document.getElementById("Sbmi").innerHTML = "ค่าดัชนีมวลกายของคุณคือ " + bmiValue.toFixed(2) + " คุณอยู่ในเกณฑ์ " + bmi;
}