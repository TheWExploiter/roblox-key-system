function generateKey() {
  return Math.random().toString(36).substring(2, 15);
}

function loadKey() {
  const keyData = JSON.parse(localStorage.getItem('keyData'));

  if (keyData) {
    const now = Date.now();
    if (keyData.expires > now) {
      document.getElementById('key').textContent = keyData.key;
    } else {
      localStorage.removeItem('keyData');
      generateAndDisplayNewKey();
    }
  } else {
    generateAndDisplayNewKey();
  }
}

function generateAndDisplayNewKey() {
  const newKey = generateKey();
  const expirationTime = Date.now() + 86400000;
  localStorage.setItem('keyData', JSON.stringify({ key: newKey, expires: expirationTime }));
  document.getElementById('key').textContent = newKey;
}

function copyKey() {
  const key = document.getElementById('key').textContent;
  navigator.clipboard.writeText(key)
    .then(() => alert("Key copied!"))
    .catch(() => alert("Failed to copy the key."));
}

window.onload = loadKey;
