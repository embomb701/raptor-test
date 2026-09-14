'use strict';
//--------------------------------------------------------------------------------
const audio = new Audio('sound/click.mp3');
const playClick = () => {
    try {
        const playback = audio.play()
        if (playback && typeof playback.catch === 'function') {
            playback.catch(() => {});
        }
    } catch (error) {
        // Sound feedback is optional and must never interrupt the test.
    }
};
const rps = 'Raptor Power Systems';

var fname;
var lname;
var date;
var email;
var total;

var answer1;
var answer2;
var answer3;
var answer4;
var answer5;
var answer6;
var answer7;
var answer8;
var answer9;
var answer10;
var answer11;
var answer12;
var answer13;
var answer14;
var answer15;
var answer16;
var answer17;
var answer18;
var answer19;
var answer20;
var answer21;

const scoreArray = [];

const answerReview = [
    {
        question: 1,
        correct: 'c)',
        correctAnswer: 'c) Open switch S1, replace fuses F1 and F2, then close switch S1.',
        explanation: 'The 120 VAC readings across F1 and F2 indicate that both fuses are open. The 0 VAC reading across F3 indicates that F3 is still good.'
    },
    {
        question: 2,
        correct: 'd)',
        correctAnswer: 'd) 30 minutes.',
        explanation: 'An open battery disables that entire series string. Two 15-minute strings remain available, providing 30 minutes of backup time.'
    },
    {
        question: 3,
        correct: 'b)',
        correctAnswer: 'b) 96 VAC.',
        explanation: 'Transformer voltage follows the turns ratio: 480 × (100 ÷ 500) = 96 VAC.'
    },
    {
        question: 4,
        correct: 'b)',
        correctAnswer: 'b) Diagram B.',
        explanation: 'Diagram B shows an insulated gate controlling the collector-to-emitter current path, which identifies an IGBT.'
    },
    {
        question: 5,
        correct: 'a)',
        correctAnswer: 'a) Farads (shown as “Farets” in the choices).',
        explanation: 'Capacitance is measured in farads, commonly expressed in microfarads or picofarads for practical capacitors.'
    },
    {
        question: 6,
        correct: 'b)',
        correctAnswer: 'b) Decrease.',
        explanation: 'In the series voltage divider, increasing R2 increases total resistance and reduces current, so the voltage drop across the fixed R1 decreases.'
    },
    {
        question: 7,
        correct: 'b)',
        correctAnswer: 'b) DC waveform.',
        explanation: 'The depicted six-device bridge is a three-phase rectifier. It converts the AC input into a rectified DC output.'
    },
    {
        question: 8,
        correct: 'c)',
        correctAnswer: 'c) Impedance.',
        explanation: 'Impedance is the total opposition to AC current and includes both resistance and reactance.'
    },
    {
        question: 9,
        correct: 'd)',
        correctAnswer: 'd) Current flowing times voltage.',
        explanation: 'Electrical power is calculated as P = V × I. For a resistor, the equivalent forms include I²R and V²/R.'
    },
    {
        question: 10,
        correct: 'b)',
        correctAnswer: 'b) A period of 2.50 milliseconds and a frequency of 400 hertz.',
        explanation: 'Frequency is 4,000 cycles ÷ 10 seconds = 400 Hz, and the period is 1 ÷ 400 = 0.0025 seconds, or 2.50 milliseconds.'
    },
    {
        question: 11,
        correct: 'c)',
        correctAnswer: 'c) Close the Bypass Bkr, open the Main Output Bkr, then open and lock out the PDU2 In Bkr and PDU2 Out Bkr (LOTO).',
        explanation: 'Closing the bypass and then opening the Main Output Breaker completes the transfer pair without dropping the critical load. PDU2 can then be isolated under lockout/tagout (LOTO) safely.'
    },
    {
        question: 12,
        correct: 'a)',
        correctAnswer: 'a) The monitoring client connects to the PDU on TCP port 502 and polls its registers.',
        explanation: 'Modbus TCP uses a client/server request-and-response model. The client polls register addresses, and the PDU server responds to those requests.'
    },
    {
        question: 13,
        correct: 'a)',
        correctAnswer: 'a) Set the meter to DC volts and place the leads across +24V and COM.',
        explanation: 'The supply output is 24 VDC, so it must be measured in DC-voltage mode directly across the positive and common output terminals.'
    },
    {
        question: 14,
        correct: 'a)',
        correctAnswer: 'a) Computers and critical loads are commanded to shut down in an orderly sequence.',
        explanation: 'A graceful shutdown lets systems close services and save data in a controlled order instead of losing power abruptly.'
    },
    {
        question: 15,
        correct: 'd)',
        correctAnswer: 'd) All of the above.',
        explanation: 'PDU capacity can be described by real power in kilowatts, apparent power in kilovolt-amperes, and current in amperes.'
    },
    {
        question: 16,
        correct: 'a)',
        correctAnswer: 'a) Verify the cable is de-energized, isolated under LOTO, and discharged.',
        explanation: 'A megger applies a high test voltage. Isolation, lockout/tagout, and discharge of stored capacitive energy are required before connecting it.'
    },
    {
        question: 17,
        correct: 'c)',
        correctAnswer: 'c) Increase.',
        explanation: 'Without the feedback signal, the regulator senses an apparent low-output condition and tends to drive its output higher.'
    },
    {
        question: 18,
        correct: 'c)',
        correctAnswer: 'c) Verify the correct supplying breaker and apply your own properly tagged lockout before proceeding.',
        explanation: 'A note is not proof of an electrically safe work condition. The source must be positively identified and controlled with personal LOTO before work begins.'
    },
    {
        question: 19,
        correct: 'd)',
        correctAnswer: 'd) Alpha and Echo are high.',
        explanation: 'Alpha supplies a true input directly to the final OR stage, which is sufficient to produce the Close Permissive output.'
    },
    {
        question: 20,
        correct: 'b)',
        correctAnswer: 'b) 80 kilowatts.',
        explanation: 'Real power equals apparent power times power factor: 100 kVA × 0.8 = 80 kW.'
    },
    {
        question: 21,
        correct: 'a)',
        correctAnswer: 'a) The distance at which a person without PPE may receive a second-degree burn.',
        explanation: 'The arc-flash boundary marks where incident energy reaches the threshold associated with the onset of a second-degree burn on unprotected skin.'
    }
];

const getIncorrectAnswerReviews = (selectedAnswers) => answerReview
    .filter((item, index) => selectedAnswers[index] !== item.correct)
    .map((item, index) => ({
        ...item,
        selectedAnswer: selectedAnswers[item.question - 1]
    }));

const renderAnswerReview = () => {
    const selectedAnswers = answerReview.map((item) => document.getElementById(`answer${item.question}`).value);
    const incorrectAnswers = getIncorrectAnswerReviews(selectedAnswers);
    const review = document.getElementById('answer-review');

    document.querySelectorAll('.question').forEach((question) => question.classList.remove('question-incorrect'));
    review.replaceChildren();
    review.classList.remove('hidden');

    const heading = document.createElement('h3');
    heading.textContent = incorrectAnswers.length === 0 ? '✅ All Answers Correct' : 'Answer Review';
    review.appendChild(heading);

    if (incorrectAnswers.length === 0) {
        const message = document.createElement('p');
        message.className = 'review-perfect';
        message.textContent = 'Excellent work. No incorrect answers to review.';
        review.appendChild(message);
    } else {
        const summary = document.createElement('p');
        summary.className = 'review-summary';
        summary.textContent = incorrectAnswers.length === 1
            ? '1 answer needs review.'
            : `${incorrectAnswers.length} answers need review.`;
        review.appendChild(summary);

        incorrectAnswers.forEach((item) => {
            document.getElementById(`question${item.question}`).classList.add('question-incorrect');

            const card = document.createElement('article');
            card.className = 'answer-review-card';

            const title = document.createElement('h4');
            title.textContent = `${item.question === 21 ? 'Bonus Question' : `Question ${item.question}`} — Incorrect`;
            card.appendChild(title);

            const selected = document.createElement('p');
            selected.className = 'review-selected';
            selected.innerHTML = `<strong>Your answer:</strong> ${item.selectedAnswer}`;
            card.appendChild(selected);

            const correct = document.createElement('p');
            correct.className = 'review-correct';
            correct.innerHTML = `<strong>Correct answer:</strong> ${item.correctAnswer}`;
            card.appendChild(correct);

            const explanation = document.createElement('p');
            explanation.className = 'review-explanation';
            explanation.innerHTML = `<strong>Why:</strong> ${item.explanation}`;
            card.appendChild(explanation);

            review.appendChild(card);
        });
    }

    review.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

var total = 0;
//--------------------------------------------------------------------------------

// Gets first answer and tests against correct answer
const getAnswer1 = () => {
        const a1 = document.getElementById('answer1').value;
        playClick();
        if (a1 == 'c)') {
            answer1 = 5;
            scoreArray[0] = '✔';
        } else {
            (answer1 = 0);
            scoreArray[0] = '❌';
        }
};

const getAnswer2 = () => {
    const a2 = document.getElementById('answer2').value;
    playClick();
    if (a2 == 'd)') {
        answer2 = 5;
        scoreArray[1] = '✔';
    } else {
        (answer2 = 0);
        scoreArray[1] = '❌';
    }
};

const getAnswer3 = () => {
    const a3 = document.getElementById('answer3').value;
    playClick();
    if (a3 == 'b)') {
        answer3 = 5;
        scoreArray[2] = '✔';
    } else {
        (answer3 = 0);
        scoreArray[2] = '❌';
    }
};

const getAnswer4 = () => {
    const a4 = document.getElementById('answer4').value;
    playClick();
    if (a4 == 'b)') {
        answer4 = 5;
        scoreArray[3] = '✔';
    } else {
        (answer4 = 0);
        scoreArray[3] = '❌';
    }
};

const getAnswer5 = () => {
    const a5 = document.getElementById('answer5').value;
    playClick();
    if (a5 == 'a)') {
        answer5 = 5;
        scoreArray[4] = '✔';
    } else {
        (answer5 = 0);
        scoreArray[4] = '❌';
    }
};

const getAnswer6 = () => {
    const a6 = document.getElementById('answer6').value;
    playClick();
    if (a6 == 'b)') {
        answer6 = 5;
        scoreArray[5] = '✔';
    } else {
        (answer6 = 0);
        scoreArray[5] = '❌';
    }
};

const getAnswer7 = () => {
    const a7 = document.getElementById('answer7').value;
    playClick();
    if (a7 == 'b)') {
        answer7 = 5;
        scoreArray[6] = '✔';
    } else {
        (answer7 = 0);
        scoreArray[6] = '❌';
    }
};

const getAnswer8 = () => {
    const a8 = document.getElementById('answer8').value;
    playClick();
    if (a8 == 'c)') {
        answer8 = 5;
        scoreArray[7] = '✔';
    } else {
        (answer8 = 0);
        scoreArray[7] = '❌';
    }
};

const getAnswer9 = () => {
    const a9 = document.getElementById('answer9').value;
    playClick();
    if (a9 == 'd)') {
        answer9 = 5;
        scoreArray[8] = '✔';
    } else {
        (answer9 = 0);
        scoreArray[8] = '❌';
    }
};

const getAnswer10 = () => {
    const a10 = document.getElementById('answer10').value;
    playClick();
    if (a10 == 'b)') {
        answer10 = 5;
        scoreArray[9] = '✔';
    } else {
        (answer10 = 0);
        scoreArray[9] = '❌';
    }
};

const getAnswer11 = () => {
    const a11 = document.getElementById('answer11').value;
    playClick();
    if (a11 == 'c)') {
        answer11 = 5;
        scoreArray[10] = '✔';
    } else {
        (answer11 = 0);
        scoreArray[10] = '❌';
    }
};

const getAnswer12 = () => {
    const a12 = document.getElementById('answer12').value;
    playClick();
    if (a12 == 'a)') {
        answer12 = 5;
        scoreArray[11] = '✔';
    } else {
        (answer12 = 0);
        scoreArray[11] = '❌';
    }
};

const getAnswer13 = () => {
    const a13 = document.getElementById('answer13').value;
    playClick();
    if (a13 == 'a)') {
        answer13 = 5;
        scoreArray[12] = '✔';
    } else {
        (answer13 = 0);
        scoreArray[12] = '❌';
    }
};

const getAnswer14 = () => {
    const a14 = document.getElementById('answer14').value;
    playClick();
    if (a14 == 'a)') {
        answer14 = 5;
        scoreArray[13] = '✔';
    } else {
        (answer14 = 0);
        scoreArray[13] = '❌';
    }
};

const getAnswer15 = () => {
    const a15 = document.getElementById('answer15').value;
    playClick();
    if (a15 == 'd)') {
        answer15 = 5;
        scoreArray[14] = '✔';
    } else {
        (answer15 = 0);
        scoreArray[14] = '❌';
    }
};

const getAnswer16 = () => {
    const a16 = document.getElementById('answer16').value;
    playClick();
    if (a16 == 'a)') {
        answer16 = 5;
        scoreArray[15] = '✔';
    } else {
        (answer16 = 0);
        scoreArray[15] = '❌';
    }
};

const getAnswer17 = () => {
    const a17 = document.getElementById('answer17').value;
    playClick();
    if (a17 == 'c)') {
        answer17 = 5;
        scoreArray[16] = '✔';
    } else {
        (answer17 = 0);
        scoreArray[16] = '❌';
    }
};

const getAnswer18 = () => {
    const a18 = document.getElementById('answer18').value;
    playClick();
    if (a18 == 'c)') {
        answer18 = 5;
        scoreArray[17] = '✔';
    } else {
        (answer18 = 0);
        scoreArray[17] = '❌';
    }
};

const getAnswer19 = () => {
    const a19 = document.getElementById('answer19').value;
    playClick();
    if (a19 == 'd)') {
        answer19 = 5;
        scoreArray[18] = '✔';
    } else {
        (answer19 = 0);
        scoreArray[18] = '❌';
    }
};

const getAnswer20 = () => {
    const a20 = document.getElementById('answer20').value;
    playClick();
    if (a20 == 'b)') {
        answer20 = 5;
        scoreArray[19] = '✔';
    } else {
        (answer20 = 0);
        scoreArray[19] = '❌';
    }
};

const getAnswer21 = () => {
    const a21 = document.getElementById('answer21').value;
    playClick();
    if (a21 == 'a)') {
        answer21 = 5;
        scoreArray[20] = '✔';
    } else {
        (answer21 = 0);
        scoreArray[20] = '❌';
    }
};

const totalScore = () => {
        total = answer1 + answer2 + answer3 + answer4 + answer5 + answer6 + answer7 + answer8 + answer9
            + answer10 + answer11 + answer12 + answer13 + answer14 + answer15  + answer16
            + answer17 + answer18 + answer19 + answer20 + answer21;
}

const saveStaticDataToFile = () => {
    var blob = new Blob([`Candidate ${fname} ${lname} ${date} score ${total}
question 1, ${scoreArray[0]}
question 2, ${scoreArray[1]}
question 3, ${scoreArray[2]}
question 4, ${scoreArray[3]}
question 5, ${scoreArray[4]}
question 6, ${scoreArray[5]}
question 7, ${scoreArray[6]}
question 8, ${scoreArray[7]}
question 9, ${scoreArray[8]}
question 10, ${scoreArray[9]}
question 11, ${scoreArray[10]}
question 12, ${scoreArray[11]}
question 13, ${scoreArray[12]}
question 14, ${scoreArray[13]}
question 15, ${scoreArray[14]}
question 16, ${scoreArray[15]}
question 17, ${scoreArray[16]}
question 18, ${scoreArray[17]}
question 19, ${scoreArray[18]}
question 20, ${scoreArray[19]}
question 21, ${scoreArray[20]}`],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "static.txt");
}

const emailResults = () => {
    var link = "mailto:faiello@raptorpowersystems.com"
        + "?subject=" + encodeURIComponent(`Candidate ${ fname } ${ lname } test results `)
        + "&body=" + encodeURIComponent(`Candidate ${fname} ${lname} ${date} ${email} score ${total} 
question 1, ${scoreArray[0]}
question 2, ${scoreArray[1]}
question 3, ${scoreArray[2]}
question 4, ${scoreArray[3]} 
question 5, ${scoreArray[4]}
question 6, ${scoreArray[5]}
question 7, ${scoreArray[6]}
question 8, ${scoreArray[7]} 
question 9, ${scoreArray[8]}
question 10, ${scoreArray[9]}
question 11, ${scoreArray[10]}
question 12, ${scoreArray[11]}
question 13, ${scoreArray[12]}
question 14, ${scoreArray[13]}
question 15, ${scoreArray[14]}
question 16, ${scoreArray[15]}
question 17, ${scoreArray[16]}
question 18, ${scoreArray[17]}
question 19, ${scoreArray[18]}
question 20, ${scoreArray[19]}
question 21, ${scoreArray[20]}`)
            ;
        window.location.href = link;
}

const getApplicantInfo = () => {
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    date = document.getElementById('date').value;
    email = document.getElementById('email').value;
};

const printForm = () => {
    getApplicantInfo();
        //Prints test, saves data and emails results.
        totalScore();
        playClick();
        

        if (isNaN(total)) {
            alert('Please ensure all questions are answered');
        } else {
            totalScore();
            playClick();

            const submitButton = document.getElementById('submit');
            submitButton.disabled = true;
            document.getElementById('a1').innerHTML = scoreArray[0];
            document.getElementById('a2').innerHTML = scoreArray[1];
            document.getElementById('a3').innerHTML = scoreArray[2];
            document.getElementById('a4').innerHTML = scoreArray[3];
            document.getElementById('a5').innerHTML = scoreArray[4];
            document.getElementById('a6').innerHTML = scoreArray[5];
            document.getElementById('a7').innerHTML = scoreArray[6];
            document.getElementById('a8').innerHTML = scoreArray[7];
            document.getElementById('a9').innerHTML = scoreArray[8];
            document.getElementById('a10').innerHTML = scoreArray[9];
            document.getElementById('a11').innerHTML = scoreArray[10];
            document.getElementById('a12').innerHTML = scoreArray[11];
            document.getElementById('a13').innerHTML = scoreArray[12];
            document.getElementById('a14').innerHTML = scoreArray[13];
            document.getElementById('a15').innerHTML = scoreArray[14];
            document.getElementById('a16').innerHTML = scoreArray[15];
            document.getElementById('a17').innerHTML = scoreArray[16];
            document.getElementById('a18').innerHTML = scoreArray[17];
            document.getElementById('a19').innerHTML = scoreArray[18];
            document.getElementById('a20').innerHTML = scoreArray[19];
            document.getElementById('a21').innerHTML = scoreArray[20];
            submitButton.innerHTML = `🏫 Final score ${total}`;
            renderAnswerReview();
            emailResults();

            //  window.print();
        }
};