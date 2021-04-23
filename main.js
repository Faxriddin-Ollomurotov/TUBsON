let son=prompt('Men sizga tub sonni aniqlab beraman. Qaysi sonni bilmoqchisiz iltimos yozing');
let siklChiqish=true;
for(let i=2;i<=Math.floor(Math.sqrt(son));i++){
    if(son%i===0){
        siklChiqish=false;
        alert('Tub son EMAS');
        document.write('Tub son EMAS');
        break;
    }
}
if(siklChiqish===true){
    alert('Tub son');
    document.write('Tub son');
}
