
async function loadKey() {
  const res = await fetch('key.txt');
  const key = await res.text();
  document.getElementById('key').textContent = key.trim();
}
function copyKey() {
  const key = document.getElementById('key').textContent;
  navigator.clipboard.writeText(key).then(() => {
    alert("Key copied to clipboard!");
  });
}
window.onload = loadKey;
