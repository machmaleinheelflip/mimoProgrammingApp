// encrypting
function caesarCipher(str, shift) {
    return str.replace(/[a-zA-Z]/g, function(c) {
    const base = c < 'a' ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
    });
   }
   
   function translate() {
    const plaintextValue = document.getElementById('plaintext').value;
    const shiftValue = parseInt(document.getElementById('shift').value);
    const outputValue = caesarCipher(plaintextValue, shiftValue);
    document.getElementById('output').innerHTML = outputValue;
   }
   
   document.getElementById("plaintext").addEventListener("input", translate);
   document.getElementById("shift").addEventListener("input", translate);
   
   // decrypting
   function caesarCipher2(str, shift) {
    return str.replace(/[a-zA-Z]/g, function(c) {
    const base = c < 'a' ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0) - base - shift) % 26 + base);
    });
   }
   
   function translate2() {
    const plaintextValue2 = document.getElementById('plaintext2').value;
    const shiftValue2 = parseInt(document.getElementById('shift2').value);
    const outputValue2 = caesarCipher2(plaintextValue2, shiftValue2);
    document.getElementById('output2').innerHTML = outputValue2;
   }
   
   document.getElementById("plaintext2").addEventListener("input", translate2);
   document.getElementById("shift2").addEventListener("input", translate2);
   