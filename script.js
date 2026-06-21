function calculateKeto() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    const goal = document.getElementById('goal').value;

    if (!weight || !height || !age) {
        alert("Пожалуйста, заполните все поля");
        return;
    }

    // Расчет базового метаболизма по формуле Миффлина-Сан Жеора
    let bmr = (gender === 'male') 
        ? (10 * weight) + (6.25 * height) - (5 * age) + 5
        : (10 * weight) + (6.25 * height) - (5 * age) - 161;

    // Умножаем на минимальный коэффициент активности (1.2)
    let calories = bmr * 1.2;

    // Коррекция под цель
    if (goal === 'lose') {
        calories = calories * 0.8; // дефицит 20%
    }

    // Пропорции Кето: 75% жиры, 20% белки, 5% углеводы
    // 1г жира = 9 ккал, 1г белка/углеводов = 4 ккал
    const fats = (calories * 0.75) / 9;
    const proteins = (calories * 0.20) / 4;
    const carbs = (calories * 0.05) / 4;

    // Вывод результатов
    document.getElementById('resCalories').innerText = Math.round(calories);
    document.getElementById('resFats').innerText = Math.round(fats);
    document.getElementById('resProteins').innerText = Math.round(proteins);
    document.getElementById('resCarbs').innerText = Math.round(carbs);
    
    document.getElementById('resultBlock').style.display = 'block';
}
