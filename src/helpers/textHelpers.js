const truncate = (string, length) => {
  if (string.length > length) {
    return `${string.substring(0, length)} ...`;
  }
  return string;
};

export const escapeHtml = (unsafe) => unsafe
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;')
  .replace(/[^\w\s]/gi, '');

export const decodeHtml = (html) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

export default truncate;
