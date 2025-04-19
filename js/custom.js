// 计算运行时间
function updateRuntime() {
  const startTime = new Date(2025, 3, 1, 0, 0, 0); // 2025年4月1日 00:00:00
  const now = new Date();
  const diff = now - startTime;

  if (isNaN(diff)) {
    console.error("日期计算错误");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const runtimeElement = document.getElementById("runtime_span");
  if (runtimeElement) {
    runtimeElement.innerHTML = `
      <span class="runtime-text">本站已安全运行</span>
      <span class="runtime-number">${days}</span> <span class="runtime-unit">天</span>
      <span class="runtime-number">${hours}</span> <span class="runtime-unit">小时</span>
      <span class="runtime-number">${minutes}</span> <span class="runtime-unit">分钟</span>
      <span class="runtime-number">${seconds}</span> <span class="runtime-unit">秒</span>
    `;
  }
}

// 确保 DOM 加载完成
if (document.readyState === "complete") {
  updateRuntime();
  setInterval(updateRuntime, 1000);
} else {
  document.addEventListener("DOMContentLoaded", () => {
    updateRuntime();
    setInterval(updateRuntime, 1000);
  });
}