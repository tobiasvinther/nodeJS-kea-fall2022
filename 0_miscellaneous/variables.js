//hvis man ikke bruger var, let eller const, men bare skriver variabelnavnet når man deklarerer, så er det "total globalt", hele miljøet
malte = "Malte"
//var er global variabel. Vi har adgang glibalt, men kan også overskrive den globalt.
var malte = "Malte"

//'use strict' betyder, at er i "striks modus", så er der nogle ting man ikkke må. Så kan man få errors, som man ellers ikke ville få. 

//man kan definere et nyt scope sådan her:

{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue); //dette vil valuere til true, den bliver reassigned til false inde i et nested scope
}

{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue); //dette vil valuere til false, da var er globalt scope
}

//const: man kan ikke reassigne den. Man kan godt ændre værdien på variablen, men man kan ikke resassigne den. Den er ikke imutable.
//brug altid const når man har muligheden. 

for(var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
    //dette vil printe 5 ud fem gange :O (pga. var). Løsning: brug let i stedet.
}

