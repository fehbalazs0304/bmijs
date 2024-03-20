function index(){
    var magassag = document.getElementById("magassag").value;
    magassag = Number(magassag)
    var suly = document.getElementById("suly").value;
    suly = Number(suly);
    magassagm = magassag/100;
    var tindex = suly/(magassagm*magassagm);
    tindex = Math.round(tindex*100)/100;
    document.getElementById("eredmeny").innerText = tindex
}