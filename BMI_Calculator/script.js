    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const result = document.querySelector('#result');
        const fill = document.getElementById('bmi-fill');

        if (isNaN(height) || height <= 0) {
            result.innerHTML = `Please enter a valid height`;
            fill.style.width = '0%';
            return;
        }

        if (isNaN(weight) || weight <= 0) {
            result.innerHTML = `Please enter a valid weight`;
            fill.style.width = '0%';
            return;
        }

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category = '';
        let color = '';
        let width = 0;

        if (bmi < 18.6) {
            category = "Underweight";
            color = "blue";
            width = 25;
            tip = "Consider eating nutrient-rich food.";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = "Normal weight";
            color = "green";
            width = 50;
            tip = "Maintain your healthy diet,";
        } else {
            category = "Overweight";
            color = "red";
            width = 75;
            tip = "Try balanced diet and regular exercise.";
        }

        result.innerHTML = `<span>Your BMI is ${bmi} (${category})</span>`;
        fill.style.width = width + '%';
        fill.style.backgroundColor = color;

        result.innerHTML = `<div id="error"> Please enter a valid height</div>`;

        result.innerHTML = `<div id="error"> Please enter a valid weight</div>`;
    
        const name= document.querySelector('#name').value;
        result.innerHTML = `<span>Hello ${name}, Your BMI is ${bmi} (${category})</span><br><small>${tip}</small>`;

        const resetBtn = document.querySelector('button[type="reset"]');
        resetBtn.addEventListener('click', () =>{
            result.innerHTML='';
            fill.style.width = '0%';
            document.getElementById('weight-guide').classList.add('hidden')
        })

        document.getElementById("bmi-tag").style.backgroundColor=color;

        document.getElementById('weight-guide').classList.remove('hidden');

        form.rest();
        
    });
