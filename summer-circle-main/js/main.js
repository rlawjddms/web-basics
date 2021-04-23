// song__info라는 id를 가진 문서 요소 선택
const songEl = document.getElementById("song__info");
// headset--on이라는 id를 가진 문서 요소 선택
const musicOnEl = document.getElementById('headset--on');
// headset--off이라는 id를 가진 문서 요소 선택
const musicOffEl = document.getElementById('headset--off');

// 오디오 생성
const audio = new Audio();
// 플레이리스트 배열
const playlists = [
    { 
        src: "./../audio/long_dream.mp3", 
        artist: "새소년", 
        song: "긴꿈"
    }
];

// 윈도우가 로드할 시 작동하는 익명의 함수
window.addEventListener('load', function() {
    playlists.map((el) => {
        // playlists 배열에 있는 요소의 src에 해당하는 값을 오디오 소스로 설정
        audio.src = el.src
        // playlists 배열에 있는 요소의 artist에 해당하는 값과
        // song에 해당하는 값을 문서에 대입
        songEl.innerHTML = `${el.artist} - ${el.song}`
    })
    // 오디오 자동재생
    audio.autoplay = 'true'
    // 오디오 반복 재생 true
    audio.loop = 'true'
    // 오디오 무음처리
    audio.muted = 'true';

    setInterval(autoSlide, 3000)
})

// musicOnEl에 클릭 이벤트 발생할 시 작동하는 익명의 함수
musicOnEl.addEventListener('click', function() {
    // 헤드셋 on 아이콘을 보이지 않게 함
    musicOnEl.style.display = 'none'
    // 헤드셋 off 아이콘이 나타남
    musicOffEl.style.display = 'flex'
    // 오디오 일시정지
    audio.pause();
})

// musicOffEl에 클릭 이벤트 발생할 시 작동하는 익명의 함수
musicOffEl.addEventListener('click', function() {
    // 헤드셋 off 아이콘을 보이지 않게 함
    musicOnEl.style.display = 'flex'
    // 헤드셋 on 아이콘이 나타남
    musicOffEl.style.display = 'none'
    // 오디오 재생
    audio.play();
})

// 슬라이드 이미지 선택자
const sliderImages = document.querySelectorAll('.slide')
// 오른쪽 화살표 선택자
const arrowRight = document.querySelector('.arrow--right')
// 왼쪽 화살표 선택자
const arrowLeft = document.querySelector('.arrow--left')
// 현재 보여지는 슬라이드 번호
let current = 0;

// 동그라미들 선택자
const dots = document.querySelectorAll('.dot')
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dot3 = document.querySelector('.dot3')
const dot4 = document.querySelector('.dot4')
const dot5 = document.querySelector('.dot5')
const dot6 = document.querySelector('.dot6')

// 슬라이드 이미지 리셋
const reset = () => {
    // 슬라이드 이미지 모두 보이지 않는 상태로 설정
    sliderImages.forEach((el) => el.style.display = 'none')
    dots.forEach((el) => el.style.background = '#F6F5F0')
}

// 자동 슬라이드 기능을 위한 함수
const autoSlide = () => {
    // 모든 슬라이드 이미지를 보이지 않는 상태로 설정
    reset()
    // 마지막 슬라이드 이미지라면,
    if (current === sliderImages.length - 1) {
        // current 값을 -1로 설정
        current = -1
    } 
    
    // 마지막 슬라이드 이미지가 아니라면,
    // current 값에 1을 더함
    current++
    // 슬라이드 이미지 배열에서 index값이 current인 이미지를 보이는 상태로 설정 
    sliderImages[current].style.display = 'block'
    dots[current].style.background = '#1107ff'
}

// 수동 슬라이드를 위한 함수들
// 1. 왼쪽 화살표에 클릭 이벤트가 발생할 시 작동할 함수
const slideLeft = () => {
    // 모든 슬라이드 이미지 display를 none으로 리셋
    reset()
    // current(현재 보여지는 슬라이드 이미지)의 
    // 이전 슬라이드 이미지가 보이도록 스타일 변경
    sliderImages[current - 1].style.display = 'block';
    dots[current - 1].style.background = '#1107ff'
    // current값을 1만큼 뺌
    current--;
}

// 2. 오른쪽 화살표에 클릭 이벤트가 발생할 시 작동할 함수
const slideRight = () => {
    // 모든 슬라이드 이미지 display를 none으로 리셋
    reset()
    // current(현재 보여지는 슬라이드 이미지)의 
    // 다음 슬라이드 이미지가 보이도록 스타일 변경 
    sliderImages[current + 1].style.display = 'block';
    dots[current + 1].style.background = '#1107ff'
    // current값을 1만큼 더함
    current++;
}

// 오른쪽 화살표를 클릭할 시 작동하는 익명의 함수
arrowLeft.addEventListener('click', function() {
    // 만약 current값이 0이라면,
    // 즉 현재 보이는 슬라이드 이미지가 첫번째 순서라면,
    if(current === 0) {
        // current값을 슬라이드 이미지 배열의 길이로 변경
        current = sliderImages.length;
    }
    slideLeft()
})

// 왼쪽 화살표를 클릭할 시 작동하는 익명의 함수
arrowRight.addEventListener('click', function() {
    // 만약 current값이 슬라이드 이미지 배열 길이 - 1만큼의 값이라면,
    // 즉 현재 보이는 슬라이드 이미지가 마지막 순서라면,
    if(current === sliderImages.length - 1) {
        // current값을 -1로 설정
        current = -1;
    }
    slideRight()
})

// 첫번째 동그라미 클릭할 시 작동하는 익명의 함수
dot1.addEventListener("click", function(){
    reset()
    current = 0
    sliderImages[current].style.display = 'block';
    dots[current].style.background = '#1107ff'
})

// 두번째 동그라미 클릭할 시 작동하는 익명의 함수
dot2.addEventListener("click", function(){
    reset()
    current = 1
    sliderImages[current].style.display = 'block';
    dots[current].style.background = '#1107ff'
})

// 세번째 동그라미 클릭할 시 작동하는 익명의 함수
dot3.addEventListener("click", function(){
    reset()
    current = 2
    sliderImages[current].style.display = 'block';
    dots[current].style.background = '#1107ff'
})

// 네번째 동그라미 클릭할 시 작동하는 익명의 함수
dot4.addEventListener("click", function(){
    reset()
    current = 3
    sliderImages[current].style.display = 'block';
    dots[current].style.background = '#1107ff'
})

// 다섯번째 동그라미 클릭할 시 작동하는 익명의 함수
dot5.addEventListener("click", function(){
    reset()
    current = 4
    sliderImages[current].style.display = 'block';
    dots[current].style.background = '#1107ff'
})

// 여섯번째 동그라미 클릭할 시 작동하는 익명의 함수
dot6.addEventListener("click", function(){
    reset()
    current = 5
    sliderImages[current].style.display = 'block';
    dots[current].style.background = '#1107ff'
})

// SCROLL TO TOP
const scrollToTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
}

// scroll to top 버튼 선택자
const scrollToTopBtn = document.querySelector('.btn--scrollToTop')

// 윈도우에 스크롤 이벤트가 발생할 시 작동하는 익명의 함수
window.addEventListener("scroll", function() {
    // 만약 스크롤이 발생하면,
    // scroll to top 버튼을 보이게 하고,
    // 아니라면 버튼을 보이지 않게 함
    window.scrollY > 0
    ? scrollToTopBtn.style.display = 'block'
    : scrollToTopBtn.style.display = 'none'
})