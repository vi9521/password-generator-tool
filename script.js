function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

document.getElementById("generateBtn").addEventListener("click", function() {
    document.getElementById("password").value = generatePassword();
});

document.getElementById("copyBtn").addEventListener("click", function() {
    const passField = document.getElementById("password");
    passField.select();
    passField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passField.value);
    alert("Password Copied!");
});
