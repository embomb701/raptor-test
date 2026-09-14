'use strict';
//--------------------------------------------------------------------------------
const audio = new Audio('sound/click.mp3');
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

var total = 0;
//--------------------------------------------------------------------------------

// Gets first answer and tests against correct answer
const getAnswer1 = () => {
        const a1 = document.getElementById('answer1').value;
        audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
    audio.play();
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
        audio.play();
        

        if (isNaN(total)) {
            alert('Please ensure all questions are answered');
        } else {
            totalScore();
            audio.play();

            document.getElementById('submit').style.visibility = 'hidden';
            emailResults();
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
            document.getElementById('submit').innerHTML = `🏫 Final score ${total}`;

            //  window.print();
        }
};