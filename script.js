function encrypt() {
    var encrypted = CryptoJS.AES.encrypt(document.getElementById("text_cr").value, document.getElementById("key_cr").value);   
    document.querySelector("#result").value = encrypted;
}

function decrypt() {
    var decrypted = CryptoJS.AES.decrypt(document.getElementById("text_cr").value, document.getElementById("key_cr").value).toString(CryptoJS.enc.Utf8);
    document.querySelector("#result").value = decrypted;
    if(decrypted == '')
    {
        tempAlert("Ada yang salah, coba perhatikan lagi!",1000);
    }
}

function myPaste(taruhID) {
    navigator.clipboard.readText()
    .then(text => {
        document.getElementById(taruhID).value = text;
    });
}

function myCopy() {
    navigator.clipboard.writeText(document.querySelector('#result').value);
}

function clearT(param) {
    document.querySelector(param).value = "";
}

var txt_d='',key_d='',res_d='';

function animateT(pmb) {
    if (document.getElementById('eb_').checked){
        document.querySelector('#tombol').onclick = function() {encrypt();};
        txt_d = document.querySelector('#text_cr').value;
        key_d = document.querySelector('#key_cr').value;
        res_d = document.querySelector('#result').value;
        document.querySelector('#text_cr').value    = txt_e;
        document.querySelector('#key_cr').value     = key_e;
        document.querySelector('#result').value     = res_e;
        // document.querySelector("#result").value = document.querySelector('#text_cr').value;
        //document.querySelector("#text_cr").value = txt_e;
        var first = '.dcr_',second = '.ecr_';
    }
    else if (document.getElementById('db_').checked){
        document.querySelector('#tombol').onclick = function() {decrypt();};
        txt_e = document.querySelector('#text_cr').value;
        key_e = document.querySelector('#key_cr').value;
        res_e = document.querySelector('#result').value;
        document.querySelector('#text_cr').value    = txt_d;
        document.querySelector('#key_cr').value     = key_d;
        document.querySelector('#result').value     = res_d;
        // document.querySelector('#text_cr').value = document.querySelector("#result").value;
        // document.querySelector("#result").value = '';
        var first = '.ecr_',second = '.dcr_';
    }
    document.getElementById(pmb).disabled=true;
    animateC(first,second);
    setTimeout(function(){
        document.getElementById(pmb).disabled=false;
    },300);
}

function sleep_(ms_) {
    return new Promise(resolve => setTimeout(resolve, ms_));
}

async function animateC(par1,par2) {
    var first  = document.querySelectorAll(par1);
    var second = document.querySelectorAll(par2);
    for(var i=0; i<first.length; i++){
        first[i].classList.add("text-out");
    }                
    await sleep_(150);
    for(var i=0; i<first.length; i++){
        first[i].classList.remove("text-in","text-out");
        second[i].classList.add("text-in");  
    }
}        
