console.log(`----------------------Degiskenler----------------------`);
// let kulanımı
let yas = 20;
//let yas = 29; Hata!
yas = 21;
console.log(`let ile olusturup sonradan deger atandı : ${yas}\n`);

// const kulanımı
const boy = 170;
//const boy = 177; Hata!
//boy = 178; Hata!
console.log(`const ile olusturuldugundaki deger, sonradan degismez : ${boy}\n`);

// var kulanımı
var kilo = 90;
var kilo = 80;
kilo = 100;
console.log(`var ile olusturuldu, sonrasında aynı isim ile tekrar olusturuldu : ${kilo}\n`);

console.log(`----------------------Destructuring----------------------`);
const obj = {
    name: "yunus emre",
    surname: "kavi",
    mail: "ykavi@ebay.com"
}
const { name, surname, mail } = obj; // Destructuring yontemi
console.log(`Adım :${name}\nSoyadım :${surname}\nMailim :${mail}\n`);

console.log(`----------------------Spread Operator----------------------`);
const obj2 = {
    name2: "yunus emre",
    surname2: "kavi",
    mail2: "ykavi@ebay.com",
    boy: 179,
    kilo: 80
}
const { name2, surname2, mail2, ...geriKalan } = obj2; // Destructuring yontemi
console.log(`${JSON.stringify(geriKalan)}\n`);

console.log(`----------------------Arrow Functions----------------------`);
//Normal fonksiyonlardan farkı 'this' denince kendi scobunun dışındakilere ulaşır ve kural olarak geri return etmeli
const myArrowFunction = (sayi1, sayi2) => {
    return sayi1 + sayi2;
}
console.log(`Arrow Function Topla : ${myArrowFunction(4, 5)}\n`);

console.log(`----------------------Template Literals----------------------`);
//Template Literals degisken degerlerimizi yazdırırken kolaylık saglar multi line dır
console.log(`Template Literals : ${name} & ${surname}\n`);

console.log(`----------------------array.filter()----------------------`);
//Çoklu deger geri dondurebilir, filtreleme işlemlerinde kullanılır
const array = [
    {
        name: "emre",
        surname: "kaya",
        mail: "kaya@ebay.com",
        boy: 169,
        kilo: 83
    },
    {
        name: "erdi",
        surname: "kavi",
        mail: "ykavi@ebay.com",
        boy: 179,
        kilo: 80
    },
    {
        name: "hakan",
        surname: "demir",
        mail: "demir@ebay.com",
        boy: 189,
        kilo: 90
    }
]

const kilolular = array.filter((item) => {
    return item.kilo > 80;
})

kilolular.forEach(element => {
    console.log(`Kilolular : ${element.name}\n`);
});

console.log(`----------------------array.map()----------------------`);
//foreach gibi çalışır farkı bir deger return edebilir
const mapping = array.map((item) => {
    return item.name;
})

console.log(`Tüm isimler : ${mapping}\n`);

console.log(`----------------------array.reduce()----------------------`);
//bir dizi ile yeni bir şey olusturulcagında kullanılır karmasık işler uzerinde kullanımı daha fazladır
const newItem = array.reduce((sonuc, item, index) => {

    if (item.name.includes('e'))
        sonuc.push(item)

    return sonuc;
}, [])
console.log(`isminde 'e' gecenlerden olusan yeni array: ${JSON.stringify(newItem)}\n`);

console.log(`----------------------array.find()----------------------`);
//dizi icersinde tek bişey arıyorsak kullanılır, tek bir şey return eder
const sonuc = array.find((item) => {

    return item.boy === 189

})
console.log(`boyu 189 olan kişinin adı: ${sonuc.name}\n`);

console.log(`----------------------array.every()----------------------`);
//dizi icinde kosulu saglayan veya saglamayanlara bakabiliriz,true veya false doner
const sonuc2 = array.every((item) => {

    return item.kilo > 79 //hepsi için kosul saglanması gereklidir, aksi halde false döner
})
console.log(`herkesin kilosu 79 dan buyuk mu : ${sonuc2 ? 'evet' : 'hayır'}\n`);

console.log(`----------------------array.some()----------------------`);
//dizi icinde kosulu saglayan veya saglamayanlara bakabiliriz,true veya false doner
const sonuc3 = array.some((item) => {

    return item.kilo === 120 //kosulun bir kere saglanması yeterlidir true için
})
console.log(`kilosu 120 olan birisi var mı : ${sonuc3 ? 'var' : 'yok'}\n`);