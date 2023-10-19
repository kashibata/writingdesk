const menuToggles = document.querySelectorAll(".menu-toggle");

menuToggles.forEach(menuToggle => {
  menuToggle.addEventListener("change", function() {
    const menuContent = this.nextElementSibling;
    const isOpen = this.checked;

    // すべてのメニューを閉じる 모든 메뉴를 닫는다.
    menuToggles.forEach(otherMenuToggle => {
      if (otherMenuToggle !== this) {
        otherMenuToggle.checked = false;
      }
    });

    // 開いているメニューにクラスを追加、閉じているメニューからクラスを削除 열은 메뉴에게 클러스를 추가하고, 닫는 메뉴에세 클러스를 뺀다.
    if (isOpen) {
      menuContent.classList.add("open");
    } else {
      menuContent.classList.remove("open");
    }
  });
});




