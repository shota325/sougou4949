document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 仮のユーザー名とパスワードのチェック
    const validUsername = 'sougou';
    const validPassword = '4949';

    if (username === validUsername && password === validPassword) {
        // ログイン成功
        window.location.href = 'top/top.html'; // 作成中のページにリダイレクト
    } else {
        // ログイン失敗
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'ユーザー名またはパスワードが違います';
    }
});