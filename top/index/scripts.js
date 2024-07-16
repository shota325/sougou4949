// ページロード時にデフォルト画像を表示
window.onload = () => {
    displayImage(imageData.defaultImage);
};

function loadImages(menu, event) {
    event.preventDefault();
    const imageList = document.getElementById('imageList');
    imageList.innerHTML = ''; // 現在の画像をクリア

    imageData[menu].forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${index + 1}`;
        img.onclick = () => displayImage(src);
        imageList.appendChild(img);
    });

    // 最初の画像をメイン画像に表示
    if (imageData[menu].length > 0) {
        displayImage(imageData[menu][0]);
    } else {
        displayImage(imageData.defaultImage); // 画像がない場合はデフォルト画像を表示
    }


    // アコーディオンメニューを非表示にする
    const accordionMenus = document.querySelectorAll('.accordion-content');
    accordionMenus.forEach(menu => {
        menu.style.display = 'none';
    });
}

function displayImage(src) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = src;
}

// 初期状態でメニュー1の画像を読み込む
document.addEventListener('DOMContentLoaded', () => loadImages('menu1'));

// アコーディオンメニューの表示を切り替える関数
function toggleAccordion(event, accordionId) {
    event.preventDefault();
    const accordion = document.getElementById(accordionId);
    if (accordion.style.display === "block") {
        accordion.style.display = "none";
    } else {
        // すべてのアコーディオンメニューを非表示にする
        const accordionMenus = document.querySelectorAll('.accordion-content');
        accordionMenus.forEach(menu => {
            menu.style.display = 'none';
        });
        // クリックしたアコーディオンメニューを表示する
        accordion.style.display = "block";
    }
}