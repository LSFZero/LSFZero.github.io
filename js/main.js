// 白屏字幕动画
const line=document.querySelector('.line');
line.innerHTML=line.textContent.replace(/智能/,'<span>智能</span>');
setTimeout(()=>{document.getElementById('awaken').style.display='none';},2800);

// 复制 QQ
document.getElementById('copy-qq').onclick=()=>{
  navigator.clipboard.writeText('1828339242').then(()=>alert('QQ 号已复制！'));
};
