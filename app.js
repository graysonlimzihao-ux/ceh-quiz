let currentSet = "1";
let answers = {};
let currentQuestions = [];
let isChecked = false;
let timeLeft = 4 * 60 * 60;
let timerInterval;

// 初始化 Set 选择器
document.querySelectorAll('.set-option').forEach(opt => {
    opt.addEventListener('click', function() {
        document.querySelectorAll('.set-option').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        currentSet = this.dataset.set;
    });
});

function initiateExam() {
    if (!EXAM_DATA[currentSet] || EXAM_DATA[currentSet].length === 0) {
        alert("This set is currently empty."); return;
    }
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('mainLayout').style.display = 'flex';
    
    currentQuestions = EXAM_DATA[currentSet];
    // 从本地存储加载进度
    answers = JSON.parse(localStorage.getItem(`ceh_s${currentSet}_progress`)) || {};
    
    render();
    updateStats();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            isChecked = true;
            showEndScreen();
        }
    }, 1000);
}

function updateTimerUI() {
    const h = Math.floor(timeLeft / 3600).toString().padStart(2,'0');
    const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2,'0');
    const s = (timeLeft % 60).toString().padStart(2,'0');
    document.getElementById('timer').textContent = `${h}:${m}:${s}`;
}

function render() {
    let html = '';
    let mapHtml = '';
    currentQuestions.forEach((q, idx) => {
        const qid = q.q;
        html += `
            <div class="question" id="q_${qid}">
                <div style="color:var(--text2); font-size:0.75rem;">ANALYSIS_OBJECT: ${idx+1}</div>
                <div style="font-size:1.1rem; margin:15px 0; line-height:1.6;">${q.question}</div>
                <div class="options">
                    ${q.options.map((opt, i) => {
                        const lbl = String.fromCharCode(65+i);
                        return `<div class="option ${answers[qid]===lbl?'selected':''}" onclick="selectAns(${qid},'${lbl}')" data-qid="${qid}" data-ans="${lbl}">
                            <b style="color:var(--blue)">${lbl}.</b> <span>${opt}</span>
                        </div>`;
                    }).join('')}
                </div>
                <div class="explanation" id="exp_${qid}">
                    <p style="color:var(--green); font-weight:bold; margin-top:0;">[√] CORRECT_REFERENCE: ${q.correct}</p>
                    <p style="margin-bottom:0; font-size:0.9rem; color:var(--text2);">${q.explanation}</p>
                </div>
            </div>`;
        mapHtml += `<div class="map-item ${answers[qid]?'done':''}" id="map_${qid}" onclick="scrollToQ(${qid})">${idx+1}</div>`;
    });
    document.getElementById('questions').innerHTML = html;
    document.getElementById('qMap').innerHTML = mapHtml;
    document.getElementById('total').textContent = currentQuestions.length;
}

function selectAns(qid, lbl) {
    if(isChecked) return;
    answers[qid] = lbl;
    localStorage.setItem(`ceh_s${currentSet}_progress`, JSON.stringify(answers));
    
    document.querySelectorAll(`[data-qid="${qid}"]`).forEach(el => {
        el.classList.toggle('selected', el.dataset.ans === lbl);
    });
    document.getElementById(`map_${qid}`).classList.add('done');
    updateStats();
}

function scrollToQ(qid) {
    document.getElementById(`q_${qid}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function updateStats() {
    const total = currentQuestions.length;
    const answered = Object.keys(answers).length;
    let correct = 0;
    if(isChecked) {
        currentQuestions.forEach(q => { if(answers[q.q] === q.correct) correct++; });
    }
    document.getElementById('answered').textContent = answered;
    document.getElementById('progressBar').style.width = (answered/total*100)+'%';
    
    if(isChecked) {
        document.getElementById('correct').textContent = correct;
        document.getElementById('score').textContent = Math.round(correct/total*100)+'%';
    }
}

document.getElementById('submitBtn').onclick = () => {
    if(confirm("Confirm mission submission? All data will be analyzed.")) {
        clearInterval(timerInterval);
        isChecked = true;
        showEndScreen();
    }
};

function showEndScreen() {
    let correct = 0;
    currentQuestions.forEach(q => { if(answers[q.q] === q.correct) correct++; });
    const score = Math.round(correct/currentQuestions.length*100);
    
    document.getElementById('endScreen').style.display = 'flex';
    document.getElementById('finalScore').textContent = score + "%";
    document.getElementById('finalScore').style.color = score >= 70 ? 'var(--green)' : 'var(--red)';
    document.getElementById('resultDetails').textContent = `SUCCESSFUL_HACKS: ${correct} / TOTAL_TARGETS: ${currentQuestions.length}`;
}

function closeResultAndReview() {
    document.getElementById('endScreen').style.display = 'none';
    
    currentQuestions.forEach(q => {
        const qid = q.q;
        const isCorrect = answers[qid] === q.correct;
        
        // 显示解析
        document.getElementById(`exp_${qid}`).classList.add('show');
        
        // 标记选项
        document.querySelectorAll(`[data-qid="${qid}"]`).forEach(el => {
            if(el.dataset.ans === q.correct) el.classList.add('correct');
            else if(answers[qid] === el.dataset.ans) el.classList.add('wrong');
        });

        // 核心修改：更新右侧地图颜色
        const mapItem = document.getElementById(`map_${qid}`);
        if (mapItem) {
            mapItem.classList.remove('done');
            if (isCorrect) {
                mapItem.classList.add('map-correct');
            } else {
                mapItem.classList.add('map-wrong');
            }
        }
    });
    updateStats();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('resetBtn').onclick = () => {
    if(confirm("Abort mission? Progress will be lost.")) {
        localStorage.removeItem(`ceh_s${currentSet}_progress`);
        location.reload();
    }
};