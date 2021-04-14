// 햄버거 바 아이콘 선택자
const openMenuEl = document.getElementById("btn--open")
// 닫는 아이콘 선택자
const closeMenuEl = document.getElementById("btn--close")
// 사이드 메뉴 선택자
const navMenuEl = document.getElementById("nav_menu")

// 햄버거 바 아이콘에 클릭 이벤트가 발생하면
openMenuEl.addEventListener("click" ,function(){
    // 햄버거 바 아이콘을 보이지 않게 처리하고
    openMenuEl.style.display="none"
    // 닫는 아이콘은 보이게 처리합니다
    closeMenuEl.style.display="block"
    // 사이드 메뉴를 보이게 합니다
    navMenuEl.style.transform="translate(0%)"
})

closeMenuEl.addEventListener("click" ,function(){
    closeMenuEl.style.display="none"
    openMenuEl.style.display="block"
    navMenuEl.style.transform="translate(-100%)"
})
