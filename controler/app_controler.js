export default class app_controler {
    constructor(app_model, app_view, btn_calc, rbtns_num_sys, frm_inp_expr) {
        this.app_model = app_model;
        this.app_view = app_view;
        this.btn_calc = btn_calc;
        this.rbtns_num_sys = rbtns_num_sys;
        this.frm_inp_expr = frm_inp_expr;
        if ("http://localhost:5500/" == window.location.href || "http://localhost:5500/index.html" == window.location.href) {
            this.btn_calc.addEventListener('click', this.app_start.bind(this));
        }
    }

    app_start()
    {
        if(this.rbtns_num_sys[0].checked) {
            this.app_view.show_result(this.app_model.calculation(this.frm_inp_expr.value, "d"));
        }
        else if(this.rbtns_num_sys[1].checked) {
            this.app_view.show_result(this.app_model.calculation(this.frm_inp_expr.value, "b"));
        }
        else if(this.rbtns_num_sys[2].checked) {
            this.app_view.show_result(this.app_model.calculation(this.frm_inp_expr.value, "h"));
        }
    }
}