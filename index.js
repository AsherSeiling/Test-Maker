let questions_id = [];
let answers_id = [];

// Function to handel the creation of new questions
let questions_counter = 1;
let questions_html = "";
function question_load(){
    questions_html += "<div id=\"question" + questions_counter.toString() + "\" class=\"question\"><p>Question " + questions_counter.toString() + "</p><textarea name=\"question" + questions_counter.toString() + " \"id=\"inquestion" + questions_counter.toString() + "\" cols=\"30\" rows=\"1\" placeholder=\"Put Question here\" oninput=\"textarea_update(" + questions_counter.toString() + ");\"></textarea><br><textarea name=\"answer" + questions_counter.toString() + "\"id=\"answer" + questions_counter.toString() + "\" cols=\"30\" rows=\"1\" placeholder=\"Answer to question here\" oninput=\"textarea_updatean(" + questions_counter.toString() + ");\"></textarea><br><br><button onclick=\"question_load(" + questions_counter.toString() + ");\">New Question</button></div><br>"
    $("#input_questions").html(questions_html);
    questions_counter += 1;
    window.scrollTo(0,document.body.scrollHeight);
    questions_id.push("inquestion" + questions_counter.toString());
    answers_id.push("answer" + questions_counter.toString());
};



// Function to update the text areas
let margin = 30;
let rows1 = 1;
function textarea_update(id){
    let id1 = questions_id[id];
    let text1 = $("#" + id1).val();
    if (text1.length >= margin){
        margin += 35;
        rows1 += 1;
    }
    else if(text1.length < margin - 35){
        margin = 30;
        rows1 = 1;
    };
    document.getElementById(id1).rows = `${rows1}`;
};
margin = 30;
rows1 = 1;
function textarea_updatean(id){
    let id2 = answers_id[id]; 
    let text1 = $("#" + id2).val();
    if (text1.length >= margin){
        margin += 35;
        rows1 += 1;
    }
    else if(text1.length < margin - 35){
        margin = 30;
        rows1 = 1;
    };
    document.getElementById(id2).rows = `${rows1}`;
};
question_load();