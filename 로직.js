const 색상선택 = document.getElementById("색상선택버튼");
const 선택된색상박스 = document.getElementById("선택된색상박스");
const 선택된색상텍스트 = document.getElementById("선택된색상텍스트");

const 팔레트 = async () => {
  try {
    const 스포이드 = new EyeDropper();

    const { sRGBHex } = await 스포이드.open();
    선택된색상텍스트.textContent = `선택된 색: ${sRGBHex}`;
    선택된색상박스.style.backgroundColor = sRGBHex;
  } catch (error) {
    console.log(error);
    선택된색상텍스트.textContent = "선택 에러";
  }
};

색상선택.addEventListener("click", 팔레트);
