// 计算运行时间
function updateRuntime() {
  // 使用更可靠的日期格式：年, 月(0-11), 日, 时, 分, 秒
  const startTime = new Date(2025, 3, 1, 0, 0, 0); // 月份是0-based，所以4月是3
  const now = new Date();
  const diff = now - startTime;
  
  // 检查diff是否为NaN
  if (isNaN(diff)) {
    console.error('日期计算错误，请检查日期格式');
    return;
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  const runtimeElement = document.getElementById('runtime_span');
  if (runtimeElement) {
    runtimeElement.innerHTML = 
      `本站已安全运行 <span style="color: #ff6b6b;">${days}</span> 天 <span style="color: #ff6b6b;">${hours}</span> 小时 <span style="color: #ff6b6b;">${minutes}</span> 分钟 <span style="color: #ff6b6b;">${seconds}</span> 秒`;
  }
}

// 确保DOM加载完成后再执行
if (document.readyState === 'complete') {
  updateRuntime();
  setInterval(updateRuntime, 1000);
} else {
  document.addEventListener('DOMContentLoaded', function() {
    updateRuntime();
    setInterval(updateRuntime, 1000);
  });
}