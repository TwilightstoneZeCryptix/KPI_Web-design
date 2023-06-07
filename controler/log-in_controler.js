export default class log_in_controller {
    constructor (log_in_model, log_in_view, btn_submit) {
        this.log_in_model = log_in_model;
        this.log_in_view = log_in_view;
        this.btn_submit = btn_submit;
        if ("http://localhost:5500/log-in.html" == window.location.href) {
            this.btn_submit.addEventListener('click', this.log_in_start.bind(this));
        }
    }

    log_in_start()
    {
        this.log_in_view.show_message(this.log_in_model.submit());
    }
}