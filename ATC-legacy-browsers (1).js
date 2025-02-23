/************ 
 * Atc *
 ************/


// store info about the experiment session:
let expName = 'ATC';  // from the Builder filename that created this script
let expInfo = {
    'Memorable Code': '',
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from selectors
let which_condition = Math.floor(Math.random() * 8);
var expert
var positive
if (((which_condition === 0) || (which_condition === 1))) {
    expert = "AI";
    positive = true;
} else {
    if (((which_condition === 2) || (which_condition === 3))) {
        expert = "AI";
        positive = false;
    } else {
        if (((which_condition === 4) || (which_condition === 5))) {
            expert = "Human";
            positive = true;
        } else {
            if (((which_condition === 6) || (which_condition === 7))) {
                expert = "Human";
                positive = false;
            } else {
                if ((which_condition === 8)) {
                    expert = "None";
                    positive = true;
                } else {
                    if ((which_condition === 9)) {
                        expert = "None";
                        positive = false;
                    }
                }
            }
        }
    }
}




let coords = [(- 0.65), 0.65];
let side1 = "right";
let side2 = "left";
let expert_flip = false;
if ((Math.floor(Math.random() * 2) === 1)) {
    coords = [0.65, (- 0.65)];
    side1 = "left";
    side2 = "right";
    expert_flip = true;
}
// tests = number of 2-plane pairs, actual number of planes will be double tests
let tests = 6;
let test_interval = 15;

let plane_col = ["#FFFFFF","#4845BD","#E062FF"];
let text_1 = (("Once your session begins, you'll have " + test_interval) + " seconds to select an option, but here you can take as long as you like. When an aircraft first appears, it will be white. If you click on the plane its information will appear at the top of the screen, try this now.");
let text_2 = "When you first select an aircraft, it will appear blue, and its information will populate the bar at the top of the screen. After you select an option, the plane will change colour again. Try and pick the correct option for this aircraft, then press next when you're ready.";
var tip_text = text_1;

// Run 'Before Experiment' code from neutral_loader
var test_play_1 = false;
var test_play_2 = false;
var test_play_3 = false;
var test_play_4 = false;
var test_play_5 = false;
var test_play_6 = false;
let n_lines = ["Lines/Neutral/Masc/Neutral-M-001.wav", "Lines/Neutral/Masc/Neutral-M-002.wav", "Lines/Neutral/Masc/Neutral-M-003.wav", "Lines/Neutral/Fem/Neutral-F-001.wav", "Lines/Neutral/Fem/Neutral-F-002.wav", "Lines/Neutral/Fem/Neutral-F-003.wav"];

// Run 'Before Experiment' code from setup
let m_neg = ["Lines/Negative/Masc/Negative-M-001.wav", "Lines/Negative/Masc/Negative-M-002.wav", "Lines/Negative/Masc/Negative-M-003.wav", "Lines/Negative/Masc/Negative-M-004.wav", "Lines/Negative/Masc/Negative-M-005.wav", "Lines/Negative/Masc/Negative-M-006.wav", "Lines/Negative/Masc/Negative-M-007.wav", "Lines/Negative/Masc/Negative-M-008.wav", "Lines/Negative/Masc/Negative-M-009.wav", "Lines/Negative/Masc/Negative-M-010.wav", "Lines/Negative/Masc/Negative-M-011.wav", "Lines/Negative/Masc/Negative-M-012.wav", "Lines/Negative/Masc/Negative-M-013.wav", "Lines/Negative/Masc/Negative-M-014.wav", "Lines/Negative/Masc/Negative-M-015.wav", "Lines/Negative/Masc/Negative-M-016.wav"];
let f_neg = ["Lines/Negative/Fem/Negative-F-001.wav", "Lines/Negative/Fem/Negative-F-002.wav", "Lines/Negative/Fem/Negative-F-003.wav", "Lines/Negative/Fem/Negative-F-004.wav", "Lines/Negative/Fem/Negative-F-005.wav", "Lines/Negative/Fem/Negative-F-006.wav", "Lines/Negative/Fem/Negative-F-007.wav", "Lines/Negative/Fem/Negative-F-008.wav", "Lines/Negative/Fem/Negative-F-009.wav", "Lines/Negative/Fem/Negative-F-010.wav", "Lines/Negative/Fem/Negative-F-011.wav", "Lines/Negative/Fem/Negative-F-012.wav", "Lines/Negative/Fem/Negative-F-013.wav", "Lines/Negative/Fem/Negative-F-014.wav", "Lines/Negative/Fem/Negative-F-015.wav", "Lines/Negative/Fem/Negative-F-016.wav"];
let m_pos = ["Lines/Positive/Masc/Positive-M-001.wav", "Lines/Positive/Masc/Positive-M-002.wav", "Lines/Positive/Masc/Positive-M-003.wav", "Lines/Positive/Masc/Positive-M-004.wav", "Lines/Positive/Masc/Positive-M-005.wav", "Lines/Positive/Masc/Positive-M-006.wav", "Lines/Positive/Masc/Positive-M-007.wav", "Lines/Positive/Masc/Positive-M-008.wav", "Lines/Positive/Masc/Positive-M-009.wav", "Lines/Positive/Masc/Positive-M-010.wav", "Lines/Positive/Masc/Positive-M-011.wav", "Lines/Positive/Masc/Positive-M-012.wav", "Lines/Positive/Masc/Positive-M-013.wav", "Lines/Positive/Masc/Positive-M-014.wav", "Lines/Positive/Masc/Positive-M-015.wav", "Lines/Positive/Masc/Positive-M-016.wav"];
let f_pos = ["Lines/Positive/Fem/Positive-F-001.wav", "Lines/Positive/Fem/Positive-F-002.wav", "Lines/Positive/Fem/Positive-F-003.wav", "Lines/Positive/Fem/Positive-F-004.wav", "Lines/Positive/Fem/Positive-F-005.wav", "Lines/Positive/Fem/Positive-F-006.wav", "Lines/Positive/Fem/Positive-F-007.wav", "Lines/Positive/Fem/Positive-F-008.wav", "Lines/Positive/Fem/Positive-F-009.wav", "Lines/Positive/Fem/Positive-F-010.wav", "Lines/Positive/Fem/Positive-F-011.wav", "Lines/Positive/Fem/Positive-F-012.wav", "Lines/Positive/Fem/Positive-F-013.wav", "Lines/Positive/Fem/Positive-F-014.wav", "Lines/Positive/Fem/Positive-F-015.wav", "Lines/Positive/Fem/Positive-F-016.wav"];

var selected = "None";

var p1c = plane_col[0]
var p2c = plane_col[0]
// Run 'Before Experiment' code from move_planes
let ti = (test_interval * 60);
var p1_kick = true;
let p2_kick = (ti / 2);
var p2_timer = 0;
let ticker1 = ti;
let ticker2 = ti;
let x = [0.282, 0.282, (- 0.282), (- 0.282), (- 0.38), 0.38, (- 0.06), 0.06, 0.19, (- 0.19), 0.399, (- 0.399)];
let y = [(- 0.282), 0.282, (- 0.282), 0.282, 0.125, (- 0.125), 0.395, (- 0.395), 0.35, (- 0.35), 0.015, (- 0.015)];
let choice1 = "";
let choice2 = "";
let chance1 = Math.floor(Math.random() * 12);
let chance2 = Math.floor(Math.random() * 12);
let x1 = 0;
let y1 = 0;
let x1_change = 0;
let y1_change = 0;
let x2 = 0;
let y2 = 0;
let x2_change = 0;
let y2_change = 0;
let size = ["Small", "Large"];
let aod = ["3", "5"];
let soa = ["270", "400"];
let size_chance1 = Math.floor(Math.random() * 2);
let aod_chance1 = Math.floor(Math.random() * 2);
let soa_chance1 = Math.floor(Math.random() * 2);
let size_chance2 = Math.floor(Math.random() * 2);
let aod_chance2 = Math.floor(Math.random() * 2);
let soa_chance2 = Math.floor(Math.random() * 2);
let suggestion1 = "";
let suggestion2 = "";
var suggestion = "";
let correct = 0;
var tests_done1 = -1;
var tests_done2 = -1;
var btn_boxes_op = [0, 0, 0];
var btn_boxes = [secret_box_2, secret_box_2, secret_box_2];
var stat_check = ["", "", ""];

var answers = [];
var a_used = [];
var correct_answers = [];
var given_answers = [];
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(intro_1RoutineBegin());
flowScheduler.add(intro_1RoutineEachFrame());
flowScheduler.add(intro_1RoutineEnd());
flowScheduler.add(intro_2RoutineBegin());
flowScheduler.add(intro_2RoutineEachFrame());
flowScheduler.add(intro_2RoutineEnd());
flowScheduler.add(demo_radarRoutineBegin());
flowScheduler.add(demo_radarRoutineEachFrame());
flowScheduler.add(demo_radarRoutineEnd());
flowScheduler.add(demo_radar_2RoutineBegin());
flowScheduler.add(demo_radar_2RoutineEachFrame());
flowScheduler.add(demo_radar_2RoutineEnd());
flowScheduler.add(demo_radar_3RoutineBegin());
flowScheduler.add(demo_radar_3RoutineEachFrame());
flowScheduler.add(demo_radar_3RoutineEnd());
flowScheduler.add(intro_3RoutineBegin());
flowScheduler.add(intro_3RoutineEachFrame());
flowScheduler.add(intro_3RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(outroRoutineBegin());
flowScheduler.add(outroRoutineEachFrame());
flowScheduler.add(outroRoutineEnd());
flowScheduler.add(quitPsychoJS, "Thank you for your participation, you may now close this window and return to Qualtrics. You may need to press 'Esc' to exit this window.", true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, "Thank you for your participation, you may now close this window and return to Qualtrics. You may need to press 'Esc' to exit this window.", false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'tbibgs_conditions.csv', 'path': 'tbibgs_conditions.csv'},
    {'name': 'table.png', 'path': 'table.png'},
    {'name': 'radar.png', 'path': 'radar.png'},
    {'name': 'Happy.ogg', 'path': 'Happy.ogg'},
    {'name': 'Happy.ogg', 'path': 'Happy.ogg'},
    {'name': 'Lines/Neutral/Fem/Neutral-F-001.wav', 'path': 'Lines/Neutral/Fem/Neutral-F-001.wav'},
    {'name': 'Lines/Neutral/Fem/Neutral-F-002.wav', 'path': 'Lines/Neutral/Fem/Neutral-F-002.wav'},
    {'name': 'Lines/Neutral/Fem/Neutral-F-003.wav', 'path': 'Lines/Neutral/Fem/Neutral-F-003.wav'},
    {'name': 'Lines/Neutral/Masc/Neutral-M-001.wav', 'path': 'Lines/Neutral/Masc/Neutral-M-001.wav'},
    {'name': 'Lines/Neutral/Masc/Neutral-M-002.wav', 'path': 'Lines/Neutral/Masc/Neutral-M-002.wav'},
    {'name': 'Lines/Neutral/Masc/Neutral-M-003.wav', 'path': 'Lines/Neutral/Masc/Neutral-M-003.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-014.wav', 'path': 'Lines/Positive/Fem/Positive-F-014.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-001.wav', 'path': 'Lines/Negative/Masc/Negative-M-001.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-002.wav', 'path': 'Lines/Negative/Masc/Negative-M-002.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-003.wav', 'path': 'Lines/Negative/Masc/Negative-M-003.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-004.wav', 'path': 'Lines/Negative/Masc/Negative-M-004.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-005.wav', 'path': 'Lines/Negative/Masc/Negative-M-005.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-006.wav', 'path': 'Lines/Negative/Masc/Negative-M-006.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-007.wav', 'path': 'Lines/Negative/Masc/Negative-M-007.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-008.wav', 'path': 'Lines/Negative/Masc/Negative-M-008.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-009.wav', 'path': 'Lines/Negative/Masc/Negative-M-009.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-010.wav', 'path': 'Lines/Negative/Masc/Negative-M-010.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-011.wav', 'path': 'Lines/Negative/Masc/Negative-M-011.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-012.wav', 'path': 'Lines/Negative/Masc/Negative-M-012.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-013.wav', 'path': 'Lines/Negative/Masc/Negative-M-013.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-014.wav', 'path': 'Lines/Negative/Masc/Negative-M-014.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-015.wav', 'path': 'Lines/Negative/Masc/Negative-M-015.wav'},
    {'name': 'Lines/Negative/Masc/Negative-M-016.wav', 'path': 'Lines/Negative/Masc/Negative-M-016.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-001.wav', 'path': 'Lines/Negative/Fem/Negative-F-001.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-002.wav', 'path': 'Lines/Negative/Fem/Negative-F-002.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-003.wav', 'path': 'Lines/Negative/Fem/Negative-F-003.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-004.wav', 'path': 'Lines/Negative/Fem/Negative-F-004.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-005.wav', 'path': 'Lines/Negative/Fem/Negative-F-005.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-006.wav', 'path': 'Lines/Negative/Fem/Negative-F-006.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-007.wav', 'path': 'Lines/Negative/Fem/Negative-F-007.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-008.wav', 'path': 'Lines/Negative/Fem/Negative-F-008.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-009.wav', 'path': 'Lines/Negative/Fem/Negative-F-009.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-010.wav', 'path': 'Lines/Negative/Fem/Negative-F-010.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-011.wav', 'path': 'Lines/Negative/Fem/Negative-F-011.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-012.wav', 'path': 'Lines/Negative/Fem/Negative-F-012.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-013.wav', 'path': 'Lines/Negative/Fem/Negative-F-013.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-014.wav', 'path': 'Lines/Negative/Fem/Negative-F-014.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-015.wav', 'path': 'Lines/Negative/Fem/Negative-F-015.wav'},
    {'name': 'Lines/Negative/Fem/Negative-F-016.wav', 'path': 'Lines/Negative/Fem/Negative-F-016.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-001.wav', 'path': 'Lines/Positive/Masc/Positive-M-001.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-002.wav', 'path': 'Lines/Positive/Masc/Positive-M-002.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-003.wav', 'path': 'Lines/Positive/Masc/Positive-M-003.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-004.wav', 'path': 'Lines/Positive/Masc/Positive-M-004.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-005.wav', 'path': 'Lines/Positive/Masc/Positive-M-005.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-006.wav', 'path': 'Lines/Positive/Masc/Positive-M-006.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-007.wav', 'path': 'Lines/Positive/Masc/Positive-M-007.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-008.wav', 'path': 'Lines/Positive/Masc/Positive-M-008.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-009.wav', 'path': 'Lines/Positive/Masc/Positive-M-009.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-010.wav', 'path': 'Lines/Positive/Masc/Positive-M-010.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-011.wav', 'path': 'Lines/Positive/Masc/Positive-M-011.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-012.wav', 'path': 'Lines/Positive/Masc/Positive-M-012.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-013.wav', 'path': 'Lines/Positive/Masc/Positive-M-013.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-014.wav', 'path': 'Lines/Positive/Masc/Positive-M-014.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-015.wav', 'path': 'Lines/Positive/Masc/Positive-M-015.wav'},
    {'name': 'Lines/Positive/Masc/Positive-M-016.wav', 'path': 'Lines/Positive/Masc/Positive-M-016.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-001.wav', 'path': 'Lines/Positive/Fem/Positive-F-001.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-002.wav', 'path': 'Lines/Positive/Fem/Positive-F-002.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-003.wav', 'path': 'Lines/Positive/Fem/Positive-F-003.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-004.wav', 'path': 'Lines/Positive/Fem/Positive-F-004.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-005.wav', 'path': 'Lines/Positive/Fem/Positive-F-005.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-006.wav', 'path': 'Lines/Positive/Fem/Positive-F-006.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-007.wav', 'path': 'Lines/Positive/Fem/Positive-F-007.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-008.wav', 'path': 'Lines/Positive/Fem/Positive-F-008.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-009.wav', 'path': 'Lines/Positive/Fem/Positive-F-009.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-010.wav', 'path': 'Lines/Positive/Fem/Positive-F-010.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-011.wav', 'path': 'Lines/Positive/Fem/Positive-F-011.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-012.wav', 'path': 'Lines/Positive/Fem/Positive-F-012.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-013.wav', 'path': 'Lines/Positive/Fem/Positive-F-013.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-015.wav', 'path': 'Lines/Positive/Fem/Positive-F-015.wav'},
    {'name': 'Lines/Positive/Fem/Positive-F-016.wav', 'path': 'Lines/Positive/Fem/Positive-F-016.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["Memorable Code"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var intro_1Clock;
var td_title;
var task_description_a;
var task_description_h;
var task_description_n;
var continue_button;
var cam;
var mouse;
var intro_2Clock;
var cr_title;
var cr_1;
var cr_2;
var cc_title;
var cc_1;
var cc_2;
var next_button;
var lb_1;
var tip_1;
var rb_1;
var tip_2;
var demo_radarClock;
var lb_2;
var rb_2;
var tb_1;
var radar_demo;
var line_demo;
var rotate;
var dot_demo;
var tip_3;
var db_demo;
var dbb_demo;
var cb_demo;
var cbb_demo;
var lb_demo;
var lbb_demo;
var rt_demo;
var next_button_2;
var demo_radar_2Clock;
var lb_3;
var rb_3;
var tb_2;
var radar_demo_2;
var line_demo_2;
var dot_demo_2;
var advice_demo_2;
var ab_demo;
var at_demo;
var next_button_3;
var db_demo_3;
var dbb_demo_3;
var cb_demo_3;
var cbb_demo_3;
var lb_demo_3;
var lbb_demo_3;
var bb_2;
var tip_4;
var tip_5;
var demo_radar_3Clock;
var lb_4;
var rb_4;
var tb_3;
var radar_demo_3;
var plane_demo;
var plane_demo_2;
var plane_demo_3;
var line_demo_3;
var dot_demo_3;
var advice_demo;
var ab_demo_2;
var at_demo_2;
var secret_box;
var ps_demo;
var db_demo_2;
var dbb_demo_2;
var cb_demo_2;
var cbb_demo_2;
var lb_demo_2;
var lbb_demo_2;
var tip_6_1;
var bb_1;
var tip_6_2;
var next_button_4;
var intro_3Clock;
var tb_4;
var ps_demo_2;
var ps_explainer;
var bn_title;
var bn_explainer;
var play_button_1;
var sound_test_1;
var play_button_2;
var sound_test_2;
var play_button_3;
var sound_test_3;
var play_button_4;
var sound_test_4;
var play_button_5;
var sound_test_5;
var play_button_6;
var sound_test_6;
var next_button_5;
var rulesClock;
var cr_title_2;
var cr_3;
var cr_4;
var cc_title_2;
var cc_3;
var cc_4;
var lb_5;
var rb_5;
var tip_7;
var tip_8;
var begin_button;
var trialClock;
var radar;
var left_box;
var right_box;
var top_box;
var plane;
var plane_2;
var line;
var dot;
var advice;
var advice_button;
var p1_db;
var p2_db;
var divert_box;
var divert_button;
var p1_cb;
var p2_cb;
var circle_box;
var circle_button;
var p1_lb;
var p2_lb;
var land_box;
var land_button;
var plane_stats;
var advisor_title;
var response_title;
var sound_1;
var sound_2;
var sound_3;
var sound_4;
var sound_5;
var sound_6;
var sound_7;
var sound_8;
var sound_9;
var sound_10;
var secret_box_2;
var secret_box_3;
var secret_box_4;
var outroClock;
var ty_title;
var thank_you;
var play_button_7;
var happy;
var next_button_6;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro_1"
  intro_1Clock = new util.Clock();
  td_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'td_title',
    text: 'Task Description:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.08,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  task_description_a = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_description_a',
    text: "Hello there! You are an air traffic controller working at an airport. However, a sudden storm has rendered other airports in your region inoperable, forcing some incoming flights to divert to your airport.\n\nAs an air traffic controller, you must manage the increased landing of incoming planes, whilst maintaining safe operations, by classify the influx of incoming planes to 'Land', 'Circle' or 'Divert' based on rules provided.\n\nAny misclassifications could result in a safety incident such (e.g. a plane landing in unsafe conditions) or operational issues (e.g. passengers experiencing a long wait to disembark).\n\nYou have been provided access to recommendations from an AI expert who was given the same information as yourself, which will be shown on the next screen.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.02)], draggable: false, height: 0.035,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: 0.0,
    depth: -2.0 
  });
  
  task_description_h = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_description_h',
    text: "Hello there! You are an air traffic controller working at an airport. However, a sudden storm has rendered other airports in your region inoperable, forcing some incoming flights to divert to your airport.\n\nAs an air traffic controller, you must manage the increased landing of incoming planes, whilst maintaining safe operations, by classify the influx of incoming planes to 'Land', 'Circle' or 'Divert' based on rules provided.\n\nAny misclassifications could result in a safety incident such (e.g. a plane landing in unsafe conditions) or operational issues (e.g. passengers experiencing a long wait to disembark).\n\nYou have been provided access to recommendations from a Human expert who was given the same information as yourself, which will be shown on the next screen.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.02)], draggable: false, height: 0.035,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: 0.0,
    depth: -3.0 
  });
  
  task_description_n = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_description_n',
    text: "Hello there! You are an air traffic controller working at an airport. However, a sudden storm has rendered other airports in your region inoperable, forcing some incoming flights to divert to your airport.\n\nAs an air traffic controller, you must manage the increased landing of incoming planes, whilst maintaining safe operations, by classify the influx of incoming planes to 'Land', 'Circle' or 'Divert' based on rules provided.\n\nAny misclassifications could result in a safety incident such (e.g. a plane landing in unsafe conditions) or operational issues (e.g. passengers experiencing a long wait to disembark).",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.02)], draggable: false, height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: 0.0,
    depth: -4.0 
  });
  
  continue_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continue_button',
    text: 'Continue',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.05,
    size: [0.3, 0.5],
    ori: 0.0
    ,
    depth: -5
  });
  continue_button.clock = new util.Clock();
  
  cam = new hardware.Camera({
      name:'cam',
      win: psychoJS.window,});
  // Get permission from participant to access their camera
  await cam.authorize()
  // Switch on cam
  await cam.open()
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "intro_2"
  intro_2Clock = new util.Clock();
  cr_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'cr_title',
    text: 'Classification Rules:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.07,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  cr_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cr_1',
    text: 'For each plane, you must determine if it’s attributes are safe or unsafe. Then, classify the plane based on the following rules: \n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.27], draggable: false, height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  cr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cr_2',
    text: 'o  If all 3 attributes are safe = Classify as “Land”\no  If 1 or 2 attributes are safe = Classify as “Circle” \no  If 0 attributes are safe = Classify as “Divert”',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.19], draggable: false, height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  cc_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'cc_title',
    text: 'Classification Criteria:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.07,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  cc_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cc_1',
    text: 'Use the following information to determine if each attribute is safe or unsafe.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.04)], draggable: false, height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  cc_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cc_2', units : undefined, 
    image : 'table.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0), (- 0.27)], 
    draggable: false,
    size : [1.225, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  next_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_button',
    text: 'Next',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0.75, (- 0.4)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -7
  });
  next_button.clock = new util.Clock();
  
  lb_1 = new visual.Rect ({
    win: psychoJS.window, name: 'lb_1', 
    width: [0.4, 0.25][0], height: [0.4, 0.25][1],
    ori: 0.0, 
    pos: [(- 0.65), 0.12], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 4.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -8, 
    interpolate: true, 
  });
  
  tip_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.65), 0.12], draggable: false, height: 0.03,  wrapWidth: 0.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -9.0 
  });
  
  rb_1 = new visual.Rect ({
    win: psychoJS.window, name: 'rb_1', 
    width: [0.4, 0.25][0], height: [0.4, 0.25][1],
    ori: 0.0, 
    pos: [0.65, 0.12], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 4.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -10, 
    interpolate: true, 
  });
  
  tip_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.65, 0.12], draggable: false, height: 0.03,  wrapWidth: 0.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -11.0 
  });
  
  // Initialize components for Routine "demo_radar"
  demo_radarClock = new util.Clock();
  lb_2 = new visual.Rect ({
    win: psychoJS.window, name: 'lb_2', 
    width: [0.4, 0.5][0], height: [0.4, 0.5][1],
    ori: 0.0, 
    pos: [(- 0.65), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  rb_2 = new visual.Rect ({
    win: psychoJS.window, name: 'rb_2', 
    width: [0.4, 0.5][0], height: [0.4, 0.5][1],
    ori: 0.0, 
    pos: [0.65, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  tb_1 = new visual.Rect ({
    win: psychoJS.window, name: 'tb_1', 
    width: [0.9, 0.15][0], height: [0.9, 0.15][1],
    ori: 0.0, 
    pos: [0, 0.5], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  radar_demo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radar_demo', units : undefined, 
    image : 'radar.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.9, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  line_demo = new visual.ShapeStim ({
    win: psychoJS.window, name: 'line_demo', 
    vertices: [[-[0.38, 0.38][0]/2.0, 0], [+[0.38, 0.38][0]/2.0, 0]],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center-left', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  // Run 'Begin Experiment' code from line_spin_demo
  rotate = 0;
  
  dot_demo = new visual.Polygon({
    win: psychoJS.window, name: 'dot_demo', 
    edges: 100, size:[0.02, 0.02],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  tip_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [coords[0], 0], draggable: false, height: 0.03,  wrapWidth: 0.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -7.0 
  });
  
  db_demo = new visual.Rect ({
    win: psychoJS.window, name: 'db_demo', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], 0.15], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -8, 
    interpolate: true, 
  });
  
  dbb_demo = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'dbb_demo',
    text: 'Divert',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], 0.15],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -9
  });
  dbb_demo.clock = new util.Clock();
  
  cb_demo = new visual.Rect ({
    win: psychoJS.window, name: 'cb_demo', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -10, 
    interpolate: true, 
  });
  
  cbb_demo = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cbb_demo',
    text: 'Circle',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], 0],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -11
  });
  cbb_demo.clock = new util.Clock();
  
  lb_demo = new visual.Rect ({
    win: psychoJS.window, name: 'lb_demo', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], (- 0.15)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -12, 
    interpolate: true, 
  });
  
  lbb_demo = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'lbb_demo',
    text: 'Land',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], (- 0.15)],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -13
  });
  lbb_demo.clock = new util.Clock();
  
  rt_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'rt_demo',
    text: 'Your Selection',
    font: 'Arial',
    units: undefined, 
    pos: [coords[1], 0.3], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -14.0 
  });
  
  next_button_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_button_2',
    text: 'Next',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [2, (- 0.4)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -15
  });
  next_button_2.clock = new util.Clock();
  
  // Initialize components for Routine "demo_radar_2"
  demo_radar_2Clock = new util.Clock();
  lb_3 = new visual.Rect ({
    win: psychoJS.window, name: 'lb_3', 
    width: [0.4, 0.5][0], height: [0.4, 0.5][1],
    ori: 0.0, 
    pos: [(- 0.65), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  rb_3 = new visual.Rect ({
    win: psychoJS.window, name: 'rb_3', 
    width: [0.4, 0.5][0], height: [0.4, 0.5][1],
    ori: 0.0, 
    pos: [0.65, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  tb_2 = new visual.Rect ({
    win: psychoJS.window, name: 'tb_2', 
    width: [0.9, 0.15][0], height: [0.9, 0.15][1],
    ori: 0.0, 
    pos: [0, 0.5], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  radar_demo_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radar_demo_2', units : undefined, 
    image : 'radar.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.9, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  line_demo_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'line_demo_2', 
    vertices: [[-[0.38, 0.38][0]/2.0, 0], [+[0.38, 0.38][0]/2.0, 0]],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center-left', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  // Run 'Begin Experiment' code from line_spin_demo_2
  rotate = 0;
  
  dot_demo_2 = new visual.Polygon({
    win: psychoJS.window, name: 'dot_demo_2', 
    edges: 100, size:[0.02, 0.02],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  advice_demo_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'advice_demo_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [coords[0], 0], draggable: false, height: 0.04,  wrapWidth: 0.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: 1.0,
    depth: -7.0 
  });
  
  ab_demo = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ab_demo',
    text: 'Click to Accept Advice',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[0], 0.2],
    letterHeight: 0.025,
    size: [0.35, 0.5],
    ori: 0.0
    ,
    depth: -8
  });
  ab_demo.clock = new util.Clock();
  
  at_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'at_demo',
    text: (expert + " Advisor"),
    font: 'Arial',
    units: undefined, 
    pos: [coords[0], 0.3], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  next_button_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_button_3',
    text: 'Next',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [2, (- 0.4)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -10
  });
  next_button_3.clock = new util.Clock();
  
  db_demo_3 = new visual.Rect ({
    win: psychoJS.window, name: 'db_demo_3', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], 0.15], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -11, 
    interpolate: true, 
  });
  
  dbb_demo_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'dbb_demo_3',
    text: 'Divert',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], 0.15],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -12
  });
  dbb_demo_3.clock = new util.Clock();
  
  cb_demo_3 = new visual.Rect ({
    win: psychoJS.window, name: 'cb_demo_3', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -13, 
    interpolate: true, 
  });
  
  cbb_demo_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cbb_demo_3',
    text: 'Circle',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], 0],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -14
  });
  cbb_demo_3.clock = new util.Clock();
  
  lb_demo_3 = new visual.Rect ({
    win: psychoJS.window, name: 'lb_demo_3', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], (- 0.15)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -15, 
    interpolate: true, 
  });
  
  lbb_demo_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'lbb_demo_3',
    text: 'Land',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], (- 0.15)],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -16
  });
  lbb_demo_3.clock = new util.Clock();
  
  bb_2 = new visual.Rect ({
    win: psychoJS.window, name: 'bb_2', 
    width: [0.8, 0.25][0], height: [0.8, 0.25][1],
    ori: 0.0, 
    pos: [0, (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 4.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -17, 
    interpolate: true, 
  });
  
  tip_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 0.75, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -18.0 
  });
  
  tip_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 0.75, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 0.0,
    depth: -19.0 
  });
  
  // Initialize components for Routine "demo_radar_3"
  demo_radar_3Clock = new util.Clock();
  lb_4 = new visual.Rect ({
    win: psychoJS.window, name: 'lb_4', 
    width: [0.4, 0.5][0], height: [0.4, 0.5][1],
    ori: 0.0, 
    pos: [(- 0.65), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  rb_4 = new visual.Rect ({
    win: psychoJS.window, name: 'rb_4', 
    width: [0.4, 0.5][0], height: [0.4, 0.5][1],
    ori: 0.0, 
    pos: [0.65, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  tb_3 = new visual.Rect ({
    win: psychoJS.window, name: 'tb_3', 
    width: [0.9, 0.15][0], height: [0.9, 0.15][1],
    ori: 0.0, 
    pos: [0, 0.5], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  radar_demo_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radar_demo_3', units : undefined, 
    image : 'radar.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.9, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  plane_demo = new visual.ShapeStim ({
    win: psychoJS.window, name: 'plane_demo', 
    vertices: [[-[0.0577, 0.05][0]/2.0, -[0.0577, 0.05][1]/2.0], [+[0.0577, 0.05][0]/2.0, -[0.0577, 0.05][1]/2.0], [0, [0.0577, 0.05][1]/2.0]],
    ori: 0.0, 
    pos: [(- 0.2), 0.17], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color('#4845BD'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  plane_demo_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'plane_demo_2', 
    vertices: [[-[0.0577, 0.05][0]/2.0, -[0.0577, 0.05][1]/2.0], [+[0.0577, 0.05][0]/2.0, -[0.0577, 0.05][1]/2.0], [0, [0.0577, 0.05][1]/2.0]],
    ori: 0.0, 
    pos: [(- 0.2), 0.17], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color('#E062FF'), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -6, 
    interpolate: true, 
  });
  
  plane_demo_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'plane_demo_3', 
    vertices: [[-[0.0577, 0.05][0]/2.0, -[0.0577, 0.05][1]/2.0], [+[0.0577, 0.05][0]/2.0, -[0.0577, 0.05][1]/2.0], [0, [0.0577, 0.05][1]/2.0]],
    ori: 0.0, 
    pos: [(- 0.2), 0.17], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -7, 
    interpolate: true, 
  });
  
  line_demo_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'line_demo_3', 
    vertices: [[-[0.38, 0.38][0]/2.0, 0], [+[0.38, 0.38][0]/2.0, 0]],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center-left', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -8, 
    interpolate: true, 
  });
  
  // Run 'Begin Experiment' code from line_spin_demo_3
  rotate = 0;
  
  dot_demo_3 = new visual.Polygon({
    win: psychoJS.window, name: 'dot_demo_3', 
    edges: 100, size:[0.02, 0.02],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -10, 
    interpolate: true, 
  });
  
  advice_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'advice_demo',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [coords[0], 0], draggable: false, height: 0.04,  wrapWidth: 0.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: 0.0,
    depth: -11.0 
  });
  
  ab_demo_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ab_demo_2',
    text: 'Click to Accept Advice',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[0], 0.2],
    letterHeight: 0.025,
    size: [0.35, 0.5],
    ori: 0.0
    ,
    depth: -12
  });
  ab_demo_2.clock = new util.Clock();
  
  at_demo_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'at_demo_2',
    text: (expert + " Advisor"),
    font: 'Arial',
    units: undefined, 
    pos: [coords[0], 0.3], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  secret_box = new visual.Rect ({
    win: psychoJS.window, name: 'secret_box', 
    width: [0.4, 0.5][0], height: [0.4, 0.5][1],
    ori: 0.0, 
    pos: [coords[0], 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -14, 
    interpolate: true, 
  });
  
  ps_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'ps_demo',
    text: 'Size: Small | Angle: 3 Degrees | Speed: 400km/h',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.465], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: 0.0,
    depth: -15.0 
  });
  
  db_demo_2 = new visual.Rect ({
    win: psychoJS.window, name: 'db_demo_2', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], 0.15], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -16, 
    interpolate: true, 
  });
  
  dbb_demo_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'dbb_demo_2',
    text: 'Divert',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], 0.15],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -17
  });
  dbb_demo_2.clock = new util.Clock();
  
  cb_demo_2 = new visual.Rect ({
    win: psychoJS.window, name: 'cb_demo_2', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -18, 
    interpolate: true, 
  });
  
  cbb_demo_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cbb_demo_2',
    text: 'Circle',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], 0],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -19
  });
  cbb_demo_2.clock = new util.Clock();
  
  lb_demo_2 = new visual.Rect ({
    win: psychoJS.window, name: 'lb_demo_2', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], (- 0.15)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -20, 
    interpolate: true, 
  });
  
  lbb_demo_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'lbb_demo_2',
    text: 'Land',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], (- 0.15)],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -21
  });
  lbb_demo_2.clock = new util.Clock();
  
  tip_6_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_6_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [coords[0], 0], draggable: false, height: 0.03,  wrapWidth: 0.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 0.0,
    depth: -22.0 
  });
  
  bb_1 = new visual.Rect ({
    win: psychoJS.window, name: 'bb_1', 
    width: [0.8, 0.25][0], height: [0.8, 0.25][1],
    ori: 0.0, 
    pos: [0, (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 4.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -23, 
    interpolate: true, 
  });
  
  tip_6_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_6_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 0.75, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 0.0,
    depth: -24.0 
  });
  
  next_button_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_button_4',
    text: 'Next',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [2, (- 0.4)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -25
  });
  next_button_4.clock = new util.Clock();
  
  // Initialize components for Routine "intro_3"
  intro_3Clock = new util.Clock();
  tb_4 = new visual.Rect ({
    win: psychoJS.window, name: 'tb_4', 
    width: [0.9, 0.15][0], height: [0.9, 0.15][1],
    ori: 0.0, 
    pos: [0, 0.5], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  ps_demo_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ps_demo_2',
    text: 'Size: Small | Angle: 3 Degrees | Speed: 400km/h',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.465], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  ps_explainer = new visual.TextStim({
    win: psychoJS.window,
    name: 'ps_explainer',
    text: 'The answer is ‘Circle’ as two of the attributes are safe; it is a small size aircraft, and it has a 3-degree angle of decent. However, the speed of approach is unsafe at 400km/ hour.  ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.035,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  bn_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'bn_title',
    text: 'Background Noise:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.07,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  bn_explainer = new visual.TextStim({
    win: psychoJS.window,
    name: 'bn_explainer',
    text: "Additionally, whilst performing the task you may hear other air-traffic communications. You should ignore these and treat them as irrelevant.\n \nPlease connect your headphones to your computer, put them on and adjust your headset volume to a comfortable level. Six sample lines are playable below. When you're happy click next.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  play_button_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'play_button_1',
    text: 'Play',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [(- 0.21), (- 0.24)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -6
  });
  play_button_1.clock = new util.Clock();
  
  sound_test_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_test_1.setVolume(1.0);
  play_button_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'play_button_2',
    text: 'Play',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0, (- 0.24)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -8
  });
  play_button_2.clock = new util.Clock();
  
  sound_test_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_test_2.setVolume(1.0);
  play_button_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'play_button_3',
    text: 'Play',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0.21, (- 0.24)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -10
  });
  play_button_3.clock = new util.Clock();
  
  sound_test_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_test_3.setVolume(1.0);
  play_button_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'play_button_4',
    text: 'Play',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [(- 0.21), (- 0.36)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -12
  });
  play_button_4.clock = new util.Clock();
  
  sound_test_4 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_test_4.setVolume(1.0);
  play_button_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'play_button_5',
    text: 'Play',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0, (- 0.36)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -14
  });
  play_button_5.clock = new util.Clock();
  
  sound_test_5 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_test_5.setVolume(1.0);
  play_button_6 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'play_button_6',
    text: 'Play',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0.21, (- 0.36)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -16
  });
  play_button_6.clock = new util.Clock();
  
  sound_test_6 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_test_6.setVolume(1.0);
  next_button_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_button_5',
    text: 'Next',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [2, (- 0.4)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -18
  });
  next_button_5.clock = new util.Clock();
  
  // Initialize components for Routine "rules"
  rulesClock = new util.Clock();
  cr_title_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cr_title_2',
    text: 'Classification Rules:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.07,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  cr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cr_3',
    text: 'For each plane, you must determine if it’s attributes are safe or unsafe. Then, classify the plane based on the following rules: \n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.27], draggable: false, height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  cr_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cr_4',
    text: 'o  If all 3 attributes are safe = Classify as “Land”\no  If 1 or 2 attributes are safe = Classify as “Circle” \no  If 0 attributes are safe = Classify as “Divert”',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.19], draggable: false, height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  cc_title_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cc_title_2',
    text: 'Classification Criteria:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.07,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  cc_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cc_3',
    text: 'Use the following information to determine if each attribute is safe or unsafe.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.04)], draggable: false, height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  cc_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cc_4', units : undefined, 
    image : 'table.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0), (- 0.27)], 
    draggable: false,
    size : [1.225, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  lb_5 = new visual.Rect ({
    win: psychoJS.window, name: 'lb_5', 
    width: [0.4, 0.25][0], height: [0.4, 0.25][1],
    ori: 0.0, 
    pos: [(- 0.65), 0.12], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 4.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  rb_5 = new visual.Rect ({
    win: psychoJS.window, name: 'rb_5', 
    width: [0.4, 0.25][0], height: [0.4, 0.25][1],
    ori: 0.0, 
    pos: [0.65, 0.12], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 4.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  tip_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_7',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.65), 0.12], draggable: false, height: 0.03,  wrapWidth: 0.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -8.0 
  });
  
  tip_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_8',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.65, 0.17], draggable: false, height: 0.03,  wrapWidth: 0.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: -9.0 
  });
  
  begin_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'begin_button',
    text: 'Begin Block',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0.65, 0.05],
    letterHeight: 0.025,
    size: [0.35, 0.5],
    ori: 0.0
    ,
    depth: -10
  });
  begin_button.clock = new util.Clock();
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  radar = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radar', units : undefined, 
    image : 'radar.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.9, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  left_box = new visual.Rect ({
    win: psychoJS.window, name: 'left_box', 
    width: [0.4, 0.5][0], height: [0.4, 0.5][1],
    ori: 0.0, 
    pos: [(- 0.65), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  right_box = new visual.Rect ({
    win: psychoJS.window, name: 'right_box', 
    width: [0.4, 0.5][0], height: [0.4, 0.5][1],
    ori: 0.0, 
    pos: [0.65, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  top_box = new visual.Rect ({
    win: psychoJS.window, name: 'top_box', 
    width: [0.9, 0.15][0], height: [0.9, 0.15][1],
    ori: 0.0, 
    pos: [0, 0.5], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  plane = new visual.ShapeStim ({
    win: psychoJS.window, name: 'plane', 
    vertices: [[-[0.0577, 0.05][0]/2.0, -[0.0577, 0.05][1]/2.0], [+[0.0577, 0.05][0]/2.0, -[0.0577, 0.05][1]/2.0], [0, [0.0577, 0.05][1]/2.0]],
    ori: 0.0, 
    pos: [(- 2), (- 2)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  plane_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'plane_2', 
    vertices: [[-[0.0577, 0.05][0]/2.0, -[0.0577, 0.05][1]/2.0], [+[0.0577, 0.05][0]/2.0, -[0.0577, 0.05][1]/2.0], [0, [0.0577, 0.05][1]/2.0]],
    ori: 0.0, 
    pos: [(- 2), (- 2)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([1.0, 1.0, 1.0]), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  line = new visual.ShapeStim ({
    win: psychoJS.window, name: 'line', 
    vertices: [[-[0.38, 0.38][0]/2.0, 0], [+[0.38, 0.38][0]/2.0, 0]],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center-left', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  // Run 'Begin Experiment' code from line_spin
  rotate = 0;
  
  dot = new visual.Polygon({
    win: psychoJS.window, name: 'dot', 
    edges: 100, size:[0.02, 0.02],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), 1.0, (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -9, 
    interpolate: true, 
  });
  
  advice = new visual.TextStim({
    win: psychoJS.window,
    name: 'advice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [coords[0], 0], draggable: false, height: 0.04,  wrapWidth: 0.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: 0.0,
    depth: -11.0 
  });
  
  advice_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'advice_button',
    text: 'Click to Accept Advice',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[0], 0.2],
    letterHeight: 0.025,
    size: [0.35, 0.5],
    ori: 0.0
    ,
    depth: -12
  });
  advice_button.clock = new util.Clock();
  
  p1_db = new visual.Rect ({
    win: psychoJS.window, name: 'p1_db', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [2, 2], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -13, 
    interpolate: true, 
  });
  
  p2_db = new visual.Rect ({
    win: psychoJS.window, name: 'p2_db', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [2, 2], 
    draggable: true, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -14, 
    interpolate: true, 
  });
  
  divert_box = new visual.Rect ({
    win: psychoJS.window, name: 'divert_box', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], 0.15], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -15, 
    interpolate: true, 
  });
  
  divert_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'divert_button',
    text: 'Divert',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], 0.15],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -16
  });
  divert_button.clock = new util.Clock();
  
  p1_cb = new visual.Rect ({
    win: psychoJS.window, name: 'p1_cb', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [2, 2], 
    draggable: true, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -17, 
    interpolate: true, 
  });
  
  p2_cb = new visual.Rect ({
    win: psychoJS.window, name: 'p2_cb', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [2, 2], 
    draggable: true, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -18, 
    interpolate: true, 
  });
  
  circle_box = new visual.Rect ({
    win: psychoJS.window, name: 'circle_box', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -19, 
    interpolate: true, 
  });
  
  circle_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'circle_button',
    text: 'Circle',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], 0],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -20
  });
  circle_button.clock = new util.Clock();
  
  p1_lb = new visual.Rect ({
    win: psychoJS.window, name: 'p1_lb', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [2, 2], 
    draggable: true, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -21, 
    interpolate: true, 
  });
  
  p2_lb = new visual.Rect ({
    win: psychoJS.window, name: 'p2_lb', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [2, 2], 
    draggable: true, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -22, 
    interpolate: true, 
  });
  
  land_box = new visual.Rect ({
    win: psychoJS.window, name: 'land_box', 
    width: [0.3, 0.15][0], height: [0.3, 0.15][1],
    ori: 0.0, 
    pos: [coords[1], (- 0.15)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 8.0, 
    lineColor: new util.Color([(- 1.0), 0.749, (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -23, 
    interpolate: true, 
  });
  
  land_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'land_button',
    text: 'Land',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [coords[1], (- 0.15)],
    letterHeight: 0.05,
    size: [0.25, 0.5],
    ori: 0.0
    ,
    depth: -24
  });
  land_button.clock = new util.Clock();
  
  plane_stats = new visual.TextStim({
    win: psychoJS.window,
    name: 'plane_stats',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.465], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -25.0 
  });
  
  advisor_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'advisor_title',
    text: (expert + " Advisor"),
    font: 'Arial',
    units: undefined, 
    pos: [coords[0], 0.3], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -26.0 
  });
  
  response_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'response_title',
    text: 'Your Selection',
    font: 'Arial',
    units: undefined, 
    pos: [coords[1], 0.3], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -27.0 
  });
  
  sound_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_1.setVolume(1.0);
  sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_2.setVolume(1.0);
  sound_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_3.setVolume(1.0);
  sound_4 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_4.setVolume(1.0);
  sound_5 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_5.setVolume(1.0);
  sound_6 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_6.setVolume(1.0);
  sound_7 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_7.setVolume(1.0);
  sound_8 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_8.setVolume(1.0);
  sound_9 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_9.setVolume(1.0);
  sound_10 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_10.setVolume(1.0);
  secret_box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'secret_box_2', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, 
    pos: [(- 2), (- 2)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -39, 
    interpolate: true, 
  });
  
  secret_box_3 = new visual.Rect ({
    win: psychoJS.window, name: 'secret_box_3', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, 
    pos: [(- 2), (- 2)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -40, 
    interpolate: true, 
  });
  
  secret_box_4 = new visual.Rect ({
    win: psychoJS.window, name: 'secret_box_4', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, 
    pos: [(- 2), (- 2)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -41, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "outro"
  outroClock = new util.Clock();
  psychoJS._saveResults = 0;
  ty_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'ty_title',
    text: 'Thank you for your participation',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.08,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you',
    text: 'Thank you for participating in the study. All sounds heard throughout are purely fictional and do not reflect the typical conversations of what occurs on a day-to-day basis during air traffic control. Please listen to the song below if you have been affected by any of the sounds heard throughout.  \n\nHappy - Pharrell Williams\n\n\n\n\n\nWhenever you\'re ready, click the button below to save your data to your Downloads folder. When you return to Qualtrics you\'ll be prompted to upload your test data. Click "Drop files or click here to upload" and select your data file in your Downloads - it\'s name will begin with with your memorable code. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 1.0, (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  play_button_7 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'play_button_7',
    text: 'Play',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0, (- 0.06)],
    letterHeight: 0.05,
    size: [0.2, (- 0.05)],
    ori: 0.0
    ,
    depth: -3
  });
  play_button_7.clock = new util.Clock();
  
  happy = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  happy.setVolume(1.0);
  next_button_6 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_button_6',
    text: 'Next',
    fillColor: [(- 1.0), 1.0, (- 1.0)],
    borderColor: null,
    color: [(- 1.0), (- 1.0), (- 1.0)],
    colorSpace: 'rgb',
    pos: [0, (- 0.38)],
    letterHeight: 0.05,
    size: [0.2, 0.5],
    ori: 0.0
    ,
    depth: -5
  });
  next_button_6.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var intro_1MaxDurationReached;
var gotValidClick;
var intro_1MaxDuration;
var intro_1Components;
function intro_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    intro_1Clock.reset();
    routineTimer.reset();
    intro_1MaxDurationReached = false;
    // update component parameters for each repeat
    if ((expert === "AI")) {
        task_description_a.setOpacity(1);
    } else {
        if ((expert === "Human")) {
            task_description_h.setOpacity(1);
        } else {
            if ((expert === "None")) {
                task_description_n.setOpacity(1);
            }
        }
    }
    // reset continue_button to account for continued clicks & clear times on/off
    continue_button.reset()
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('intro_1.started', globalClock.getTime());
    intro_1MaxDuration = null
    // keep track of which components have finished
    intro_1Components = [];
    intro_1Components.push(td_title);
    intro_1Components.push(task_description_a);
    intro_1Components.push(task_description_h);
    intro_1Components.push(task_description_n);
    intro_1Components.push(continue_button);
    intro_1Components.push(cam);
    intro_1Components.push(mouse);
    
    intro_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function intro_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_1' ---
    // get current time
    t = intro_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *td_title* updates
    if (t >= 0.0 && td_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      td_title.tStart = t;  // (not accounting for frame time here)
      td_title.frameNStart = frameN;  // exact frame index
      
      td_title.setAutoDraw(true);
    }
    
    
    // *task_description_a* updates
    if (t >= 0.0 && task_description_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_description_a.tStart = t;  // (not accounting for frame time here)
      task_description_a.frameNStart = frameN;  // exact frame index
      
      task_description_a.setAutoDraw(true);
    }
    
    
    // *task_description_h* updates
    if (t >= 0.0 && task_description_h.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_description_h.tStart = t;  // (not accounting for frame time here)
      task_description_h.frameNStart = frameN;  // exact frame index
      
      task_description_h.setAutoDraw(true);
    }
    
    
    // *task_description_n* updates
    if (t >= 0.0 && task_description_n.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_description_n.tStart = t;  // (not accounting for frame time here)
      task_description_n.frameNStart = frameN;  // exact frame index
      
      task_description_n.setAutoDraw(true);
    }
    
    
    // *continue_button* updates
    if (t >= 0 && continue_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_button.tStart = t;  // (not accounting for frame time here)
      continue_button.frameNStart = frameN;  // exact frame index
      
      continue_button.setAutoDraw(true);
    }
    
    if (continue_button.status === PsychoJS.Status.STARTED) {
      // check whether continue_button has been pressed
      if (continue_button.isClicked) {
        if (!continue_button.wasClicked) {
          // store time of first click
          continue_button.timesOn.push(continue_button.clock.getTime());
          // store time clicked until
          continue_button.timesOff.push(continue_button.clock.getTime());
        } else {
          // update time clicked until;
          continue_button.timesOff[continue_button.timesOff.length - 1] = continue_button.clock.getTime();
        }
        if (!continue_button.wasClicked) {
          // end routine when continue_button is clicked
          continueRoutine = false;
          
        }
        // if continue_button is still clicked next frame, it is not a new click
        continue_button.wasClicked = true;
      } else {
        // if continue_button is clicked next frame, it is a new click
        continue_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continue_button hasn't started / has finished
      continue_button.clock.reset();
      // if continue_button is clicked next frame, it is a new click
      continue_button.wasClicked = false;
    }
    if (t >= 0 && cam.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cam.tStart = t;  // (not accounting for frame time here)
      cam.frameNStart = frameN;  // exact frame index
      
      await cam.record()
    };
    frameRemains = 0 + 0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cam.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      await cam.stop()
    };
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    intro_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_1' ---
    intro_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('continue_button.numClicks', continue_button.numClicks);
    psychoJS.experiment.addData('continue_button.timesOn', continue_button.timesOn);
    psychoJS.experiment.addData('continue_button.timesOff', continue_button.timesOff);
    // Ensure that cam is stopped
    if (cam.status === PsychoJS.Status.STARTED) {
        await cam.stop()
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    
    // the Routine "intro_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intro_2MaxDurationReached;
var intro_2MaxDuration;
var intro_2Components;
function intro_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    intro_2Clock.reset();
    routineTimer.reset();
    intro_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from left_align
    cr_2.alignHoriz = "left";
    cr_4.alignHoriz = "left";
    
    // reset next_button to account for continued clicks & clear times on/off
    next_button.reset()
    psychoJS.experiment.addData('intro_2.started', globalClock.getTime());
    intro_2MaxDuration = null
    // keep track of which components have finished
    intro_2Components = [];
    intro_2Components.push(cr_title);
    intro_2Components.push(cr_1);
    intro_2Components.push(cr_2);
    intro_2Components.push(cc_title);
    intro_2Components.push(cc_1);
    intro_2Components.push(cc_2);
    intro_2Components.push(next_button);
    intro_2Components.push(lb_1);
    intro_2Components.push(tip_1);
    intro_2Components.push(rb_1);
    intro_2Components.push(tip_2);
    
    intro_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function intro_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_2' ---
    // get current time
    t = intro_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cr_title* updates
    if (t >= 0.0 && cr_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cr_title.tStart = t;  // (not accounting for frame time here)
      cr_title.frameNStart = frameN;  // exact frame index
      
      cr_title.setAutoDraw(true);
    }
    
    
    // *cr_1* updates
    if (t >= 0.0 && cr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cr_1.tStart = t;  // (not accounting for frame time here)
      cr_1.frameNStart = frameN;  // exact frame index
      
      cr_1.setAutoDraw(true);
    }
    
    
    // *cr_2* updates
    if (t >= 0.0 && cr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cr_2.tStart = t;  // (not accounting for frame time here)
      cr_2.frameNStart = frameN;  // exact frame index
      
      cr_2.setAutoDraw(true);
    }
    
    
    // *cc_title* updates
    if (t >= 0.0 && cc_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cc_title.tStart = t;  // (not accounting for frame time here)
      cc_title.frameNStart = frameN;  // exact frame index
      
      cc_title.setAutoDraw(true);
    }
    
    
    // *cc_1* updates
    if (t >= 0.0 && cc_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cc_1.tStart = t;  // (not accounting for frame time here)
      cc_1.frameNStart = frameN;  // exact frame index
      
      cc_1.setAutoDraw(true);
    }
    
    
    // *cc_2* updates
    if (t >= 0.0 && cc_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cc_2.tStart = t;  // (not accounting for frame time here)
      cc_2.frameNStart = frameN;  // exact frame index
      
      cc_2.setAutoDraw(true);
    }
    
    
    // *next_button* updates
    if (t >= 0 && next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button.tStart = t;  // (not accounting for frame time here)
      next_button.frameNStart = frameN;  // exact frame index
      
      next_button.setAutoDraw(true);
    }
    
    if (next_button.status === PsychoJS.Status.STARTED) {
      // check whether next_button has been pressed
      if (next_button.isClicked) {
        if (!next_button.wasClicked) {
          // store time of first click
          next_button.timesOn.push(next_button.clock.getTime());
          // store time clicked until
          next_button.timesOff.push(next_button.clock.getTime());
        } else {
          // update time clicked until;
          next_button.timesOff[next_button.timesOff.length - 1] = next_button.clock.getTime();
        }
        if (!next_button.wasClicked) {
          // end routine when next_button is clicked
          continueRoutine = false;
          
        }
        // if next_button is still clicked next frame, it is not a new click
        next_button.wasClicked = true;
      } else {
        // if next_button is clicked next frame, it is a new click
        next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_button hasn't started / has finished
      next_button.clock.reset();
      // if next_button is clicked next frame, it is a new click
      next_button.wasClicked = false;
    }
    
    // *lb_1* updates
    if (t >= 0.0 && lb_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lb_1.tStart = t;  // (not accounting for frame time here)
      lb_1.frameNStart = frameN;  // exact frame index
      
      lb_1.setAutoDraw(true);
    }
    
    
    if (tip_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tip_1.setOpacity(1.0, false);
      tip_1.setText('You will be able to review these rules again before the session begins, but you will not be able to see them while working.', false);
    }
    
    // *tip_1* updates
    if (t >= 0.0 && tip_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_1.tStart = t;  // (not accounting for frame time here)
      tip_1.frameNStart = frameN;  // exact frame index
      
      tip_1.setAutoDraw(true);
    }
    
    
    // *rb_1* updates
    if (t >= 0.0 && rb_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rb_1.tStart = t;  // (not accounting for frame time here)
      rb_1.frameNStart = frameN;  // exact frame index
      
      rb_1.setAutoDraw(true);
    }
    
    
    if (tip_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tip_2.setOpacity(1.0, false);
      tip_2.setText('You will be asked one practice question before you next get to see these rules.', false);
    }
    
    // *tip_2* updates
    if (t >= 0.0 && tip_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_2.tStart = t;  // (not accounting for frame time here)
      tip_2.frameNStart = frameN;  // exact frame index
      
      tip_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    intro_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_2' ---
    intro_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('next_button.numClicks', next_button.numClicks);
    psychoJS.experiment.addData('next_button.timesOn', next_button.timesOn);
    psychoJS.experiment.addData('next_button.timesOff', next_button.timesOff);
    // the Routine "intro_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demo_radarMaxDurationReached;
var demo_radarMaxDuration;
var demo_radarComponents;
function demo_radarRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_radar' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    demo_radarClock.reset();
    routineTimer.reset();
    demo_radarMaxDurationReached = false;
    // update component parameters for each repeat
    // reset dbb_demo to account for continued clicks & clear times on/off
    dbb_demo.reset()
    // reset cbb_demo to account for continued clicks & clear times on/off
    cbb_demo.reset()
    // reset lbb_demo to account for continued clicks & clear times on/off
    lbb_demo.reset()
    // reset next_button_2 to account for continued clicks & clear times on/off
    next_button_2.reset()
    psychoJS.experiment.addData('demo_radar.started', globalClock.getTime());
    demo_radarMaxDuration = null
    // keep track of which components have finished
    demo_radarComponents = [];
    demo_radarComponents.push(lb_2);
    demo_radarComponents.push(rb_2);
    demo_radarComponents.push(tb_1);
    demo_radarComponents.push(radar_demo);
    demo_radarComponents.push(line_demo);
    demo_radarComponents.push(dot_demo);
    demo_radarComponents.push(tip_3);
    demo_radarComponents.push(db_demo);
    demo_radarComponents.push(dbb_demo);
    demo_radarComponents.push(cb_demo);
    demo_radarComponents.push(cbb_demo);
    demo_radarComponents.push(lb_demo);
    demo_radarComponents.push(lbb_demo);
    demo_radarComponents.push(rt_demo);
    demo_radarComponents.push(next_button_2);
    
    demo_radarComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function demo_radarRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_radar' ---
    // get current time
    t = demo_radarClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *lb_2* updates
    if (t >= 0.0 && lb_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lb_2.tStart = t;  // (not accounting for frame time here)
      lb_2.frameNStart = frameN;  // exact frame index
      
      lb_2.setAutoDraw(true);
    }
    
    
    // *rb_2* updates
    if (t >= 0.0 && rb_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rb_2.tStart = t;  // (not accounting for frame time here)
      rb_2.frameNStart = frameN;  // exact frame index
      
      rb_2.setAutoDraw(true);
    }
    
    
    // *tb_1* updates
    if (t >= 0.0 && tb_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tb_1.tStart = t;  // (not accounting for frame time here)
      tb_1.frameNStart = frameN;  // exact frame index
      
      tb_1.setAutoDraw(true);
    }
    
    
    // *radar_demo* updates
    if (t >= 0.0 && radar_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radar_demo.tStart = t;  // (not accounting for frame time here)
      radar_demo.frameNStart = frameN;  // exact frame index
      
      radar_demo.setAutoDraw(true);
    }
    
    
    if (line_demo.status === PsychoJS.Status.STARTED){ // only update if being drawn
      line_demo.setOri(0.0, false);
    }
    
    // *line_demo* updates
    if (t >= 0.0 && line_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line_demo.tStart = t;  // (not accounting for frame time here)
      line_demo.frameNStart = frameN;  // exact frame index
      
      line_demo.setAutoDraw(true);
    }
    
    // Run 'Each Frame' code from line_spin_demo
    rotate += 1;
    line_demo.setOri(rotate);
    
    
    // *dot_demo* updates
    if (t >= 0.0 && dot_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_demo.tStart = t;  // (not accounting for frame time here)
      dot_demo.frameNStart = frameN;  // exact frame index
      
      dot_demo.setAutoDraw(true);
    }
    
    
    if (tip_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tip_3.setOpacity(1.0, false);
      tip_3.setText((("On the " + side1) + " side of the screen is where you select your recommendedation for each plane.\n\nTry selecting each option, then press next when you're ready."), false);
    }
    
    // *tip_3* updates
    if (t >= 0.0 && tip_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_3.tStart = t;  // (not accounting for frame time here)
      tip_3.frameNStart = frameN;  // exact frame index
      
      tip_3.setAutoDraw(true);
    }
    
    
    // *db_demo* updates
    if (t >= 0.0 && db_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      db_demo.tStart = t;  // (not accounting for frame time here)
      db_demo.frameNStart = frameN;  // exact frame index
      
      db_demo.setAutoDraw(true);
    }
    
    
    // *dbb_demo* updates
    if (t >= 0 && dbb_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dbb_demo.tStart = t;  // (not accounting for frame time here)
      dbb_demo.frameNStart = frameN;  // exact frame index
      
      dbb_demo.setAutoDraw(true);
    }
    
    if (dbb_demo.status === PsychoJS.Status.STARTED) {
      // check whether dbb_demo has been pressed
      if (dbb_demo.isClicked) {
        if (!dbb_demo.wasClicked) {
          // store time of first click
          dbb_demo.timesOn.push(dbb_demo.clock.getTime());
          // store time clicked until
          dbb_demo.timesOff.push(dbb_demo.clock.getTime());
        } else {
          // update time clicked until;
          dbb_demo.timesOff[dbb_demo.timesOff.length - 1] = dbb_demo.clock.getTime();
        }
        if (!dbb_demo.wasClicked) {
          db_demo.setOpacity(1);
          cb_demo.setOpacity(0);
          lb_demo.setOpacity(0);
          next_button_2.setPos([0.75, (- 0.4)]);
        }
        // if dbb_demo is still clicked next frame, it is not a new click
        dbb_demo.wasClicked = true;
      } else {
        // if dbb_demo is clicked next frame, it is a new click
        dbb_demo.wasClicked = false;
      }
    } else {
      // keep clock at 0 if dbb_demo hasn't started / has finished
      dbb_demo.clock.reset();
      // if dbb_demo is clicked next frame, it is a new click
      dbb_demo.wasClicked = false;
    }
    
    // *cb_demo* updates
    if (t >= 0.0 && cb_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cb_demo.tStart = t;  // (not accounting for frame time here)
      cb_demo.frameNStart = frameN;  // exact frame index
      
      cb_demo.setAutoDraw(true);
    }
    
    
    // *cbb_demo* updates
    if (t >= 0 && cbb_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cbb_demo.tStart = t;  // (not accounting for frame time here)
      cbb_demo.frameNStart = frameN;  // exact frame index
      
      cbb_demo.setAutoDraw(true);
    }
    
    if (cbb_demo.status === PsychoJS.Status.STARTED) {
      // check whether cbb_demo has been pressed
      if (cbb_demo.isClicked) {
        if (!cbb_demo.wasClicked) {
          // store time of first click
          cbb_demo.timesOn.push(cbb_demo.clock.getTime());
          // store time clicked until
          cbb_demo.timesOff.push(cbb_demo.clock.getTime());
        } else {
          // update time clicked until;
          cbb_demo.timesOff[cbb_demo.timesOff.length - 1] = cbb_demo.clock.getTime();
        }
        if (!cbb_demo.wasClicked) {
          db_demo.setOpacity(0);
          cb_demo.setOpacity(1);
          lb_demo.setOpacity(0);
          next_button_2.setPos([0.75, (- 0.4)]);
        }
        // if cbb_demo is still clicked next frame, it is not a new click
        cbb_demo.wasClicked = true;
      } else {
        // if cbb_demo is clicked next frame, it is a new click
        cbb_demo.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cbb_demo hasn't started / has finished
      cbb_demo.clock.reset();
      // if cbb_demo is clicked next frame, it is a new click
      cbb_demo.wasClicked = false;
    }
    
    // *lb_demo* updates
    if (t >= 0.0 && lb_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lb_demo.tStart = t;  // (not accounting for frame time here)
      lb_demo.frameNStart = frameN;  // exact frame index
      
      lb_demo.setAutoDraw(true);
    }
    
    
    // *lbb_demo* updates
    if (t >= 0 && lbb_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lbb_demo.tStart = t;  // (not accounting for frame time here)
      lbb_demo.frameNStart = frameN;  // exact frame index
      
      lbb_demo.setAutoDraw(true);
    }
    
    if (lbb_demo.status === PsychoJS.Status.STARTED) {
      // check whether lbb_demo has been pressed
      if (lbb_demo.isClicked) {
        if (!lbb_demo.wasClicked) {
          // store time of first click
          lbb_demo.timesOn.push(lbb_demo.clock.getTime());
          // store time clicked until
          lbb_demo.timesOff.push(lbb_demo.clock.getTime());
        } else {
          // update time clicked until;
          lbb_demo.timesOff[lbb_demo.timesOff.length - 1] = lbb_demo.clock.getTime();
        }
        if (!lbb_demo.wasClicked) {
          db_demo.setOpacity(0);
          cb_demo.setOpacity(0);
          lb_demo.setOpacity(1);
          next_button_2.setPos([0.75, (- 0.4)]);
        }
        // if lbb_demo is still clicked next frame, it is not a new click
        lbb_demo.wasClicked = true;
      } else {
        // if lbb_demo is clicked next frame, it is a new click
        lbb_demo.wasClicked = false;
      }
    } else {
      // keep clock at 0 if lbb_demo hasn't started / has finished
      lbb_demo.clock.reset();
      // if lbb_demo is clicked next frame, it is a new click
      lbb_demo.wasClicked = false;
    }
    
    // *rt_demo* updates
    if (t >= 0.0 && rt_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rt_demo.tStart = t;  // (not accounting for frame time here)
      rt_demo.frameNStart = frameN;  // exact frame index
      
      rt_demo.setAutoDraw(true);
    }
    
    
    // *next_button_2* updates
    if (t >= 0 && next_button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button_2.tStart = t;  // (not accounting for frame time here)
      next_button_2.frameNStart = frameN;  // exact frame index
      
      next_button_2.setAutoDraw(true);
    }
    
    if (next_button_2.status === PsychoJS.Status.STARTED) {
      // check whether next_button_2 has been pressed
      if (next_button_2.isClicked) {
        if (!next_button_2.wasClicked) {
          // store time of first click
          next_button_2.timesOn.push(next_button_2.clock.getTime());
          // store time clicked until
          next_button_2.timesOff.push(next_button_2.clock.getTime());
        } else {
          // update time clicked until;
          next_button_2.timesOff[next_button_2.timesOff.length - 1] = next_button_2.clock.getTime();
        }
        if (!next_button_2.wasClicked) {
          // end routine when next_button_2 is clicked
          continueRoutine = false;
          
        }
        // if next_button_2 is still clicked next frame, it is not a new click
        next_button_2.wasClicked = true;
      } else {
        // if next_button_2 is clicked next frame, it is a new click
        next_button_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_button_2 hasn't started / has finished
      next_button_2.clock.reset();
      // if next_button_2 is clicked next frame, it is a new click
      next_button_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demo_radarComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_radarRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_radar' ---
    demo_radarComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('demo_radar.stopped', globalClock.getTime());
    psychoJS.experiment.addData('dbb_demo.numClicks', dbb_demo.numClicks);
    psychoJS.experiment.addData('dbb_demo.timesOn', dbb_demo.timesOn);
    psychoJS.experiment.addData('dbb_demo.timesOff', dbb_demo.timesOff);
    psychoJS.experiment.addData('cbb_demo.numClicks', cbb_demo.numClicks);
    psychoJS.experiment.addData('cbb_demo.timesOn', cbb_demo.timesOn);
    psychoJS.experiment.addData('cbb_demo.timesOff', cbb_demo.timesOff);
    psychoJS.experiment.addData('lbb_demo.numClicks', lbb_demo.numClicks);
    psychoJS.experiment.addData('lbb_demo.timesOn', lbb_demo.timesOn);
    psychoJS.experiment.addData('lbb_demo.timesOff', lbb_demo.timesOff);
    psychoJS.experiment.addData('next_button_2.numClicks', next_button_2.numClicks);
    psychoJS.experiment.addData('next_button_2.timesOn', next_button_2.timesOn);
    psychoJS.experiment.addData('next_button_2.timesOff', next_button_2.timesOff);
    // the Routine "demo_radar" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demo_radar_2MaxDurationReached;
var demo_radar_2MaxDuration;
var demo_radar_2Components;
function demo_radar_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_radar_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    demo_radar_2Clock.reset();
    routineTimer.reset();
    demo_radar_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from line_spin_demo_2
    if ((expert === "None")) {
        continueRoutine = false;
    }
    
    // reset ab_demo to account for continued clicks & clear times on/off
    ab_demo.reset()
    // reset next_button_3 to account for continued clicks & clear times on/off
    next_button_3.reset()
    // reset dbb_demo_3 to account for continued clicks & clear times on/off
    dbb_demo_3.reset()
    // reset cbb_demo_3 to account for continued clicks & clear times on/off
    cbb_demo_3.reset()
    // reset lbb_demo_3 to account for continued clicks & clear times on/off
    lbb_demo_3.reset()
    psychoJS.experiment.addData('demo_radar_2.started', globalClock.getTime());
    demo_radar_2MaxDuration = null
    // keep track of which components have finished
    demo_radar_2Components = [];
    demo_radar_2Components.push(lb_3);
    demo_radar_2Components.push(rb_3);
    demo_radar_2Components.push(tb_2);
    demo_radar_2Components.push(radar_demo_2);
    demo_radar_2Components.push(line_demo_2);
    demo_radar_2Components.push(dot_demo_2);
    demo_radar_2Components.push(advice_demo_2);
    demo_radar_2Components.push(ab_demo);
    demo_radar_2Components.push(at_demo);
    demo_radar_2Components.push(next_button_3);
    demo_radar_2Components.push(db_demo_3);
    demo_radar_2Components.push(dbb_demo_3);
    demo_radar_2Components.push(cb_demo_3);
    demo_radar_2Components.push(cbb_demo_3);
    demo_radar_2Components.push(lb_demo_3);
    demo_radar_2Components.push(lbb_demo_3);
    demo_radar_2Components.push(bb_2);
    demo_radar_2Components.push(tip_4);
    demo_radar_2Components.push(tip_5);
    
    demo_radar_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function demo_radar_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_radar_2' ---
    // get current time
    t = demo_radar_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *lb_3* updates
    if (t >= 0.0 && lb_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lb_3.tStart = t;  // (not accounting for frame time here)
      lb_3.frameNStart = frameN;  // exact frame index
      
      lb_3.setAutoDraw(true);
    }
    
    
    // *rb_3* updates
    if (t >= 0.0 && rb_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rb_3.tStart = t;  // (not accounting for frame time here)
      rb_3.frameNStart = frameN;  // exact frame index
      
      rb_3.setAutoDraw(true);
    }
    
    
    // *tb_2* updates
    if (t >= 0.0 && tb_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tb_2.tStart = t;  // (not accounting for frame time here)
      tb_2.frameNStart = frameN;  // exact frame index
      
      tb_2.setAutoDraw(true);
    }
    
    
    // *radar_demo_2* updates
    if (t >= 0.0 && radar_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radar_demo_2.tStart = t;  // (not accounting for frame time here)
      radar_demo_2.frameNStart = frameN;  // exact frame index
      
      radar_demo_2.setAutoDraw(true);
    }
    
    
    if (line_demo_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      line_demo_2.setOri(0.0, false);
    }
    
    // *line_demo_2* updates
    if (t >= 0.0 && line_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line_demo_2.tStart = t;  // (not accounting for frame time here)
      line_demo_2.frameNStart = frameN;  // exact frame index
      
      line_demo_2.setAutoDraw(true);
    }
    
    // Run 'Each Frame' code from line_spin_demo_2
    rotate += 1;
    line_demo_2.setOri(rotate);
    
    
    // *dot_demo_2* updates
    if (t >= 0.0 && dot_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_demo_2.tStart = t;  // (not accounting for frame time here)
      dot_demo_2.frameNStart = frameN;  // exact frame index
      
      dot_demo_2.setAutoDraw(true);
    }
    
    
    if (advice_demo_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      advice_demo_2.setText('Your advisor suggests selecting divert for this aircraft.', false);
    }
    
    // *advice_demo_2* updates
    if (t >= 0.0 && advice_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advice_demo_2.tStart = t;  // (not accounting for frame time here)
      advice_demo_2.frameNStart = frameN;  // exact frame index
      
      advice_demo_2.setAutoDraw(true);
    }
    
    
    // *ab_demo* updates
    if (t >= 0 && ab_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_demo.tStart = t;  // (not accounting for frame time here)
      ab_demo.frameNStart = frameN;  // exact frame index
      
      ab_demo.setAutoDraw(true);
    }
    
    if (ab_demo.status === PsychoJS.Status.STARTED) {
      // check whether ab_demo has been pressed
      if (ab_demo.isClicked) {
        if (!ab_demo.wasClicked) {
          // store time of first click
          ab_demo.timesOn.push(ab_demo.clock.getTime());
          // store time clicked until
          ab_demo.timesOff.push(ab_demo.clock.getTime());
        } else {
          // update time clicked until;
          ab_demo.timesOff[ab_demo.timesOff.length - 1] = ab_demo.clock.getTime();
        }
        tip_4.setOpacity(0);
        tip_5.setOpacity(1);
        next_button_3.setPos([0.75, (- 0.4)]);
        db_demo_3.setOpacity(1);
        cb_demo_3.setOpacity(0);
        lb_demo_3.setOpacity(0);
        // if ab_demo is still clicked next frame, it is not a new click
        ab_demo.wasClicked = true;
      } else {
        // if ab_demo is clicked next frame, it is a new click
        ab_demo.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ab_demo hasn't started / has finished
      ab_demo.clock.reset();
      // if ab_demo is clicked next frame, it is a new click
      ab_demo.wasClicked = false;
    }
    
    // *at_demo* updates
    if (t >= 0.0 && at_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_demo.tStart = t;  // (not accounting for frame time here)
      at_demo.frameNStart = frameN;  // exact frame index
      
      at_demo.setAutoDraw(true);
    }
    
    
    // *next_button_3* updates
    if (t >= 0 && next_button_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button_3.tStart = t;  // (not accounting for frame time here)
      next_button_3.frameNStart = frameN;  // exact frame index
      
      next_button_3.setAutoDraw(true);
    }
    
    if (next_button_3.status === PsychoJS.Status.STARTED) {
      // check whether next_button_3 has been pressed
      if (next_button_3.isClicked) {
        if (!next_button_3.wasClicked) {
          // store time of first click
          next_button_3.timesOn.push(next_button_3.clock.getTime());
          // store time clicked until
          next_button_3.timesOff.push(next_button_3.clock.getTime());
        } else {
          // update time clicked until;
          next_button_3.timesOff[next_button_3.timesOff.length - 1] = next_button_3.clock.getTime();
        }
        if (!next_button_3.wasClicked) {
          // end routine when next_button_3 is clicked
          continueRoutine = false;
          
        }
        // if next_button_3 is still clicked next frame, it is not a new click
        next_button_3.wasClicked = true;
      } else {
        // if next_button_3 is clicked next frame, it is a new click
        next_button_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_button_3 hasn't started / has finished
      next_button_3.clock.reset();
      // if next_button_3 is clicked next frame, it is a new click
      next_button_3.wasClicked = false;
    }
    
    // *db_demo_3* updates
    if (t >= 0.0 && db_demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      db_demo_3.tStart = t;  // (not accounting for frame time here)
      db_demo_3.frameNStart = frameN;  // exact frame index
      
      db_demo_3.setAutoDraw(true);
    }
    
    
    // *dbb_demo_3* updates
    if (t >= 0 && dbb_demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dbb_demo_3.tStart = t;  // (not accounting for frame time here)
      dbb_demo_3.frameNStart = frameN;  // exact frame index
      
      dbb_demo_3.setAutoDraw(true);
    }
    
    if (dbb_demo_3.status === PsychoJS.Status.STARTED) {
      // check whether dbb_demo_3 has been pressed
      if (dbb_demo_3.isClicked) {
        if (!dbb_demo_3.wasClicked) {
          // store time of first click
          dbb_demo_3.timesOn.push(dbb_demo_3.clock.getTime());
          // store time clicked until
          dbb_demo_3.timesOff.push(dbb_demo_3.clock.getTime());
        } else {
          // update time clicked until;
          dbb_demo_3.timesOff[dbb_demo_3.timesOff.length - 1] = dbb_demo_3.clock.getTime();
        }
        if (!dbb_demo_3.wasClicked) {
          db_demo_3.setOpacity(1);
          cb_demo_3.setOpacity(0);
          lb_demo_3.setOpacity(0);
        }
        // if dbb_demo_3 is still clicked next frame, it is not a new click
        dbb_demo_3.wasClicked = true;
      } else {
        // if dbb_demo_3 is clicked next frame, it is a new click
        dbb_demo_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if dbb_demo_3 hasn't started / has finished
      dbb_demo_3.clock.reset();
      // if dbb_demo_3 is clicked next frame, it is a new click
      dbb_demo_3.wasClicked = false;
    }
    
    // *cb_demo_3* updates
    if (t >= 0.0 && cb_demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cb_demo_3.tStart = t;  // (not accounting for frame time here)
      cb_demo_3.frameNStart = frameN;  // exact frame index
      
      cb_demo_3.setAutoDraw(true);
    }
    
    
    // *cbb_demo_3* updates
    if (t >= 0 && cbb_demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cbb_demo_3.tStart = t;  // (not accounting for frame time here)
      cbb_demo_3.frameNStart = frameN;  // exact frame index
      
      cbb_demo_3.setAutoDraw(true);
    }
    
    if (cbb_demo_3.status === PsychoJS.Status.STARTED) {
      // check whether cbb_demo_3 has been pressed
      if (cbb_demo_3.isClicked) {
        if (!cbb_demo_3.wasClicked) {
          // store time of first click
          cbb_demo_3.timesOn.push(cbb_demo_3.clock.getTime());
          // store time clicked until
          cbb_demo_3.timesOff.push(cbb_demo_3.clock.getTime());
        } else {
          // update time clicked until;
          cbb_demo_3.timesOff[cbb_demo_3.timesOff.length - 1] = cbb_demo_3.clock.getTime();
        }
        if (!cbb_demo_3.wasClicked) {
          db_demo_3.setOpacity(0);
          cb_demo_3.setOpacity(1);
          lb_demo_3.setOpacity(0);
        }
        // if cbb_demo_3 is still clicked next frame, it is not a new click
        cbb_demo_3.wasClicked = true;
      } else {
        // if cbb_demo_3 is clicked next frame, it is a new click
        cbb_demo_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cbb_demo_3 hasn't started / has finished
      cbb_demo_3.clock.reset();
      // if cbb_demo_3 is clicked next frame, it is a new click
      cbb_demo_3.wasClicked = false;
    }
    
    // *lb_demo_3* updates
    if (t >= 0.0 && lb_demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lb_demo_3.tStart = t;  // (not accounting for frame time here)
      lb_demo_3.frameNStart = frameN;  // exact frame index
      
      lb_demo_3.setAutoDraw(true);
    }
    
    
    // *lbb_demo_3* updates
    if (t >= 0 && lbb_demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lbb_demo_3.tStart = t;  // (not accounting for frame time here)
      lbb_demo_3.frameNStart = frameN;  // exact frame index
      
      lbb_demo_3.setAutoDraw(true);
    }
    
    if (lbb_demo_3.status === PsychoJS.Status.STARTED) {
      // check whether lbb_demo_3 has been pressed
      if (lbb_demo_3.isClicked) {
        if (!lbb_demo_3.wasClicked) {
          // store time of first click
          lbb_demo_3.timesOn.push(lbb_demo_3.clock.getTime());
          // store time clicked until
          lbb_demo_3.timesOff.push(lbb_demo_3.clock.getTime());
        } else {
          // update time clicked until;
          lbb_demo_3.timesOff[lbb_demo_3.timesOff.length - 1] = lbb_demo_3.clock.getTime();
        }
        if (!lbb_demo_3.wasClicked) {
          db_demo_3.setOpacity(0);
          cb_demo_3.setOpacity(0);
          lb_demo_3.setOpacity(1);
        }
        // if lbb_demo_3 is still clicked next frame, it is not a new click
        lbb_demo_3.wasClicked = true;
      } else {
        // if lbb_demo_3 is clicked next frame, it is a new click
        lbb_demo_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if lbb_demo_3 hasn't started / has finished
      lbb_demo_3.clock.reset();
      // if lbb_demo_3 is clicked next frame, it is a new click
      lbb_demo_3.wasClicked = false;
    }
    
    // *bb_2* updates
    if (t >= 0.0 && bb_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bb_2.tStart = t;  // (not accounting for frame time here)
      bb_2.frameNStart = frameN;  // exact frame index
      
      bb_2.setAutoDraw(true);
    }
    
    
    if (tip_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tip_4.setText((("There will be one practice block before four test blocks. During all five blocks, assistance will be given to you. It is up to you if you choose to accept this assistance.\n\nAdvice can be accepted by clicking the button in the box on the " + side2) + ". Try accepting it now."), false);
    }
    
    // *tip_4* updates
    if (t >= 0.0 && tip_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_4.tStart = t;  // (not accounting for frame time here)
      tip_4.frameNStart = frameN;  // exact frame index
      
      tip_4.setAutoDraw(true);
    }
    
    
    if (tip_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tip_5.setText("If you accept the suggestion, you're still able to change your selection afterwards if you'd like to.\n\nWhen you're ready, click next to continue.", false);
    }
    
    // *tip_5* updates
    if (t >= 0.0 && tip_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_5.tStart = t;  // (not accounting for frame time here)
      tip_5.frameNStart = frameN;  // exact frame index
      
      tip_5.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demo_radar_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_radar_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_radar_2' ---
    demo_radar_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('demo_radar_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ab_demo.numClicks', ab_demo.numClicks);
    psychoJS.experiment.addData('ab_demo.timesOn', ab_demo.timesOn);
    psychoJS.experiment.addData('ab_demo.timesOff', ab_demo.timesOff);
    psychoJS.experiment.addData('next_button_3.numClicks', next_button_3.numClicks);
    psychoJS.experiment.addData('next_button_3.timesOn', next_button_3.timesOn);
    psychoJS.experiment.addData('next_button_3.timesOff', next_button_3.timesOff);
    psychoJS.experiment.addData('dbb_demo_3.numClicks', dbb_demo_3.numClicks);
    psychoJS.experiment.addData('dbb_demo_3.timesOn', dbb_demo_3.timesOn);
    psychoJS.experiment.addData('dbb_demo_3.timesOff', dbb_demo_3.timesOff);
    psychoJS.experiment.addData('cbb_demo_3.numClicks', cbb_demo_3.numClicks);
    psychoJS.experiment.addData('cbb_demo_3.timesOn', cbb_demo_3.timesOn);
    psychoJS.experiment.addData('cbb_demo_3.timesOff', cbb_demo_3.timesOff);
    psychoJS.experiment.addData('lbb_demo_3.numClicks', lbb_demo_3.numClicks);
    psychoJS.experiment.addData('lbb_demo_3.timesOn', lbb_demo_3.timesOn);
    psychoJS.experiment.addData('lbb_demo_3.timesOff', lbb_demo_3.timesOff);
    // the Routine "demo_radar_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demo_radar_3MaxDurationReached;
var demo_radar_3MaxDuration;
var demo_radar_3Components;
function demo_radar_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_radar_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    demo_radar_3Clock.reset();
    routineTimer.reset();
    demo_radar_3MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from line_spin_demo_3
    if ((expert === "None")) {
        at_demo_2.setOpacity(0);
        secret_box.setOpacity(1);
        tip_6_1.setOpacity(1);
    } else {
        bb_1.setOpacity(1);
        tip_6_2.setOpacity(1);
    }
    
    // reset ab_demo_2 to account for continued clicks & clear times on/off
    ab_demo_2.reset()
    // reset dbb_demo_2 to account for continued clicks & clear times on/off
    dbb_demo_2.reset()
    // reset cbb_demo_2 to account for continued clicks & clear times on/off
    cbb_demo_2.reset()
    // reset lbb_demo_2 to account for continued clicks & clear times on/off
    lbb_demo_2.reset()
    // reset next_button_4 to account for continued clicks & clear times on/off
    next_button_4.reset()
    psychoJS.experiment.addData('demo_radar_3.started', globalClock.getTime());
    demo_radar_3MaxDuration = null
    // keep track of which components have finished
    demo_radar_3Components = [];
    demo_radar_3Components.push(lb_4);
    demo_radar_3Components.push(rb_4);
    demo_radar_3Components.push(tb_3);
    demo_radar_3Components.push(radar_demo_3);
    demo_radar_3Components.push(plane_demo);
    demo_radar_3Components.push(plane_demo_2);
    demo_radar_3Components.push(plane_demo_3);
    demo_radar_3Components.push(line_demo_3);
    demo_radar_3Components.push(dot_demo_3);
    demo_radar_3Components.push(advice_demo);
    demo_radar_3Components.push(ab_demo_2);
    demo_radar_3Components.push(at_demo_2);
    demo_radar_3Components.push(secret_box);
    demo_radar_3Components.push(ps_demo);
    demo_radar_3Components.push(db_demo_2);
    demo_radar_3Components.push(dbb_demo_2);
    demo_radar_3Components.push(cb_demo_2);
    demo_radar_3Components.push(cbb_demo_2);
    demo_radar_3Components.push(lb_demo_2);
    demo_radar_3Components.push(lbb_demo_2);
    demo_radar_3Components.push(tip_6_1);
    demo_radar_3Components.push(bb_1);
    demo_radar_3Components.push(tip_6_2);
    demo_radar_3Components.push(next_button_4);
    
    demo_radar_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var tip_text;
function demo_radar_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_radar_3' ---
    // get current time
    t = demo_radar_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *lb_4* updates
    if (t >= 0.0 && lb_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lb_4.tStart = t;  // (not accounting for frame time here)
      lb_4.frameNStart = frameN;  // exact frame index
      
      lb_4.setAutoDraw(true);
    }
    
    
    // *rb_4* updates
    if (t >= 0.0 && rb_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rb_4.tStart = t;  // (not accounting for frame time here)
      rb_4.frameNStart = frameN;  // exact frame index
      
      rb_4.setAutoDraw(true);
    }
    
    
    // *tb_3* updates
    if (t >= 0.0 && tb_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tb_3.tStart = t;  // (not accounting for frame time here)
      tb_3.frameNStart = frameN;  // exact frame index
      
      tb_3.setAutoDraw(true);
    }
    
    
    // *radar_demo_3* updates
    if (t >= 0.0 && radar_demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radar_demo_3.tStart = t;  // (not accounting for frame time here)
      radar_demo_3.frameNStart = frameN;  // exact frame index
      
      radar_demo_3.setAutoDraw(true);
    }
    
    
    // *plane_demo* updates
    if (t >= 0.0 && plane_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      plane_demo.tStart = t;  // (not accounting for frame time here)
      plane_demo.frameNStart = frameN;  // exact frame index
      
      plane_demo.setAutoDraw(true);
    }
    
    
    // *plane_demo_2* updates
    if (t >= 0.0 && plane_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      plane_demo_2.tStart = t;  // (not accounting for frame time here)
      plane_demo_2.frameNStart = frameN;  // exact frame index
      
      plane_demo_2.setAutoDraw(true);
    }
    
    
    // *plane_demo_3* updates
    if (t >= 0.0 && plane_demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      plane_demo_3.tStart = t;  // (not accounting for frame time here)
      plane_demo_3.frameNStart = frameN;  // exact frame index
      
      plane_demo_3.setAutoDraw(true);
    }
    
    
    if (line_demo_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      line_demo_3.setOri(0.0, false);
    }
    
    // *line_demo_3* updates
    if (t >= 0.0 && line_demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line_demo_3.tStart = t;  // (not accounting for frame time here)
      line_demo_3.frameNStart = frameN;  // exact frame index
      
      line_demo_3.setAutoDraw(true);
    }
    
    // Run 'Each Frame' code from line_spin_demo_3
    rotate += 1;
    line_demo_3.setOri(rotate);
    
    
    // *dot_demo_3* updates
    if (t >= 0.0 && dot_demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_demo_3.tStart = t;  // (not accounting for frame time here)
      dot_demo_3.frameNStart = frameN;  // exact frame index
      
      dot_demo_3.setAutoDraw(true);
    }
    
    
    if (advice_demo.status === PsychoJS.Status.STARTED){ // only update if being drawn
      advice_demo.setText('Your advisor suggests selecting circle for this aircraft.', false);
    }
    
    // *advice_demo* updates
    if (t >= 0.0 && advice_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advice_demo.tStart = t;  // (not accounting for frame time here)
      advice_demo.frameNStart = frameN;  // exact frame index
      
      advice_demo.setAutoDraw(true);
    }
    
    
    // *ab_demo_2* updates
    if (t >= 0 && ab_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_demo_2.tStart = t;  // (not accounting for frame time here)
      ab_demo_2.frameNStart = frameN;  // exact frame index
      
      ab_demo_2.setAutoDraw(true);
    }
    
    if (ab_demo_2.status === PsychoJS.Status.STARTED) {
      // check whether ab_demo_2 has been pressed
      if (ab_demo_2.isClicked) {
        if (!ab_demo_2.wasClicked) {
          // store time of first click
          ab_demo_2.timesOn.push(ab_demo_2.clock.getTime());
          // store time clicked until
          ab_demo_2.timesOff.push(ab_demo_2.clock.getTime());
        } else {
          // update time clicked until;
          ab_demo_2.timesOff[ab_demo_2.timesOff.length - 1] = ab_demo_2.clock.getTime();
        }
        db_demo_2.setOpacity(0);
        cb_demo_2.setOpacity(1);
        lb_demo_2.setOpacity(0);
        plane_demo_2.setOpacity(1);
        next_button_4.setPos([0.75, (- 0.4)]);
        // if ab_demo_2 is still clicked next frame, it is not a new click
        ab_demo_2.wasClicked = true;
      } else {
        // if ab_demo_2 is clicked next frame, it is a new click
        ab_demo_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ab_demo_2 hasn't started / has finished
      ab_demo_2.clock.reset();
      // if ab_demo_2 is clicked next frame, it is a new click
      ab_demo_2.wasClicked = false;
    }
    
    // *at_demo_2* updates
    if (t >= 0.0 && at_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_demo_2.tStart = t;  // (not accounting for frame time here)
      at_demo_2.frameNStart = frameN;  // exact frame index
      
      at_demo_2.setAutoDraw(true);
    }
    
    
    // *secret_box* updates
    if (t >= 0.0 && secret_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      secret_box.tStart = t;  // (not accounting for frame time here)
      secret_box.frameNStart = frameN;  // exact frame index
      
      secret_box.setAutoDraw(true);
    }
    
    
    // *ps_demo* updates
    if (t >= 0.0 && ps_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ps_demo.tStart = t;  // (not accounting for frame time here)
      ps_demo.frameNStart = frameN;  // exact frame index
      
      ps_demo.setAutoDraw(true);
    }
    
    
    // *db_demo_2* updates
    if (t >= 0.0 && db_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      db_demo_2.tStart = t;  // (not accounting for frame time here)
      db_demo_2.frameNStart = frameN;  // exact frame index
      
      db_demo_2.setAutoDraw(true);
    }
    
    
    // *dbb_demo_2* updates
    if (t >= 0 && dbb_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dbb_demo_2.tStart = t;  // (not accounting for frame time here)
      dbb_demo_2.frameNStart = frameN;  // exact frame index
      
      dbb_demo_2.setAutoDraw(true);
    }
    
    if (dbb_demo_2.status === PsychoJS.Status.STARTED) {
      // check whether dbb_demo_2 has been pressed
      if (dbb_demo_2.isClicked) {
        if (!dbb_demo_2.wasClicked) {
          // store time of first click
          dbb_demo_2.timesOn.push(dbb_demo_2.clock.getTime());
          // store time clicked until
          dbb_demo_2.timesOff.push(dbb_demo_2.clock.getTime());
        } else {
          // update time clicked until;
          dbb_demo_2.timesOff[dbb_demo_2.timesOff.length - 1] = dbb_demo_2.clock.getTime();
        }
        if (!dbb_demo_2.wasClicked) {
          db_demo_2.setOpacity(1);
          cb_demo_2.setOpacity(0);
          lb_demo_2.setOpacity(0);
          plane_demo_2.setOpacity(1);
          next_button_4.setPos([0.75, (- 0.4)]);
        }
        // if dbb_demo_2 is still clicked next frame, it is not a new click
        dbb_demo_2.wasClicked = true;
      } else {
        // if dbb_demo_2 is clicked next frame, it is a new click
        dbb_demo_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if dbb_demo_2 hasn't started / has finished
      dbb_demo_2.clock.reset();
      // if dbb_demo_2 is clicked next frame, it is a new click
      dbb_demo_2.wasClicked = false;
    }
    
    // *cb_demo_2* updates
    if (t >= 0.0 && cb_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cb_demo_2.tStart = t;  // (not accounting for frame time here)
      cb_demo_2.frameNStart = frameN;  // exact frame index
      
      cb_demo_2.setAutoDraw(true);
    }
    
    
    // *cbb_demo_2* updates
    if (t >= 0 && cbb_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cbb_demo_2.tStart = t;  // (not accounting for frame time here)
      cbb_demo_2.frameNStart = frameN;  // exact frame index
      
      cbb_demo_2.setAutoDraw(true);
    }
    
    if (cbb_demo_2.status === PsychoJS.Status.STARTED) {
      // check whether cbb_demo_2 has been pressed
      if (cbb_demo_2.isClicked) {
        if (!cbb_demo_2.wasClicked) {
          // store time of first click
          cbb_demo_2.timesOn.push(cbb_demo_2.clock.getTime());
          // store time clicked until
          cbb_demo_2.timesOff.push(cbb_demo_2.clock.getTime());
        } else {
          // update time clicked until;
          cbb_demo_2.timesOff[cbb_demo_2.timesOff.length - 1] = cbb_demo_2.clock.getTime();
        }
        if (!cbb_demo_2.wasClicked) {
          db_demo_2.setOpacity(0);
          cb_demo_2.setOpacity(1);
          lb_demo_2.setOpacity(0);
          plane_demo_2.setOpacity(1);
          next_button_4.setPos([0.75, (- 0.4)]);
        }
        // if cbb_demo_2 is still clicked next frame, it is not a new click
        cbb_demo_2.wasClicked = true;
      } else {
        // if cbb_demo_2 is clicked next frame, it is a new click
        cbb_demo_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cbb_demo_2 hasn't started / has finished
      cbb_demo_2.clock.reset();
      // if cbb_demo_2 is clicked next frame, it is a new click
      cbb_demo_2.wasClicked = false;
    }
    
    // *lb_demo_2* updates
    if (t >= 0.0 && lb_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lb_demo_2.tStart = t;  // (not accounting for frame time here)
      lb_demo_2.frameNStart = frameN;  // exact frame index
      
      lb_demo_2.setAutoDraw(true);
    }
    
    
    // *lbb_demo_2* updates
    if (t >= 0 && lbb_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lbb_demo_2.tStart = t;  // (not accounting for frame time here)
      lbb_demo_2.frameNStart = frameN;  // exact frame index
      
      lbb_demo_2.setAutoDraw(true);
    }
    
    if (lbb_demo_2.status === PsychoJS.Status.STARTED) {
      // check whether lbb_demo_2 has been pressed
      if (lbb_demo_2.isClicked) {
        if (!lbb_demo_2.wasClicked) {
          // store time of first click
          lbb_demo_2.timesOn.push(lbb_demo_2.clock.getTime());
          // store time clicked until
          lbb_demo_2.timesOff.push(lbb_demo_2.clock.getTime());
        } else {
          // update time clicked until;
          lbb_demo_2.timesOff[lbb_demo_2.timesOff.length - 1] = lbb_demo_2.clock.getTime();
        }
        if (!lbb_demo_2.wasClicked) {
          db_demo_2.setOpacity(0);
          cb_demo_2.setOpacity(0);
          lb_demo_2.setOpacity(1);
          plane_demo_2.setOpacity(1);
          next_button_4.setPos([0.75, (- 0.4)]);
        }
        // if lbb_demo_2 is still clicked next frame, it is not a new click
        lbb_demo_2.wasClicked = true;
      } else {
        // if lbb_demo_2 is clicked next frame, it is a new click
        lbb_demo_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if lbb_demo_2 hasn't started / has finished
      lbb_demo_2.clock.reset();
      // if lbb_demo_2 is clicked next frame, it is a new click
      lbb_demo_2.wasClicked = false;
    }
    
    if (tip_6_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tip_6_1.setText(tip_text, false);
    }
    
    // *tip_6_1* updates
    if (t >= 0.0 && tip_6_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_6_1.tStart = t;  // (not accounting for frame time here)
      tip_6_1.frameNStart = frameN;  // exact frame index
      
      tip_6_1.setAutoDraw(true);
    }
    
    
    // *bb_1* updates
    if (t >= 0.0 && bb_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bb_1.tStart = t;  // (not accounting for frame time here)
      bb_1.frameNStart = frameN;  // exact frame index
      
      bb_1.setAutoDraw(true);
    }
    
    
    if (tip_6_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tip_6_2.setText(tip_text, false);
    }
    
    // *tip_6_2* updates
    if (t >= 0.0 && tip_6_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_6_2.tStart = t;  // (not accounting for frame time here)
      tip_6_2.frameNStart = frameN;  // exact frame index
      
      tip_6_2.setAutoDraw(true);
    }
    
    
    if (next_button_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      next_button_4.setOpacity(1.0, false);
    }
    
    // *next_button_4* updates
    if (t >= 0 && next_button_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button_4.tStart = t;  // (not accounting for frame time here)
      next_button_4.frameNStart = frameN;  // exact frame index
      
      next_button_4.setAutoDraw(true);
    }
    
    if (next_button_4.status === PsychoJS.Status.STARTED) {
      // check whether next_button_4 has been pressed
      if (next_button_4.isClicked) {
        if (!next_button_4.wasClicked) {
          // store time of first click
          next_button_4.timesOn.push(next_button_4.clock.getTime());
          // store time clicked until
          next_button_4.timesOff.push(next_button_4.clock.getTime());
        } else {
          // update time clicked until;
          next_button_4.timesOff[next_button_4.timesOff.length - 1] = next_button_4.clock.getTime();
        }
        if (!next_button_4.wasClicked) {
          // end routine when next_button_4 is clicked
          continueRoutine = false;
          
        }
        // if next_button_4 is still clicked next frame, it is not a new click
        next_button_4.wasClicked = true;
      } else {
        // if next_button_4 is clicked next frame, it is a new click
        next_button_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_button_4 hasn't started / has finished
      next_button_4.clock.reset();
      // if next_button_4 is clicked next frame, it is a new click
      next_button_4.wasClicked = false;
    }
    if ((mouse.isPressedIn(plane_demo) === true)) {
        plane_demo_3.setOpacity(0);
        ps_demo.setOpacity(1);
        advice_demo.setOpacity(1);
        tip_text = text_2;
    }
    
    if ((ps_demo.getOpacity() === 0)) {
        db_demo_2.setOpacity(0);
        cb_demo_2.setOpacity(0);
        lb_demo_2.setOpacity(0);
        plane_demo_2.setOpacity(0);
        next_button_4.setOpacity(0);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demo_radar_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_radar_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_radar_3' ---
    demo_radar_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('demo_radar_3.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ab_demo_2.numClicks', ab_demo_2.numClicks);
    psychoJS.experiment.addData('ab_demo_2.timesOn', ab_demo_2.timesOn);
    psychoJS.experiment.addData('ab_demo_2.timesOff', ab_demo_2.timesOff);
    psychoJS.experiment.addData('dbb_demo_2.numClicks', dbb_demo_2.numClicks);
    psychoJS.experiment.addData('dbb_demo_2.timesOn', dbb_demo_2.timesOn);
    psychoJS.experiment.addData('dbb_demo_2.timesOff', dbb_demo_2.timesOff);
    psychoJS.experiment.addData('cbb_demo_2.numClicks', cbb_demo_2.numClicks);
    psychoJS.experiment.addData('cbb_demo_2.timesOn', cbb_demo_2.timesOn);
    psychoJS.experiment.addData('cbb_demo_2.timesOff', cbb_demo_2.timesOff);
    psychoJS.experiment.addData('lbb_demo_2.numClicks', lbb_demo_2.numClicks);
    psychoJS.experiment.addData('lbb_demo_2.timesOn', lbb_demo_2.timesOn);
    psychoJS.experiment.addData('lbb_demo_2.timesOff', lbb_demo_2.timesOff);
    psychoJS.experiment.addData('next_button_4.numClicks', next_button_4.numClicks);
    psychoJS.experiment.addData('next_button_4.timesOn', next_button_4.timesOn);
    psychoJS.experiment.addData('next_button_4.timesOff', next_button_4.timesOff);
    // the Routine "demo_radar_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intro_3MaxDurationReached;
var intro_3MaxDuration;
var intro_3Components;
function intro_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    intro_3Clock.reset();
    routineTimer.reset();
    intro_3MaxDurationReached = false;
    // update component parameters for each repeat
    // reset play_button_1 to account for continued clicks & clear times on/off
    play_button_1.reset()
    sound_test_1.setValue(n_lines[0]);
    sound_test_1.setVolume(1.0);
    // reset play_button_2 to account for continued clicks & clear times on/off
    play_button_2.reset()
    sound_test_2.setValue(n_lines[1]);
    sound_test_2.setVolume(1.0);
    // reset play_button_3 to account for continued clicks & clear times on/off
    play_button_3.reset()
    sound_test_3.setValue(n_lines[2]);
    sound_test_3.setVolume(1.0);
    // reset play_button_4 to account for continued clicks & clear times on/off
    play_button_4.reset()
    sound_test_4.setValue(n_lines[3]);
    sound_test_4.setVolume(1.0);
    // reset play_button_5 to account for continued clicks & clear times on/off
    play_button_5.reset()
    sound_test_5.setValue(n_lines[4]);
    sound_test_5.setVolume(1.0);
    // reset play_button_6 to account for continued clicks & clear times on/off
    play_button_6.reset()
    sound_test_6.setValue(n_lines[5]);
    sound_test_6.setVolume(1.0);
    // reset next_button_5 to account for continued clicks & clear times on/off
    next_button_5.reset()
    psychoJS.experiment.addData('intro_3.started', globalClock.getTime());
    intro_3MaxDuration = null
    // keep track of which components have finished
    intro_3Components = [];
    intro_3Components.push(tb_4);
    intro_3Components.push(ps_demo_2);
    intro_3Components.push(ps_explainer);
    intro_3Components.push(bn_title);
    intro_3Components.push(bn_explainer);
    intro_3Components.push(play_button_1);
    intro_3Components.push(sound_test_1);
    intro_3Components.push(play_button_2);
    intro_3Components.push(sound_test_2);
    intro_3Components.push(play_button_3);
    intro_3Components.push(sound_test_3);
    intro_3Components.push(play_button_4);
    intro_3Components.push(sound_test_4);
    intro_3Components.push(play_button_5);
    intro_3Components.push(sound_test_5);
    intro_3Components.push(play_button_6);
    intro_3Components.push(sound_test_6);
    intro_3Components.push(next_button_5);
    
    intro_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var test_play_1;
var test_play_2;
var test_play_3;
var test_play_4;
var test_play_5;
var test_play_6;
function intro_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_3' ---
    // get current time
    t = intro_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tb_4* updates
    if (t >= 0.0 && tb_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tb_4.tStart = t;  // (not accounting for frame time here)
      tb_4.frameNStart = frameN;  // exact frame index
      
      tb_4.setAutoDraw(true);
    }
    
    
    // *ps_demo_2* updates
    if (t >= 0.0 && ps_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ps_demo_2.tStart = t;  // (not accounting for frame time here)
      ps_demo_2.frameNStart = frameN;  // exact frame index
      
      ps_demo_2.setAutoDraw(true);
    }
    
    
    // *ps_explainer* updates
    if (t >= 0.0 && ps_explainer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ps_explainer.tStart = t;  // (not accounting for frame time here)
      ps_explainer.frameNStart = frameN;  // exact frame index
      
      ps_explainer.setAutoDraw(true);
    }
    
    // Run 'Each Frame' code from neutral_loader
    if ((test_play_1 === true)) {
        test_play_1 = false;
    }
    if ((test_play_2 === true)) {
        test_play_2 = false;
    }
    if ((test_play_3 === true)) {
        test_play_3 = false;
    }
    if ((test_play_4 === true)) {
        test_play_4 = false;
    }
    if ((test_play_5 === true)) {
        test_play_5 = false;
    }
    if ((test_play_6 === true)) {
        test_play_6 = false;
    }
    
    // *bn_title* updates
    if (t >= 0.0 && bn_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bn_title.tStart = t;  // (not accounting for frame time here)
      bn_title.frameNStart = frameN;  // exact frame index
      
      bn_title.setAutoDraw(true);
    }
    
    
    // *bn_explainer* updates
    if (t >= 0.0 && bn_explainer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bn_explainer.tStart = t;  // (not accounting for frame time here)
      bn_explainer.frameNStart = frameN;  // exact frame index
      
      bn_explainer.setAutoDraw(true);
    }
    
    
    // *play_button_1* updates
    if (t >= 0 && play_button_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      play_button_1.tStart = t;  // (not accounting for frame time here)
      play_button_1.frameNStart = frameN;  // exact frame index
      
      play_button_1.setAutoDraw(true);
    }
    
    if (play_button_1.status === PsychoJS.Status.STARTED) {
      // check whether play_button_1 has been pressed
      if (play_button_1.isClicked) {
        if (!play_button_1.wasClicked) {
          // store time of first click
          play_button_1.timesOn.push(play_button_1.clock.getTime());
          // store time clicked until
          play_button_1.timesOff.push(play_button_1.clock.getTime());
        } else {
          // update time clicked until;
          play_button_1.timesOff[play_button_1.timesOff.length - 1] = play_button_1.clock.getTime();
        }
        if (!play_button_1.wasClicked) {
          var test_play_1;
          sound_test_1.status = NOT_STARTED;
          test_play_1 = true;
          next_button_5.setPos([0.75, (- 0.4)]);
        }
        // if play_button_1 is still clicked next frame, it is not a new click
        play_button_1.wasClicked = true;
      } else {
        // if play_button_1 is clicked next frame, it is a new click
        play_button_1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if play_button_1 hasn't started / has finished
      play_button_1.clock.reset();
      // if play_button_1 is clicked next frame, it is a new click
      play_button_1.wasClicked = false;
    }
    // start/stop sound_test_1
    if ((test_play_1) && sound_test_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_test_1.tStart = t;  // (not accounting for frame time here)
      sound_test_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_test_1.play(); });  // screen flip
      sound_test_1.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_test_1.getDuration() + sound_test_1.tStart)     && sound_test_1.status === PsychoJS.Status.STARTED) {
      sound_test_1.stop();  // stop the sound (if longer than duration)
      sound_test_1.status = PsychoJS.Status.FINISHED;
    }
    
    // *play_button_2* updates
    if (t >= 0 && play_button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      play_button_2.tStart = t;  // (not accounting for frame time here)
      play_button_2.frameNStart = frameN;  // exact frame index
      
      play_button_2.setAutoDraw(true);
    }
    
    if (play_button_2.status === PsychoJS.Status.STARTED) {
      // check whether play_button_2 has been pressed
      if (play_button_2.isClicked) {
        if (!play_button_2.wasClicked) {
          // store time of first click
          play_button_2.timesOn.push(play_button_2.clock.getTime());
          // store time clicked until
          play_button_2.timesOff.push(play_button_2.clock.getTime());
        } else {
          // update time clicked until;
          play_button_2.timesOff[play_button_2.timesOff.length - 1] = play_button_2.clock.getTime();
        }
        if (!play_button_2.wasClicked) {
          var test_play_2;
          sound_test_2.status = NOT_STARTED;
          test_play_2 = true;
          next_button_5.setPos([0.75, (- 0.4)]);
        }
        // if play_button_2 is still clicked next frame, it is not a new click
        play_button_2.wasClicked = true;
      } else {
        // if play_button_2 is clicked next frame, it is a new click
        play_button_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if play_button_2 hasn't started / has finished
      play_button_2.clock.reset();
      // if play_button_2 is clicked next frame, it is a new click
      play_button_2.wasClicked = false;
    }
    // start/stop sound_test_2
    if ((test_play_2) && sound_test_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_test_2.tStart = t;  // (not accounting for frame time here)
      sound_test_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_test_2.play(); });  // screen flip
      sound_test_2.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_test_2.getDuration() + sound_test_2.tStart)     && sound_test_2.status === PsychoJS.Status.STARTED) {
      sound_test_2.stop();  // stop the sound (if longer than duration)
      sound_test_2.status = PsychoJS.Status.FINISHED;
    }
    
    // *play_button_3* updates
    if (t >= 0 && play_button_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      play_button_3.tStart = t;  // (not accounting for frame time here)
      play_button_3.frameNStart = frameN;  // exact frame index
      
      play_button_3.setAutoDraw(true);
    }
    
    if (play_button_3.status === PsychoJS.Status.STARTED) {
      // check whether play_button_3 has been pressed
      if (play_button_3.isClicked) {
        if (!play_button_3.wasClicked) {
          // store time of first click
          play_button_3.timesOn.push(play_button_3.clock.getTime());
          // store time clicked until
          play_button_3.timesOff.push(play_button_3.clock.getTime());
        } else {
          // update time clicked until;
          play_button_3.timesOff[play_button_3.timesOff.length - 1] = play_button_3.clock.getTime();
        }
        if (!play_button_3.wasClicked) {
          var test_play_3;
          sound_test_3.status = NOT_STARTED;
          test_play_3 = true;
          next_button_5.setPos([0.75, (- 0.4)]);
        }
        // if play_button_3 is still clicked next frame, it is not a new click
        play_button_3.wasClicked = true;
      } else {
        // if play_button_3 is clicked next frame, it is a new click
        play_button_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if play_button_3 hasn't started / has finished
      play_button_3.clock.reset();
      // if play_button_3 is clicked next frame, it is a new click
      play_button_3.wasClicked = false;
    }
    // start/stop sound_test_3
    if ((test_play_3) && sound_test_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_test_3.tStart = t;  // (not accounting for frame time here)
      sound_test_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_test_3.play(); });  // screen flip
      sound_test_3.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_test_3.getDuration() + sound_test_3.tStart)     && sound_test_3.status === PsychoJS.Status.STARTED) {
      sound_test_3.stop();  // stop the sound (if longer than duration)
      sound_test_3.status = PsychoJS.Status.FINISHED;
    }
    
    // *play_button_4* updates
    if (t >= 0 && play_button_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      play_button_4.tStart = t;  // (not accounting for frame time here)
      play_button_4.frameNStart = frameN;  // exact frame index
      
      play_button_4.setAutoDraw(true);
    }
    
    if (play_button_4.status === PsychoJS.Status.STARTED) {
      // check whether play_button_4 has been pressed
      if (play_button_4.isClicked) {
        if (!play_button_4.wasClicked) {
          // store time of first click
          play_button_4.timesOn.push(play_button_4.clock.getTime());
          // store time clicked until
          play_button_4.timesOff.push(play_button_4.clock.getTime());
        } else {
          // update time clicked until;
          play_button_4.timesOff[play_button_4.timesOff.length - 1] = play_button_4.clock.getTime();
        }
        if (!play_button_4.wasClicked) {
          var test_play_4;
          sound_test_4.status = NOT_STARTED;
          test_play_4 = true;
          next_button_5.setPos([0.75, (- 0.4)]);
        }
        // if play_button_4 is still clicked next frame, it is not a new click
        play_button_4.wasClicked = true;
      } else {
        // if play_button_4 is clicked next frame, it is a new click
        play_button_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if play_button_4 hasn't started / has finished
      play_button_4.clock.reset();
      // if play_button_4 is clicked next frame, it is a new click
      play_button_4.wasClicked = false;
    }
    // start/stop sound_test_4
    if ((test_play_4) && sound_test_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_test_4.tStart = t;  // (not accounting for frame time here)
      sound_test_4.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_test_4.play(); });  // screen flip
      sound_test_4.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_test_4.getDuration() + sound_test_4.tStart)     && sound_test_4.status === PsychoJS.Status.STARTED) {
      sound_test_4.stop();  // stop the sound (if longer than duration)
      sound_test_4.status = PsychoJS.Status.FINISHED;
    }
    
    // *play_button_5* updates
    if (t >= 0 && play_button_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      play_button_5.tStart = t;  // (not accounting for frame time here)
      play_button_5.frameNStart = frameN;  // exact frame index
      
      play_button_5.setAutoDraw(true);
    }
    
    if (play_button_5.status === PsychoJS.Status.STARTED) {
      // check whether play_button_5 has been pressed
      if (play_button_5.isClicked) {
        if (!play_button_5.wasClicked) {
          // store time of first click
          play_button_5.timesOn.push(play_button_5.clock.getTime());
          // store time clicked until
          play_button_5.timesOff.push(play_button_5.clock.getTime());
        } else {
          // update time clicked until;
          play_button_5.timesOff[play_button_5.timesOff.length - 1] = play_button_5.clock.getTime();
        }
        if (!play_button_5.wasClicked) {
          var test_play_5;
          sound_test_5.status = NOT_STARTED;
          test_play_5 = true;
          next_button_5.setPos([0.75, (- 0.4)]);
        }
        // if play_button_5 is still clicked next frame, it is not a new click
        play_button_5.wasClicked = true;
      } else {
        // if play_button_5 is clicked next frame, it is a new click
        play_button_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if play_button_5 hasn't started / has finished
      play_button_5.clock.reset();
      // if play_button_5 is clicked next frame, it is a new click
      play_button_5.wasClicked = false;
    }
    // start/stop sound_test_5
    if ((test_play_5) && sound_test_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_test_5.tStart = t;  // (not accounting for frame time here)
      sound_test_5.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_test_5.play(); });  // screen flip
      sound_test_5.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_test_5.getDuration() + sound_test_5.tStart)     && sound_test_5.status === PsychoJS.Status.STARTED) {
      sound_test_5.stop();  // stop the sound (if longer than duration)
      sound_test_5.status = PsychoJS.Status.FINISHED;
    }
    
    // *play_button_6* updates
    if (t >= 0 && play_button_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      play_button_6.tStart = t;  // (not accounting for frame time here)
      play_button_6.frameNStart = frameN;  // exact frame index
      
      play_button_6.setAutoDraw(true);
    }
    
    if (play_button_6.status === PsychoJS.Status.STARTED) {
      // check whether play_button_6 has been pressed
      if (play_button_6.isClicked) {
        if (!play_button_6.wasClicked) {
          // store time of first click
          play_button_6.timesOn.push(play_button_6.clock.getTime());
          // store time clicked until
          play_button_6.timesOff.push(play_button_6.clock.getTime());
        } else {
          // update time clicked until;
          play_button_6.timesOff[play_button_6.timesOff.length - 1] = play_button_6.clock.getTime();
        }
        if (!play_button_6.wasClicked) {
          var test_play_6;
          sound_test_6.status = NOT_STARTED;
          test_play_6 = true;
          next_button_5.setPos([0.75, (- 0.4)]);
        }
        // if play_button_6 is still clicked next frame, it is not a new click
        play_button_6.wasClicked = true;
      } else {
        // if play_button_6 is clicked next frame, it is a new click
        play_button_6.wasClicked = false;
      }
    } else {
      // keep clock at 0 if play_button_6 hasn't started / has finished
      play_button_6.clock.reset();
      // if play_button_6 is clicked next frame, it is a new click
      play_button_6.wasClicked = false;
    }
    // start/stop sound_test_6
    if ((test_play_6) && sound_test_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_test_6.tStart = t;  // (not accounting for frame time here)
      sound_test_6.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_test_6.play(); });  // screen flip
      sound_test_6.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_test_6.getDuration() + sound_test_6.tStart)     && sound_test_6.status === PsychoJS.Status.STARTED) {
      sound_test_6.stop();  // stop the sound (if longer than duration)
      sound_test_6.status = PsychoJS.Status.FINISHED;
    }
    
    // *next_button_5* updates
    if (t >= 0 && next_button_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button_5.tStart = t;  // (not accounting for frame time here)
      next_button_5.frameNStart = frameN;  // exact frame index
      
      next_button_5.setAutoDraw(true);
    }
    
    if (next_button_5.status === PsychoJS.Status.STARTED) {
      // check whether next_button_5 has been pressed
      if (next_button_5.isClicked) {
        if (!next_button_5.wasClicked) {
          // store time of first click
          next_button_5.timesOn.push(next_button_5.clock.getTime());
          // store time clicked until
          next_button_5.timesOff.push(next_button_5.clock.getTime());
        } else {
          // update time clicked until;
          next_button_5.timesOff[next_button_5.timesOff.length - 1] = next_button_5.clock.getTime();
        }
        if (!next_button_5.wasClicked) {
          // end routine when next_button_5 is clicked
          continueRoutine = false;
          
        }
        // if next_button_5 is still clicked next frame, it is not a new click
        next_button_5.wasClicked = true;
      } else {
        // if next_button_5 is clicked next frame, it is a new click
        next_button_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_button_5 hasn't started / has finished
      next_button_5.clock.reset();
      // if next_button_5 is clicked next frame, it is a new click
      next_button_5.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    intro_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_3' ---
    intro_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro_3.stopped', globalClock.getTime());
    psychoJS.experiment.addData('play_button_1.numClicks', play_button_1.numClicks);
    psychoJS.experiment.addData('play_button_1.timesOn', play_button_1.timesOn);
    psychoJS.experiment.addData('play_button_1.timesOff', play_button_1.timesOff);
    sound_test_1.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('play_button_2.numClicks', play_button_2.numClicks);
    psychoJS.experiment.addData('play_button_2.timesOn', play_button_2.timesOn);
    psychoJS.experiment.addData('play_button_2.timesOff', play_button_2.timesOff);
    sound_test_2.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('play_button_3.numClicks', play_button_3.numClicks);
    psychoJS.experiment.addData('play_button_3.timesOn', play_button_3.timesOn);
    psychoJS.experiment.addData('play_button_3.timesOff', play_button_3.timesOff);
    sound_test_3.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('play_button_4.numClicks', play_button_4.numClicks);
    psychoJS.experiment.addData('play_button_4.timesOn', play_button_4.timesOn);
    psychoJS.experiment.addData('play_button_4.timesOff', play_button_4.timesOff);
    sound_test_4.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('play_button_5.numClicks', play_button_5.numClicks);
    psychoJS.experiment.addData('play_button_5.timesOn', play_button_5.timesOn);
    psychoJS.experiment.addData('play_button_5.timesOff', play_button_5.timesOff);
    sound_test_5.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('play_button_6.numClicks', play_button_6.numClicks);
    psychoJS.experiment.addData('play_button_6.timesOn', play_button_6.timesOn);
    psychoJS.experiment.addData('play_button_6.timesOff', play_button_6.timesOff);
    sound_test_6.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('next_button_5.numClicks', next_button_5.numClicks);
    psychoJS.experiment.addData('next_button_5.timesOn', next_button_5.timesOn);
    psychoJS.experiment.addData('next_button_5.timesOff', next_button_5.timesOff);
    // the Routine "intro_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tbibgs_conditions.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(rulesRoutineBegin(snapshot));
      trialsLoopScheduler.add(rulesRoutineEachFrame());
      trialsLoopScheduler.add(rulesRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var rulesMaxDurationReached;
var rulesMaxDuration;
var rulesComponents;
function rulesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rules' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    rulesClock.reset();
    routineTimer.reset();
    rulesMaxDurationReached = false;
    // update component parameters for each repeat
    // reset begin_button to account for continued clicks & clear times on/off
    begin_button.reset()
    psychoJS.experiment.addData('rules.started', globalClock.getTime());
    rulesMaxDuration = null
    // keep track of which components have finished
    rulesComponents = [];
    rulesComponents.push(cr_title_2);
    rulesComponents.push(cr_3);
    rulesComponents.push(cr_4);
    rulesComponents.push(cc_title_2);
    rulesComponents.push(cc_3);
    rulesComponents.push(cc_4);
    rulesComponents.push(lb_5);
    rulesComponents.push(rb_5);
    rulesComponents.push(tip_7);
    rulesComponents.push(tip_8);
    rulesComponents.push(begin_button);
    
    rulesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function rulesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rules' ---
    // get current time
    t = rulesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cr_title_2* updates
    if (t >= 0.0 && cr_title_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cr_title_2.tStart = t;  // (not accounting for frame time here)
      cr_title_2.frameNStart = frameN;  // exact frame index
      
      cr_title_2.setAutoDraw(true);
    }
    
    
    // *cr_3* updates
    if (t >= 0.0 && cr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cr_3.tStart = t;  // (not accounting for frame time here)
      cr_3.frameNStart = frameN;  // exact frame index
      
      cr_3.setAutoDraw(true);
    }
    
    
    // *cr_4* updates
    if (t >= 0.0 && cr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cr_4.tStart = t;  // (not accounting for frame time here)
      cr_4.frameNStart = frameN;  // exact frame index
      
      cr_4.setAutoDraw(true);
    }
    
    
    // *cc_title_2* updates
    if (t >= 0.0 && cc_title_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cc_title_2.tStart = t;  // (not accounting for frame time here)
      cc_title_2.frameNStart = frameN;  // exact frame index
      
      cc_title_2.setAutoDraw(true);
    }
    
    
    // *cc_3* updates
    if (t >= 0.0 && cc_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cc_3.tStart = t;  // (not accounting for frame time here)
      cc_3.frameNStart = frameN;  // exact frame index
      
      cc_3.setAutoDraw(true);
    }
    
    
    // *cc_4* updates
    if (t >= 0.0 && cc_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cc_4.tStart = t;  // (not accounting for frame time here)
      cc_4.frameNStart = frameN;  // exact frame index
      
      cc_4.setAutoDraw(true);
    }
    
    
    // *lb_5* updates
    if (t >= 0.0 && lb_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lb_5.tStart = t;  // (not accounting for frame time here)
      lb_5.frameNStart = frameN;  // exact frame index
      
      lb_5.setAutoDraw(true);
    }
    
    
    // *rb_5* updates
    if (t >= 0.0 && rb_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rb_5.tStart = t;  // (not accounting for frame time here)
      rb_5.frameNStart = frameN;  // exact frame index
      
      rb_5.setAutoDraw(true);
    }
    
    
    if (tip_7.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tip_7.setOpacity(1.0, false);
      tip_7.setText((("This rules reminder will appear before every block, you are about to begin block " + block_num) + " of 5. You can take a short break between blocks if needed."), false);
    }
    
    // *tip_7* updates
    if (t >= 0.0 && tip_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_7.tStart = t;  // (not accounting for frame time here)
      tip_7.frameNStart = frameN;  // exact frame index
      
      tip_7.setAutoDraw(true);
    }
    
    
    if (tip_8.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tip_8.setOpacity(1.0, false);
      tip_8.setText("When you're ready to start the next block click begin block.", false);
    }
    
    // *tip_8* updates
    if (t >= 0.0 && tip_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_8.tStart = t;  // (not accounting for frame time here)
      tip_8.frameNStart = frameN;  // exact frame index
      
      tip_8.setAutoDraw(true);
    }
    
    
    // *begin_button* updates
    if (t >= 0 && begin_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_button.tStart = t;  // (not accounting for frame time here)
      begin_button.frameNStart = frameN;  // exact frame index
      
      begin_button.setAutoDraw(true);
    }
    
    if (begin_button.status === PsychoJS.Status.STARTED) {
      // check whether begin_button has been pressed
      if (begin_button.isClicked) {
        if (!begin_button.wasClicked) {
          // store time of first click
          begin_button.timesOn.push(begin_button.clock.getTime());
          // store time clicked until
          begin_button.timesOff.push(begin_button.clock.getTime());
        } else {
          // update time clicked until;
          begin_button.timesOff[begin_button.timesOff.length - 1] = begin_button.clock.getTime();
        }
        if (!begin_button.wasClicked) {
          // end routine when begin_button is clicked
          continueRoutine = false;
          
        }
        // if begin_button is still clicked next frame, it is not a new click
        begin_button.wasClicked = true;
      } else {
        // if begin_button is clicked next frame, it is a new click
        begin_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if begin_button hasn't started / has finished
      begin_button.clock.reset();
      // if begin_button is clicked next frame, it is a new click
      begin_button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    rulesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rulesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rules' ---
    rulesComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('rules.stopped', globalClock.getTime());
    psychoJS.experiment.addData('begin_button.numClicks', begin_button.numClicks);
    psychoJS.experiment.addData('begin_button.timesOn', begin_button.timesOn);
    psychoJS.experiment.addData('begin_button.timesOff', begin_button.timesOff);
    // the Routine "rules" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var vo;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from setup
    let vo_seed = [];
    while(vo_seed.length < 10){
        var r = Math.floor(Math.random() * 16);
        if(vo_seed.indexOf(r) === -1) vo_seed.push(r);
    }
    let flip = Math.floor(Math.random() * 2);
    let vo;
    if ((positive === true)) {
        if ((flip === 1)) {
            vo = [m_pos[vo_seed[0]], f_pos[vo_seed[1]], m_pos[vo_seed[2]], f_pos[vo_seed[3]], m_pos[vo_seed[4]], f_pos[vo_seed[5]], m_pos[vo_seed[6]], f_pos[vo_seed[7]], m_pos[vo_seed[8]], f_pos[vo_seed[9]]];
        } else {
            vo = [f_pos[vo_seed[0]], m_pos[vo_seed[1]], f_pos[vo_seed[2]], m_pos[vo_seed[3]], f_pos[vo_seed[4]], m_pos[vo_seed[5]], f_pos[vo_seed[6]], m_pos[vo_seed[7]], f_pos[vo_seed[8]], m_pos[vo_seed[9]]];
        }
    } else {
        if ((flip === 1)) {
            vo = [m_neg[vo_seed[0]], f_neg[vo_seed[1]], m_neg[vo_seed[2]], f_neg[vo_seed[3]], m_neg[vo_seed[4]], f_neg[vo_seed[5]], m_neg[vo_seed[6]], f_neg[vo_seed[7]], m_neg[vo_seed[8]], f_neg[vo_seed[9]]];
        } else {
            vo = [f_neg[vo_seed[0]], m_neg[vo_seed[1]], f_neg[vo_seed[2]], m_neg[vo_seed[3]], f_neg[vo_seed[4]], m_neg[vo_seed[5]], f_neg[vo_seed[6]], m_neg[vo_seed[7]], f_neg[vo_seed[8]], m_neg[vo_seed[9]]];
        }
    }
    // reset advice_button to account for continued clicks & clear times on/off
    advice_button.reset()
    // reset divert_button to account for continued clicks & clear times on/off
    divert_button.reset()
    // reset circle_button to account for continued clicks & clear times on/off
    circle_button.reset()
    // reset land_button to account for continued clicks & clear times on/off
    land_button.reset()
    // Run 'Begin Routine' code from hider
    if ((expert === "None")) {
        advice.setPos((- 2), (- 2));
        advice_button.setPos((- 2), (- 2));
        advisor_title.setPos((- 2), (- 2));
        if ((expert_flip === true)) {
            right_box.setPos((- 2), (- 2));
        } else {
            left_box.setPos((- 2), (- 2));
        }
    }
    
    sound_1.setValue(vo[0]);
    sound_1.setVolume(tbibgs_vol);
    sound_2.setValue(vo[1]);
    sound_2.setVolume(tbibgs_vol);
    sound_3.setValue(vo[2]);
    sound_3.setVolume(tbibgs_vol);
    sound_4.setValue(vo[3]);
    sound_4.setVolume(tbibgs_vol);
    sound_5.setValue(vo[4]);
    sound_5.setVolume(tbibgs_vol);
    sound_6.setValue(vo[5]);
    sound_6.setVolume(tbibgs_vol);
    sound_7.setValue(vo[6]);
    sound_7.setVolume(tbibgs_vol);
    sound_8.setValue(vo[7]);
    sound_8.setVolume(tbibgs_vol);
    sound_9.setValue(vo[8]);
    sound_9.setVolume(tbibgs_vol);
    sound_10.setValue(vo[9]);
    sound_10.setVolume(tbibgs_vol);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(radar);
    trialComponents.push(left_box);
    trialComponents.push(right_box);
    trialComponents.push(top_box);
    trialComponents.push(plane);
    trialComponents.push(plane_2);
    trialComponents.push(line);
    trialComponents.push(dot);
    trialComponents.push(advice);
    trialComponents.push(advice_button);
    trialComponents.push(p1_db);
    trialComponents.push(p2_db);
    trialComponents.push(divert_box);
    trialComponents.push(divert_button);
    trialComponents.push(p1_cb);
    trialComponents.push(p2_cb);
    trialComponents.push(circle_box);
    trialComponents.push(circle_button);
    trialComponents.push(p1_lb);
    trialComponents.push(p2_lb);
    trialComponents.push(land_box);
    trialComponents.push(land_button);
    trialComponents.push(plane_stats);
    trialComponents.push(advisor_title);
    trialComponents.push(response_title);
    trialComponents.push(sound_1);
    trialComponents.push(sound_2);
    trialComponents.push(sound_3);
    trialComponents.push(sound_4);
    trialComponents.push(sound_5);
    trialComponents.push(sound_6);
    trialComponents.push(sound_7);
    trialComponents.push(sound_8);
    trialComponents.push(sound_9);
    trialComponents.push(sound_10);
    trialComponents.push(secret_box_2);
    trialComponents.push(secret_box_3);
    trialComponents.push(secret_box_4);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var selected;
var p1c;
var p2c;
var btn_boxes_op;
var btn_boxes;
var stat_check;
var suggestion;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *radar* updates
    if (t >= 0.0 && radar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radar.tStart = t;  // (not accounting for frame time here)
      radar.frameNStart = frameN;  // exact frame index
      
      radar.setAutoDraw(true);
    }
    
    
    // *left_box* updates
    if (t >= 0.0 && left_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_box.tStart = t;  // (not accounting for frame time here)
      left_box.frameNStart = frameN;  // exact frame index
      
      left_box.setAutoDraw(true);
    }
    
    
    // *right_box* updates
    if (t >= 0.0 && right_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_box.tStart = t;  // (not accounting for frame time here)
      right_box.frameNStart = frameN;  // exact frame index
      
      right_box.setAutoDraw(true);
    }
    
    
    // *top_box* updates
    if (t >= 0.0 && top_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_box.tStart = t;  // (not accounting for frame time here)
      top_box.frameNStart = frameN;  // exact frame index
      
      top_box.setAutoDraw(true);
    }
    
    
    if (plane.status === PsychoJS.Status.STARTED){ // only update if being drawn
      plane.setFillColor(new util.Color(p1c), false);
    }
    
    // *plane* updates
    if (t >= 0.0 && plane.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      plane.tStart = t;  // (not accounting for frame time here)
      plane.frameNStart = frameN;  // exact frame index
      
      plane.setAutoDraw(true);
    }
    
    
    if (plane_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      plane_2.setFillColor(new util.Color(p2c), false);
    }
    
    // *plane_2* updates
    if (t >= 0.0 && plane_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      plane_2.tStart = t;  // (not accounting for frame time here)
      plane_2.frameNStart = frameN;  // exact frame index
      
      plane_2.setAutoDraw(true);
    }
    
    
    if (line.status === PsychoJS.Status.STARTED){ // only update if being drawn
      line.setOri(0.0, false);
    }
    
    // *line* updates
    if (t >= 0.0 && line.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line.tStart = t;  // (not accounting for frame time here)
      line.frameNStart = frameN;  // exact frame index
      
      line.setAutoDraw(true);
    }
    
    // Run 'Each Frame' code from line_spin
    rotate += 1;
    line.setOri(rotate);
    
    
    // *dot* updates
    if (t >= 0.0 && dot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot.tStart = t;  // (not accounting for frame time here)
      dot.frameNStart = frameN;  // exact frame index
      
      dot.setAutoDraw(true);
    }
    
    // Run 'Each Frame' code from move_planes
    if ((mouse.isPressedIn(plane) === true)) {
        selected = "1";
    }
    if ((mouse.isPressedIn(plane_2) === true)) {
        selected = "2";
    }
    
    if ((((p1_db.getOpacity() + p1_cb.getOpacity()) + p1_lb.getOpacity()) === 0)) {
        if ((selected === "1")) {
            p1c = plane_col[1];
        } else {
            p1c = plane_col[0];
        }
    } else {
        p1c = plane_col[2];
    }
    
    if ((((p2_db.getOpacity() + p2_cb.getOpacity()) + p2_lb.getOpacity()) === 0)) {
        if ((selected === "2")) {
            p2c = plane_col[1];
        } else {
            p2c = plane_col[0];
        }
    } else {
        p2c = plane_col[2];
    }
    
    if ((selected === "None")) {
        plane_stats.setOpacity(0);
        advice.setOpacity(0);
        btn_boxes_op = [0, 0, 0];
        btn_boxes = [secret_box_2, secret_box_2, secret_box_2];
        stat_check = ["", "", ""]
        suggestion = "";
    } else {
        if ((selected === "1")) {
            plane_stats.setOpacity(1);
            advice.setOpacity(1);
            btn_boxes_op = [p1_db.getOpacity(), p1_cb.getOpacity(), p1_lb.getOpacity()];
            btn_boxes = [p1_db, p1_cb, p1_lb];
            stat_check = [size[size_chance1], aod[aod_chance1], soa[soa_chance1]]
            suggestion = suggestion1;
        } else {
            if ((selected === "2")) {
                plane_stats.setOpacity(1);
                advice.setOpacity(1);
                btn_boxes_op = [p2_db.getOpacity(), p2_cb.getOpacity(), p2_lb.getOpacity()];
                btn_boxes = [p2_db, p2_cb, p2_lb];
                stat_check = [size[size_chance2], aod[aod_chance2], soa[soa_chance2]]
                suggestion = suggestion2;
            }
        }
    }
    if ((p1_kick === true)) {
        if ((ticker1 !== ti)) {
            plane.pos = [x1, y1];
            x1 -= x1_change;
            y1 -= y1_change;
            ticker1 += 1;
        } else {
            if ((selected === "1")) {
                selected = "None";
                plane_stats.setOpacity(0);
            }
            if ((p1_db.getOpacity() === 1)) {
                choice1 = "divert";
            } else {
                if ((p1_cb.getOpacity() === 1)) {
                    choice1 = "circle";
                } else {
                    if ((p1_lb.getOpacity() === 1)) {
                        choice1 = "land";
                    }
                }
            }
            if ((choice1 !== "")) {
                if ((choice1 === suggestion1)) {
                    answers.push("correct");
                } else {
                    answers.push("incorrect");
                }
            } else {
                answers.push("no selection");
            }
            correct_answers.push(suggestion1);
            given_answers.push(choice1);
            choice1 = "";
            chance1 = Math.floor(Math.random() * 12);
            size_chance1 = Math.floor(Math.random() * 2);
            aod_chance1 = Math.floor(Math.random() * 2);
            soa_chance1 = Math.floor(Math.random() * 2);
            x1 = x[chance1];
            y1 = y[chance1];
            plane.pos = [x[chance1], y[chance1]];
            x1_change = (x[chance1] / ti);
            y1_change = (y[chance1] / ti);
            p1_db.setOpacity(0);
            p1_cb.setOpacity(0);
            p1_lb.setOpacity(0);
            if ((((size_chance1 + aod_chance1) + soa_chance1) === 0)) {
                suggestion1 = "land";
            } else {
                if ((((size_chance1 + aod_chance1) + soa_chance1) === 3)) {
                    suggestion1 = "divert";
                } else {
                    suggestion1 = "circle";
                }
            }
            ticker1 = 0;
            tests_done1 += 1;
            if ((secret_box_3.getOpacity() === 1)) {
                a_used.push("yes");
                secret_box_3.setOpacity(0);
            } else {
                a_used.push("no");
            }
    
            if ((tests_done1 === tests)) {
                tests_done1 = 0;
                p1_kick = false;
                plane.pos = [-2, -2]
            }
        }
    }
    
    if ((p2_timer === p2_kick)) {
        if ((ticker2 !== ti)) {
            plane_2.pos = [x2, y2];
            x2 -= x2_change;
            y2 -= y2_change;
            ticker2 += 1;
        } else {
            if ((selected === "2")) {
                selected = "None";
                plane_stats.setOpacity(0);
            }
            if ((p2_db.getOpacity() === 1)) {
                choice2 = "divert";
            } else {
                if ((p2_cb.getOpacity() === 1)) {
                    choice2 = "circle";
                } else {
                    if ((p2_lb.getOpacity() === 1)) {
                        choice2 = "land";
                    }
                }
            }
            if ((choice2 !== "")) {
                if ((choice2 === suggestion2)) {
                    answers.push("correct");
                } else {
                    answers.push("incorrect");
                }
            } else {
                answers.push("no selection");
            }
            correct_answers.push(suggestion2);
            given_answers.push(choice2);
            choice2 = "";
            chance2 = Math.floor(Math.random() * 12);
            size_chance2 = Math.floor(Math.random() * 2);
            aod_chance2 = Math.floor(Math.random() * 2);
            soa_chance2 = Math.floor(Math.random() * 2);
            x2 = x[chance2];
            y2 = y[chance2];
            plane_2.pos = [x[chance2], y[chance2]];
            x2_change = (x[chance2] / ti);
            y2_change = (y[chance2] / ti);
            p2_db.setOpacity(0);
            p2_cb.setOpacity(0);
            p2_lb.setOpacity(0);
            if ((((size_chance2 + aod_chance2) + soa_chance2) === 0)) {
                suggestion2 = "land";
            } else {
                if ((((size_chance2 + aod_chance2) + soa_chance2) === 3)) {
                    suggestion2 = "divert";
                } else {
                    suggestion2 = "circle";
                }
            }
            ticker2 = 0;
            tests_done2 += 1;
            if ((secret_box_4.getOpacity() === 1)) {
                a_used.push("yes");
                secret_box_4.setOpacity(0);
            } else {
                a_used.push("no");
            }
    
            if ((tests_done2 === tests)) {
                tests_done2 = 0;
                p1_kick = true;
                p2_timer = 0;
                plane_2.pos = [-2, -2]
                continueRoutine = false;
            }
        }
    }
    
    if ((p2_timer !== p2_kick)) {
        p2_timer += 1;
    }
    
    if (advice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      advice.setText((("Your advisor suggests selecting " + suggestion) + " for this aircraft."), false);
    }
    
    // *advice* updates
    if (t >= 0.0 && advice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advice.tStart = t;  // (not accounting for frame time here)
      advice.frameNStart = frameN;  // exact frame index
      
      advice.setAutoDraw(true);
    }
    
    
    // *advice_button* updates
    if (t >= 0 && advice_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advice_button.tStart = t;  // (not accounting for frame time here)
      advice_button.frameNStart = frameN;  // exact frame index
      
      advice_button.setAutoDraw(true);
    }
    
    if (advice_button.status === PsychoJS.Status.STARTED) {
      // check whether advice_button has been pressed
      if (advice_button.isClicked) {
        if (!advice_button.wasClicked) {
          // store time of first click
          advice_button.timesOn.push(advice_button.clock.getTime());
          // store time clicked until
          advice_button.timesOff.push(advice_button.clock.getTime());
        } else {
          // update time clicked until;
          advice_button.timesOff[advice_button.timesOff.length - 1] = advice_button.clock.getTime();
        }
        if ((suggestion === "divert")) {
            btn_boxes[0].setOpacity(1);
            btn_boxes[1].setOpacity(0);
            btn_boxes[2].setOpacity(0);
        } else {
            if ((suggestion === "circle")) {
                btn_boxes[0].setOpacity(0);
                btn_boxes[1].setOpacity(1);
                btn_boxes[2].setOpacity(0);
            } else {
                if ((suggestion === "land")) {
                    btn_boxes[0].setOpacity(0);
                    btn_boxes[1].setOpacity(0);
                    btn_boxes[2].setOpacity(1);
                }
            }
        }
        if ((selected === "1")) {
            secret_box_3.setOpacity(1);
        } else {
            if ((selected === "2")) {
                secret_box_4.setOpacity(1);
            }
        }
        // if advice_button is still clicked next frame, it is not a new click
        advice_button.wasClicked = true;
      } else {
        // if advice_button is clicked next frame, it is a new click
        advice_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if advice_button hasn't started / has finished
      advice_button.clock.reset();
      // if advice_button is clicked next frame, it is a new click
      advice_button.wasClicked = false;
    }
    
    // *p1_db* updates
    if (t >= 0.0 && p1_db.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_db.tStart = t;  // (not accounting for frame time here)
      p1_db.frameNStart = frameN;  // exact frame index
      
      p1_db.setAutoDraw(true);
    }
    
    
    // *p2_db* updates
    if (t >= 0.0 && p2_db.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p2_db.tStart = t;  // (not accounting for frame time here)
      p2_db.frameNStart = frameN;  // exact frame index
      
      p2_db.setAutoDraw(true);
    }
    
    
    if (divert_box.status === PsychoJS.Status.STARTED){ // only update if being drawn
      divert_box.setOpacity(btn_boxes_op[0], false);
    }
    
    // *divert_box* updates
    if (t >= 0.0 && divert_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      divert_box.tStart = t;  // (not accounting for frame time here)
      divert_box.frameNStart = frameN;  // exact frame index
      
      divert_box.setAutoDraw(true);
    }
    
    
    // *divert_button* updates
    if (t >= 0 && divert_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      divert_button.tStart = t;  // (not accounting for frame time here)
      divert_button.frameNStart = frameN;  // exact frame index
      
      divert_button.setAutoDraw(true);
    }
    
    if (divert_button.status === PsychoJS.Status.STARTED) {
      // check whether divert_button has been pressed
      if (divert_button.isClicked) {
        if (!divert_button.wasClicked) {
          // store time of first click
          divert_button.timesOn.push(divert_button.clock.getTime());
          // store time clicked until
          divert_button.timesOff.push(divert_button.clock.getTime());
        } else {
          // update time clicked until;
          divert_button.timesOff[divert_button.timesOff.length - 1] = divert_button.clock.getTime();
        }
        if (!divert_button.wasClicked) {
          btn_boxes[0].setOpacity(1);
          btn_boxes[1].setOpacity(0);
          btn_boxes[2].setOpacity(0);
        }
        // if divert_button is still clicked next frame, it is not a new click
        divert_button.wasClicked = true;
      } else {
        // if divert_button is clicked next frame, it is a new click
        divert_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if divert_button hasn't started / has finished
      divert_button.clock.reset();
      // if divert_button is clicked next frame, it is a new click
      divert_button.wasClicked = false;
    }
    
    // *p1_cb* updates
    if (t >= 0.0 && p1_cb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_cb.tStart = t;  // (not accounting for frame time here)
      p1_cb.frameNStart = frameN;  // exact frame index
      
      p1_cb.setAutoDraw(true);
    }
    
    
    // *p2_cb* updates
    if (t >= 0.0 && p2_cb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p2_cb.tStart = t;  // (not accounting for frame time here)
      p2_cb.frameNStart = frameN;  // exact frame index
      
      p2_cb.setAutoDraw(true);
    }
    
    
    if (circle_box.status === PsychoJS.Status.STARTED){ // only update if being drawn
      circle_box.setOpacity(btn_boxes_op[1], false);
    }
    
    // *circle_box* updates
    if (t >= 0.0 && circle_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_box.tStart = t;  // (not accounting for frame time here)
      circle_box.frameNStart = frameN;  // exact frame index
      
      circle_box.setAutoDraw(true);
    }
    
    
    // *circle_button* updates
    if (t >= 0 && circle_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_button.tStart = t;  // (not accounting for frame time here)
      circle_button.frameNStart = frameN;  // exact frame index
      
      circle_button.setAutoDraw(true);
    }
    
    if (circle_button.status === PsychoJS.Status.STARTED) {
      // check whether circle_button has been pressed
      if (circle_button.isClicked) {
        if (!circle_button.wasClicked) {
          // store time of first click
          circle_button.timesOn.push(circle_button.clock.getTime());
          // store time clicked until
          circle_button.timesOff.push(circle_button.clock.getTime());
        } else {
          // update time clicked until;
          circle_button.timesOff[circle_button.timesOff.length - 1] = circle_button.clock.getTime();
        }
        if (!circle_button.wasClicked) {
          btn_boxes[0].setOpacity(0);
          btn_boxes[1].setOpacity(1);
          btn_boxes[2].setOpacity(0);
        }
        // if circle_button is still clicked next frame, it is not a new click
        circle_button.wasClicked = true;
      } else {
        // if circle_button is clicked next frame, it is a new click
        circle_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if circle_button hasn't started / has finished
      circle_button.clock.reset();
      // if circle_button is clicked next frame, it is a new click
      circle_button.wasClicked = false;
    }
    
    // *p1_lb* updates
    if (t >= 0.0 && p1_lb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_lb.tStart = t;  // (not accounting for frame time here)
      p1_lb.frameNStart = frameN;  // exact frame index
      
      p1_lb.setAutoDraw(true);
    }
    
    
    // *p2_lb* updates
    if (t >= 0.0 && p2_lb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p2_lb.tStart = t;  // (not accounting for frame time here)
      p2_lb.frameNStart = frameN;  // exact frame index
      
      p2_lb.setAutoDraw(true);
    }
    
    
    if (land_box.status === PsychoJS.Status.STARTED){ // only update if being drawn
      land_box.setOpacity(btn_boxes_op[2], false);
    }
    
    // *land_box* updates
    if (t >= 0.0 && land_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      land_box.tStart = t;  // (not accounting for frame time here)
      land_box.frameNStart = frameN;  // exact frame index
      
      land_box.setAutoDraw(true);
    }
    
    
    // *land_button* updates
    if (t >= 0 && land_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      land_button.tStart = t;  // (not accounting for frame time here)
      land_button.frameNStart = frameN;  // exact frame index
      
      land_button.setAutoDraw(true);
    }
    
    if (land_button.status === PsychoJS.Status.STARTED) {
      // check whether land_button has been pressed
      if (land_button.isClicked) {
        if (!land_button.wasClicked) {
          // store time of first click
          land_button.timesOn.push(land_button.clock.getTime());
          // store time clicked until
          land_button.timesOff.push(land_button.clock.getTime());
        } else {
          // update time clicked until;
          land_button.timesOff[land_button.timesOff.length - 1] = land_button.clock.getTime();
        }
        if (!land_button.wasClicked) {
          btn_boxes[0].setOpacity(0);
          btn_boxes[1].setOpacity(0);
          btn_boxes[2].setOpacity(1);
        }
        // if land_button is still clicked next frame, it is not a new click
        land_button.wasClicked = true;
      } else {
        // if land_button is clicked next frame, it is a new click
        land_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if land_button hasn't started / has finished
      land_button.clock.reset();
      // if land_button is clicked next frame, it is a new click
      land_button.wasClicked = false;
    }
    
    if (plane_stats.status === PsychoJS.Status.STARTED){ // only update if being drawn
      plane_stats.setText((((((("Size: " + stat_check[0]) + " | Angle: ") + stat_check[1]) + " Degrees | Speed: ") + stat_check[2]) + "km/h"), false);
    }
    
    // *plane_stats* updates
    if (t >= 0.0 && plane_stats.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      plane_stats.tStart = t;  // (not accounting for frame time here)
      plane_stats.frameNStart = frameN;  // exact frame index
      
      plane_stats.setAutoDraw(true);
    }
    
    
    // *advisor_title* updates
    if (t >= 0.0 && advisor_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advisor_title.tStart = t;  // (not accounting for frame time here)
      advisor_title.frameNStart = frameN;  // exact frame index
      
      advisor_title.setAutoDraw(true);
    }
    
    
    // *response_title* updates
    if (t >= 0.0 && response_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_title.tStart = t;  // (not accounting for frame time here)
      response_title.frameNStart = frameN;  // exact frame index
      
      response_title.setAutoDraw(true);
    }
    
    // start/stop sound_1
    if (t >= 3 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_1.getDuration() + sound_1.tStart)     && sound_1.status === PsychoJS.Status.STARTED) {
      sound_1.stop();  // stop the sound (if longer than duration)
      sound_1.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_2
    if (t >= 12 && sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_2.tStart = t;  // (not accounting for frame time here)
      sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_2.play(); });  // screen flip
      sound_2.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_2.getDuration() + sound_2.tStart)     && sound_2.status === PsychoJS.Status.STARTED) {
      sound_2.stop();  // stop the sound (if longer than duration)
      sound_2.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_3
    if (t >= 21 && sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_3.tStart = t;  // (not accounting for frame time here)
      sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_3.play(); });  // screen flip
      sound_3.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_3.getDuration() + sound_3.tStart)     && sound_3.status === PsychoJS.Status.STARTED) {
      sound_3.stop();  // stop the sound (if longer than duration)
      sound_3.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_4
    if (t >= 30 && sound_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_4.tStart = t;  // (not accounting for frame time here)
      sound_4.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_4.play(); });  // screen flip
      sound_4.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_4.getDuration() + sound_4.tStart)     && sound_4.status === PsychoJS.Status.STARTED) {
      sound_4.stop();  // stop the sound (if longer than duration)
      sound_4.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_5
    if (t >= 39 && sound_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_5.tStart = t;  // (not accounting for frame time here)
      sound_5.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_5.play(); });  // screen flip
      sound_5.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_5.getDuration() + sound_5.tStart)     && sound_5.status === PsychoJS.Status.STARTED) {
      sound_5.stop();  // stop the sound (if longer than duration)
      sound_5.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_6
    if (t >= 48 && sound_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_6.tStart = t;  // (not accounting for frame time here)
      sound_6.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_6.play(); });  // screen flip
      sound_6.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_6.getDuration() + sound_6.tStart)     && sound_6.status === PsychoJS.Status.STARTED) {
      sound_6.stop();  // stop the sound (if longer than duration)
      sound_6.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_7
    if (t >= 57 && sound_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_7.tStart = t;  // (not accounting for frame time here)
      sound_7.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_7.play(); });  // screen flip
      sound_7.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_7.getDuration() + sound_7.tStart)     && sound_7.status === PsychoJS.Status.STARTED) {
      sound_7.stop();  // stop the sound (if longer than duration)
      sound_7.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_8
    if (t >= 66 && sound_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_8.tStart = t;  // (not accounting for frame time here)
      sound_8.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_8.play(); });  // screen flip
      sound_8.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_8.getDuration() + sound_8.tStart)     && sound_8.status === PsychoJS.Status.STARTED) {
      sound_8.stop();  // stop the sound (if longer than duration)
      sound_8.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_9
    if (t >= 75 && sound_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_9.tStart = t;  // (not accounting for frame time here)
      sound_9.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_9.play(); });  // screen flip
      sound_9.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_9.getDuration() + sound_9.tStart)     && sound_9.status === PsychoJS.Status.STARTED) {
      sound_9.stop();  // stop the sound (if longer than duration)
      sound_9.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_10
    if (t >= 84 && sound_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_10.tStart = t;  // (not accounting for frame time here)
      sound_10.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_10.play(); });  // screen flip
      sound_10.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_10.getDuration() + sound_10.tStart)     && sound_10.status === PsychoJS.Status.STARTED) {
      sound_10.stop();  // stop the sound (if longer than duration)
      sound_10.status = PsychoJS.Status.FINISHED;
    }
    
    // *secret_box_2* updates
    if (t >= 0.0 && secret_box_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      secret_box_2.tStart = t;  // (not accounting for frame time here)
      secret_box_2.frameNStart = frameN;  // exact frame index
      
      secret_box_2.setAutoDraw(true);
    }
    
    
    // *secret_box_3* updates
    if (t >= 0.0 && secret_box_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      secret_box_3.tStart = t;  // (not accounting for frame time here)
      secret_box_3.frameNStart = frameN;  // exact frame index
      
      secret_box_3.setAutoDraw(true);
    }
    
    
    // *secret_box_4* updates
    if (t >= 0.0 && secret_box_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      secret_box_4.tStart = t;  // (not accounting for frame time here)
      secret_box_4.frameNStart = frameN;  // exact frame index
      
      secret_box_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    psychoJS.experiment.addData('advice_button.numClicks', advice_button.numClicks);
    psychoJS.experiment.addData('advice_button.timesOn', advice_button.timesOn);
    psychoJS.experiment.addData('advice_button.timesOff', advice_button.timesOff);
    psychoJS.experiment.addData('divert_button.numClicks', divert_button.numClicks);
    psychoJS.experiment.addData('divert_button.timesOn', divert_button.timesOn);
    psychoJS.experiment.addData('divert_button.timesOff', divert_button.timesOff);
    psychoJS.experiment.addData('circle_button.numClicks', circle_button.numClicks);
    psychoJS.experiment.addData('circle_button.timesOn', circle_button.timesOn);
    psychoJS.experiment.addData('circle_button.timesOff', circle_button.timesOff);
    psychoJS.experiment.addData('land_button.numClicks', land_button.numClicks);
    psychoJS.experiment.addData('land_button.timesOn', land_button.timesOn);
    psychoJS.experiment.addData('land_button.timesOff', land_button.timesOff);
    sound_1.stop();  // ensure sound has stopped at end of Routine
    sound_2.stop();  // ensure sound has stopped at end of Routine
    sound_3.stop();  // ensure sound has stopped at end of Routine
    sound_4.stop();  // ensure sound has stopped at end of Routine
    sound_5.stop();  // ensure sound has stopped at end of Routine
    sound_6.stop();  // ensure sound has stopped at end of Routine
    sound_7.stop();  // ensure sound has stopped at end of Routine
    sound_8.stop();  // ensure sound has stopped at end of Routine
    sound_9.stop();  // ensure sound has stopped at end of Routine
    sound_10.stop();  // ensure sound has stopped at end of Routine
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var outroMaxDurationReached;
var outroMaxDuration;
var outroComponents;
function outroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'outro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    outroClock.reset();
    routineTimer.reset();
    outroMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from results_handler
    answers.shift()
    a_used.shift()
    correct_answers.shift()
    given_answers.shift()
    answers.shift()
    a_used.shift()
    correct_answers.shift()
    given_answers.shift()
    
    psychoJS.experiment.addData("correct_or_incorrect", answers);
    psychoJS.experiment.addData("advice_taken", a_used);
    psychoJS.experiment.addData("participant_answers", given_answers);
    psychoJS.experiment.addData("correct_answers", correct_answers);
    psychoJS.experiment.addData("expert", expert);
    if ((positive === true)) {
        psychoJS.experiment.addData("tbibgs", "positive");
    } else {
        psychoJS.experiment.addData("tbibgs", "negative");
    }
    psychoJS.experiment.addData("memorable_code", expInfo['Memorable Code']);
    // reset play_button_7 to account for continued clicks & clear times on/off
    play_button_7.reset()
    happy.setValue('Happy.ogg');
    happy.setVolume(1.0);
    // reset next_button_6 to account for continued clicks & clear times on/off
    next_button_6.reset()
    psychoJS.experiment.addData('outro.started', globalClock.getTime());
    outroMaxDuration = null
    // keep track of which components have finished
    outroComponents = [];
    outroComponents.push(ty_title);
    outroComponents.push(thank_you);
    outroComponents.push(play_button_7);
    outroComponents.push(happy);
    outroComponents.push(next_button_6);
    
    outroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var happy_play;
function outroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'outro' ---
    // get current time
    t = outroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ty_title* updates
    if (t >= 0.0 && ty_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ty_title.tStart = t;  // (not accounting for frame time here)
      ty_title.frameNStart = frameN;  // exact frame index
      
      ty_title.setAutoDraw(true);
    }
    
    
    // *thank_you* updates
    if (t >= 0.0 && thank_you.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thank_you.tStart = t;  // (not accounting for frame time here)
      thank_you.frameNStart = frameN;  // exact frame index
      
      thank_you.setAutoDraw(true);
    }
    
    
    // *play_button_7* updates
    if (t >= 0 && play_button_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      play_button_7.tStart = t;  // (not accounting for frame time here)
      play_button_7.frameNStart = frameN;  // exact frame index
      
      play_button_7.setAutoDraw(true);
    }
    
    if (play_button_7.status === PsychoJS.Status.STARTED) {
      // check whether play_button_7 has been pressed
      if (play_button_7.isClicked) {
        if (!play_button_7.wasClicked) {
          // store time of first click
          play_button_7.timesOn.push(play_button_7.clock.getTime());
          // store time clicked until
          play_button_7.timesOff.push(play_button_7.clock.getTime());
        } else {
          // update time clicked until;
          play_button_7.timesOff[play_button_7.timesOff.length - 1] = play_button_7.clock.getTime();
        }
        if (!play_button_7.wasClicked) {
          var happy_play;
          happy_play = true;
        }
        // if play_button_7 is still clicked next frame, it is not a new click
        play_button_7.wasClicked = true;
      } else {
        // if play_button_7 is clicked next frame, it is a new click
        play_button_7.wasClicked = false;
      }
    } else {
      // keep clock at 0 if play_button_7 hasn't started / has finished
      play_button_7.clock.reset();
      // if play_button_7 is clicked next frame, it is a new click
      play_button_7.wasClicked = false;
    }
    // start/stop happy
    if ((happy_play) && happy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      happy.tStart = t;  // (not accounting for frame time here)
      happy.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ happy.play(); });  // screen flip
      happy.status = PsychoJS.Status.STARTED;
    }
    if (t >= (happy.getDuration() + happy.tStart)     && happy.status === PsychoJS.Status.STARTED) {
      happy.stop();  // stop the sound (if longer than duration)
      happy.status = PsychoJS.Status.FINISHED;
    }
    
    // *next_button_6* updates
    if (t >= 0 && next_button_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button_6.tStart = t;  // (not accounting for frame time here)
      next_button_6.frameNStart = frameN;  // exact frame index
      
      next_button_6.setAutoDraw(true);
    }
    
    if (next_button_6.status === PsychoJS.Status.STARTED) {
      // check whether next_button_6 has been pressed
      if (next_button_6.isClicked) {
        if (!next_button_6.wasClicked) {
          // store time of first click
          next_button_6.timesOn.push(next_button_6.clock.getTime());
          // store time clicked until
          next_button_6.timesOff.push(next_button_6.clock.getTime());
        } else {
          // update time clicked until;
          next_button_6.timesOff[next_button_6.timesOff.length - 1] = next_button_6.clock.getTime();
        }
        if (!next_button_6.wasClicked) {
          // end routine when next_button_6 is clicked
          continueRoutine = false;
          
        }
        // if next_button_6 is still clicked next frame, it is not a new click
        next_button_6.wasClicked = true;
      } else {
        // if next_button_6 is clicked next frame, it is a new click
        next_button_6.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_button_6 hasn't started / has finished
      next_button_6.clock.reset();
      // if next_button_6 is clicked next frame, it is a new click
      next_button_6.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    outroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function outroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'outro' ---
    outroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('outro.stopped', globalClock.getTime());
    psychoJS._saveResults = 1;
    psychoJS.experiment.addData('play_button_7.numClicks', play_button_7.numClicks);
    psychoJS.experiment.addData('play_button_7.timesOn', play_button_7.timesOn);
    psychoJS.experiment.addData('play_button_7.timesOff', play_button_7.timesOff);
    happy.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('next_button_6.numClicks', next_button_6.numClicks);
    psychoJS.experiment.addData('next_button_6.timesOn', next_button_6.timesOn);
    psychoJS.experiment.addData('next_button_6.timesOff', next_button_6.timesOff);
    // the Routine "outro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  // Switch off cam
  cam.close()
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
