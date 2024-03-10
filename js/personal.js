const personalElement = document.getElementById('personal');
const rowCount = localStorage.getItem('rowCount');

if (personalElement && rowCount) {
    personalElement.textContent = rowCount;
}
