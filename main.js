const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('happy');
content.textContent = 'This is the beginning';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('red');
paragraph.textContent = 'Hey I am red';

container.appendChild(paragraph);

const text = document.createElement('h3');
text.classList.add('happy');
text.textContent = 'I am a blue h3';

container.appendChild(text);

