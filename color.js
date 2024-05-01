const 색상선택 = document.getElementById("색상선택버튼");
const 선택된색상박스 = document.getElementById("선택된색상박스");
const 선택된색상텍스트 = document.getElementById("선택된색상텍스트");
const 결과컨테이너 = document.querySelector(".로컬스토리지-바디");
const 초기화버튼 = document.getElementById("로컬스토리지-초기화");
let 색상기록 = JSON.parse(localStorage.getItem("색상기록")) || [];

const 팔레트 = async () => {
  try {
    const 스포이드 = new EyeDropper();
    const { sRGBHex } = await 스포이드.open();
    선택된색상텍스트.textContent = `선택된 색: ${sRGBHex}`;
    선택된색상박스.style.backgroundColor = sRGBHex;
    색상기록.push(sRGBHex);
    localStorage.setItem("색상기록", JSON.stringify(색상기록));
    색상보여주기();
  } catch (error) {
    console.log(error);
    선택된색상텍스트.textContent = "선택 에러";
  }
};

const 색상보여주기 = () => {
  결과컨테이너.innerHTML = '<div class="로컬스토리지-바디"></div>';
  색상기록.forEach((색) => {
    const 색상카드컨테이너 = document.createElement("div");
    색상카드컨테이너.className = "로컬스토리지-색상카드컨테이너";

    const 색상박스 = document.createElement("div");
    색상박스.className = "로컬스토리지-색상박스";
    색상박스.style.backgroundColor = 색;

    const 색상텍스트 = document.createElement("div");
    색상텍스트.className = "로컬스토리지-색상텍스트";
    색상텍스트.textContent = 색;

    색상카드컨테이너.appendChild(색상박스);
    색상카드컨테이너.appendChild(색상텍스트);
    결과컨테이너.appendChild(색상카드컨테이너);
  });
};

초기화버튼.addEventListener("click", () => {
  localStorage.removeItem("색상기록");
  색상기록.length = 0;
  색상보여주기();
});

색상선택.addEventListener("click", 팔레트);
색상보여주기();
