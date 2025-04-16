// 计算运行时间
function updateRuntime() {
  const startTime = new Date('2025-04-01 00:00:00'); // 替换为你的网站上线时间
  const now = new Date();
  const diff = now - startTime;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  document.getElementById('runtime_span').innerHTML = 
    `本站已安全运行 <span style="color: #ff6b6b;">${days}</span> 天 <span style="color: #ff6b6b;">${hours}</span> 小时 <span style="color: #ff6b6b;">${minutes}</span> 分钟 <span style="color: #ff6b6b;">${seconds}</span> 秒`;
}

// 每秒更新一次
setInterval(updateRuntime, 1000);
updateRuntime(); // 立即执行一次