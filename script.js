// يظهر الجزء الثالث عند الضغط على الصورة
function revealHiddenData() {
    // الجزء الثالث المشفر: 2026_Gmbh
    alert("📡 إشارة ملتقطة من الصورة: [Part_3: 2026_Gmbh]");
}

function validateSolution() {
    const input = document.getElementById('flagInput').value.trim();
    const feedback = document.getElementById('feedback');

    // الحل النهائي الصحيح
    const secretFlag = "FLAG{Mobile_Hunter_2026_Flag}";

    if (input === secretFlag) {
        feedback.style.color = "#4ade80";
        feedback.innerText = "🎊 [تم الاختراق!] مبروك، لقد جمعت الشفرة بنجاح.";
        document.querySelector('.card').style.borderColor = "#4ade80";
        document.querySelector('.card').style.boxShadow = "0 0 30px #4ade80";
    } else {
        feedback.style.color = "#f87171";
        feedback.innerText = "❌ شفرة غير صحيحة.. ابحث في ملفات النظام.";
    }
}