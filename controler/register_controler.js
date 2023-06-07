export default class register_controller {
    constructor (register_model, register_view, btn_submit) {
        this.register_model = register_model;
        this.register_view = register_view;
        this.btn_submit = btn_submit;
        if ("http://localhost:5500/register.html" == window.location.href) {
            this.btn_submit.addEventListener('click', this.register_start.bind(this));
        }
    }

    register_start()
    {
        this.register_view.show_message(this.register_model.submit());
    }
}