// script.js
document.addEventListener('DOMContentLoaded', () => {
    const inputButton = document.getElementById('inputButton');
    const catalogButton = document.getElementById('catalogButton');
    const otherButton = document.getElementById('otherButton');

    inputButton.addEventListener('click', () => {
        window.location.href = 'form/form1.html'; // 遷移先のページ
    });

    catalogButton.addEventListener('click', () => {
        window.location.href = 'index/index.html'; // 遷移先のページ
    });

    otherButton.addEventListener('click', () => {
        window.location.href = 'other.html'; // 遷移先のページ
    });
});
