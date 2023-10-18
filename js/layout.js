const menuToggles = document.querySelectorAll(".menu-toggle");

menuToggles.forEach(menuToggle => {
  menuToggle.addEventListener("change", function() {
    const menuContent = this.nextElementSibling;
    const isOpen = this.checked;

    // すべてのメニューを閉じる
    menuToggles.forEach(otherMenuToggle => {
      if (otherMenuToggle !== this) {
        otherMenuToggle.checked = false;
      }
    });

    // 開いているメニューにクラスを追加、閉じているメニューからクラスを削除
    if (isOpen) {
      menuContent.classList.add("open");
    } else {
      menuContent.classList.remove("open");
    }
  });
});




