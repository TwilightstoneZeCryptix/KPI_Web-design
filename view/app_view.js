export default class app_view {
    constructor(frm_res_out, nav_p, nav_l_r) {
        this.frm_res_out = frm_res_out;
        this.nav_p = nav_p;
        this.nav_l_r = nav_l_r;
        if ("http://localhost:5500/index.html" == window.location.href) {
            window.addEventListener('pageshow', this.app_hide_auth_and_reg_on_log_in.bind(this));
        }
    }

    app_hide_auth_and_reg_on_log_in()
    {
        if (sessionStorage.getItem("email") != null)
        {
            this.nav_p[0].setAttribute("class", "nav-item nav-link prf text-cyan-400");
            for(let i = 0; i < this.nav_l_r.length; i++)
            {
                this.nav_l_r[i].setAttribute("class", "nav-item nav-link logreg text-cyan-400 visually-hidden");
            }
        }
    }

    show_result(result)
    {
        this.frm_res_out.value = result;
    }
}