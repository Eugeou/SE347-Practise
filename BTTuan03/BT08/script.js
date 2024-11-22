function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  if (username === "dungta" && password === "123456") {
    alert("Xin chào bạn đến với website");
  } else {
    alert("Thông tin đăng nhập không đúng!");
  }
}
