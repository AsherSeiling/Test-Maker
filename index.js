let questions_id = [];
let answers_id = [];

// Function to make the test
let leter_answer = [];
let questions = [];
let answers1 = [];
function create_test(){
    for (i in questions_id){
        questions.push($("#" + questions_id[i]).val());
        answers1.push($("#" + answers_id[i]).val());
    };
    console.log(questions);
    $("#input_questions").html("");
    $("button").hide();
    let output_html = "";
    let counter = 0;
    for (i in questions){
        let leters = "ABCD";
        counter += 1;
        output_html += "<p>" + counter.toString() + ": " + questions[i] + "</p>";
        let random = Math.floor((Math.random() * 4) + 0);
        let correct_anser = leters[random];
        leter_answer.push(correct_anser);
        for (x in leters){
            if (leters[x] == correct_anser){
                output_html += "<p style=\"margin-left: 15pt;\">" + leters[x] + ". " + answers1[i] + "</p>"
            }
            else{
                random = Math.floor((Math.random() * (questions.length)) + 0);
                if (answers1[random] == answers1[i]){
                    random = Math.floor((Math.random() * (questions.length)) + 0);
                    if (answers1[random] == answers1[i]){
                        random = Math.floor((Math.random() * (questions.length)) + 0);
                        if (answers1[random] == answers1[i]){
                            random = Math.floor((Math.random() * (questions.length)) + 0);
                        };
                    };
                };
                output_html += "<p style=\"margin-left: 15pt;\">" + leters[x] + ". " + answers1[random] + "</p>"
            };
            
        };
    };
    $("#test").html(output_html);

};

// Function to handel the creation of new questions
let questions_counter = 0;
function question_load(){
    let questions_html = $("#input_questions").html();
    questions_html += "<div id=\"question" + questions_counter.toString() + "\" class=\"question\"><p>Question " + (questions_counter + 1).toString() + "</p><textarea name=\"question" + questions_counter.toString() + " \"id=\"inquestion" + questions_counter.toString() + "\" cols=\"30\" rows=\"1\" placeholder=\"Put Question here\" oninput=\"textarea_update(" + questions_counter.toString() + ");\"></textarea><br><textarea name=\"answer" + questions_counter.toString() + "\"id=\"answer" + questions_counter.toString() + "\" cols=\"30\" rows=\"1\" placeholder=\"Answer to question here\" oninput=\"textarea_updatean(" + questions_counter.toString() + ");\"></textarea><br><br></div><br>"
    $("#input_questions").html(questions_html);
    window.scrollTo(0,document.body.scrollHeight);
    questions_id.push("inquestion" + questions_counter.toString());
    answers_id.push("answer" + questions_counter.toString());
    questions_counter += 1;
};

// Function to update the text areas
let margin = 30;
let rows1 = 1;
function textarea_update(id){
    let id1 = questions_id[parseInt(id)];
    let text1 = $("#" + id1).val();
    if (text1.length >= margin){
        margin += 34;
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
        margin += 34;
        rows1 += 1;
    }
    else if(text1.length < margin - 35){
        margin = 30;
        rows1 = 1;
    };
    document.getElementById(id2).rows = `${rows1}`;
};

function add_new_questions(){
    let number = $("#new_quesitons_number").val();
    let added = 0;
    let run = true;
    while (run == true){
        added += 1;
        if(added >= number){
            run = false;
        }
        question_load();
    };
};

question_load();