unit 3

№1-2
var randomAnimal=['тупик', 'слон', 'бегемот', 'скунс', 'индюк'];
var randomAdjectives=['тухлый', 'страшный', 'неказистый', 'потасканный', 'противный'];
var randomBodyParts=['сосок', 'кадык', 'лоб', 'таз', 'рот'];
var randomAnimalBodyParts=['лапа', 'хобот','копыто','хвост','щупальце']
var randomAdjective= randomAdjectives[Math.floor(Math.random()*5)];
var randomAnimal=randomAnimal[Math.floor(Math.random()*5)];
var randomBodyParts=randomBodyParts[Math.floor(Math.random()*5)];
var randomAnimalBodyParts=randomAnimalBodyParts[Math.floor(Math.random()*5)]
var randomInsult='У тебя ' + randomBodyParts + ' еще более ' + randomAdjective + ', чем ' + randomAnimalBodyParts + ' у ' + randomAnimal + 'а'; 
randomInsult;


№3
var randomAnimal=['тупик', 'слон', 'бегемот', 'скунс', 'индюк'];
var randomAdjectives=['тухлый', 'страшный', 'неказистый', 'потасканный', 'противный'];
var randomBodyParts=['затылок', 'кадык', 'лоб', 'таз', 'рот'];
var randomAnimalBodyParts=['лапа', 'хобот','копыто','хвост','щупальце']
var randomAdjective= randomAdjectives[Math.floor(Math.random()*5)];
var randomAnimal=randomAnimal[Math.floor(Math.random()*5)];
var randomBodyParts=randomBodyParts[Math.floor(Math.random()*5)];
var randomAnimalBodyParts=randomAnimalBodyParts[Math.floor(Math.random()*5)]
var randomInsult=['У тебя', randomBodyParts, 'еще более', randomAdjective,'чем', randomAnimalBodyParts,'у',randomAnimal + 'а'].join(" ") 
randomInsult;


№4
var newArray = [3,2,1];
var newArray = newArray.join(' больше, чем ') 
newArray;

unit 4

№1
var scores = {};
scores['Денис'] = 1;
scores['Саша'] = 3;
scores['Вася'] = 1;
scores['Петя'] = 5;
scores['Глеб'] = 0;

№2
var myCrazyObject = {"name": "Нелепый объект","some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],"random animal": "Банановая акула"};

myCrazyObject['some array']['number'];