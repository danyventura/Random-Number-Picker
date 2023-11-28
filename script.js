const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
const button = document.querySelector('.btn');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  console.log(e);
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});

button.addEventListener('click', (e) => {
  const textareaNums = textarea.value;
  createTags(textareaNums);

  randomSelect();

  clearTextarea();
});

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 50;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}

const list = [];
for (let i = 1; i <= 500; i++) {
  list.push(i);
}

// Set the value to the list
textarea.value = list.join(',');

function clearTextarea() {
  textarea.value = '';
  textarea.classList.add('hidden');
}
