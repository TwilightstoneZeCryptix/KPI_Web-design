import app_controler from "./controler/app_controler.js";
import log_in_controller from "./controler/log-in_controler.js";
import register_controller from "./controler/register_controler.js";
import app_model from "./model/app_model.js";
import log_in_model from "./model/log-in_model.js";
import register_model from "./model/register_model.js";
import about_view from "./view/about_view.js";
import app_view from "./view/app_view.js";
import history_view from "./view/history_view.js";
import log_in_view from "./view/log-in_view.js";
import profile_view from "./view/profile_view.js";
import register_view from "./view/register_view.js";

let form_reg_name = document.getElementById("RegInputName");
let form_reg_email = document.getElementById("RegInputEmail");
let gender_radio_buttons = document.getElementsByName("gender");
let form_reg_date_of_birth = document.getElementById("RegInputDateOfBirth");
let form_reg_password = document.getElementById("RegInputPassword");
let reg_submit_button = document.getElementById("btnRegSubmit");

let form_log_in_email = document.getElementById("inputEmail");
let form_log_in_password = document.getElementById("inputPassword");
let log_in_submit_button = document.getElementById("btnLogInSubmit");

let nav_profile_hidden = document.getElementsByClassName("nav-item nav-link prf text-cyan-400 visually-hidden");
let nav_login_register_visible = document.getElementsByClassName("nav-item nav-link logreg text-cyan-400");

let tab_profile_info = document.getElementById("profile_info");

let tab_calculation_history = document.getElementById("calculation_history");

let form_output = document.getElementById("outputResult");
let form_input = document.getElementById("inputExpression");
let calculate_button = document.getElementById("btnCalc");
let numeric_system_radio_buttons = document.getElementsByName("number_system");

let register_v = new register_view();
let register_m = new register_model(form_reg_name, form_reg_email, gender_radio_buttons, form_reg_date_of_birth, form_reg_password);
let register_c = new register_controller(register_m, register_v, reg_submit_button);

let log_in_v = new log_in_view();
let log_in_m = new log_in_model(form_log_in_email, form_log_in_password);
let log_in_c = new log_in_controller(log_in_m, log_in_v, log_in_submit_button);

let about_v = new about_view(nav_profile_hidden, nav_login_register_visible);

let profile_v = new profile_view(tab_profile_info);

let history_v = new history_view(tab_calculation_history);

let app_v = new app_view(form_output, nav_profile_hidden, nav_login_register_visible);
let app_m = new app_model();
let app_c = new app_controler(app_m, app_v, calculate_button, numeric_system_radio_buttons, form_input);