//задание 3
function indTempCity(cyty, temp) {
  console.log(`Сейчас в ${cyty} температура — ${temp} градусов по Цельсию`);
}

indTempCity("Лондоне", 28);

//задание 4
const speedOfLight = 299792458;

function getchekOfSeed(speed) {
  if (speed > speedOfLight) {
    return "Сверхсветовая скорость";
  } else if (speed < speedOfLight) {
    return "Субсветовая скорость";
  } else {
    return "Скорость света";
  }
}

const resultSpeed = getchekOfSeed(299792457);
console.log(resultSpeed);

// задание 5

function costCalc(mySum, price, product) {
  if (mySum >= price) {
    console.log(`Ваша ${product} приобретена. Спасибо за покупку`);
  } else {
    const remains = price - mySum;
    console.log(`Вам не хватает ${remains}$, пополните баланс`);
  }
}

costCalc(101, 100, "картошка");

/// задание 6
function flight(a, b) {
  if (a < b) {
    return "успели на рейс";
  } else {
    return "Опаздали на рейс";
  }
}

console.log(flight(21, 20));

/// Задание 7
const user = {
  name: "Мирослав",
  firstName: "Антоневич",
  age: 27,
};

const { name: userName, firstName: userFirstName, age: userAge } = user;

console.log(`${userName} ${userFirstName} ${userAge} лет`);
