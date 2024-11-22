function getUserInfo() {
    // Nhập tên
    const name = prompt("Bạn hãy nhập vào tên:");
    if (!name) {
      alert("Bạn chưa nhập tên!");
      return;
    }
  
    // Nhập tuổi
    const age = prompt("Bạn hãy nhập vào tuổi:");
    if (!age || isNaN(age)) {
      alert("Tuổi phải là một số hợp lệ!");
      return;
    }
  
    // Hiển thị tên và tuổi
    document.write(
      `<p><strong style="color: blue;">Tên: ${name}</strong></p>` +
      `<p><u>Tuổi: ${age}</u></p>`
    );
  }
  