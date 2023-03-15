export const generateRandomColors = (num: number) => {
  const colors = new Set<string>();

  while (colors.size < num) {
    colors.add(generateRandomColor());
  }

  return Array.from(colors);
};

const generateRandomColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
      // 6글자 맞춰주기
  );
};

export const copyToClipboard = (text: string) => {
  const textarea = document.createElement("textarea");
  textarea.textContent = text;
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};
