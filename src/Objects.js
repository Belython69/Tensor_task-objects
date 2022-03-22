/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender == 'female') {
        delete data.age;
        return data;
    } else {
        if (data.hasOwnProperty('income')) {
            return data;
        } else {
            data.income = 100000;
            return data;
        }
    }
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let answer = [];
    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            answer.push(`${key}`);
        }
    }
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            answer.push(`${key}`);
        }
    }
    for (let key in obj3) {
        if (obj3.hasOwnProperty(key)) {
            answer.push(`${key}`);
        }
    }
    return answer.sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    let answer = [];
    for (let i = 0; i < count; i++) {
        let newObj = JSON.parse(JSON.stringify(obj));
        newObj.id = i;
        answer.push(newObj);
    }
    return answer;
}
