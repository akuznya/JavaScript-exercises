unit 6
 
№ 1
var animals = ["Кот","Рыба","Лемур","Комодский варан"];
for (var x=0; x<animals.length; x++) {
console.log(animals[x]=animals[x]+" - прекрасное животное");
}
№ 2
var alphabet="абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString="";
while (randomString.length<6) {
console.log(randomString);
randomString+=alphabet[Math.floor(Math.random()*alphabet.length)];}

