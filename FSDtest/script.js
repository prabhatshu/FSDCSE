const correctAnswers = {
    q1: 'c',
    q2: 'c',
    q3: 'd',
    q4: 'd',
    q5: 'b'
};

let currentContent = 1;

function showContent(contentNumber) {
    document.querySelectorAll('.content, .content2, .content3, .content4, .content5')
        .forEach((content, index) => {
            content.style.display = (index + 1 === contentNumber) ? 'block' : 'none';
        });
}

function next() {
    if (currentContent < 5) {
        currentContent++;
        showContent(currentContent);
    }
}

function prev() {
    if (currentContent > 1) {
        currentContent--;
        showContent(currentContent);
    }
}

function calculateScore() {
    let score = 0;

    for (let key in correctAnswers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === correctAnswers[key]) {
            score++;
        }
    }


    document.getElementById('score').innerText = score;
    document.getElementById('result').style.display = 'block';

    document.querySelector('.next').style.display = 'none';
    document.querySelector('.prev').style.display = 'none';
}

window.onload = () => showContent(1);
