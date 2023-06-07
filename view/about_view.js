export default class about_view {
    constructor (nav_p, nav_l_r) {
        this.nav_p = nav_p;
        this.nav_l_r = nav_l_r;
        if ("http://localhost:5500/about.html" == window.location.href) {
            window.addEventListener('pageshow', this.about_hide_auth_and_reg_on_log_in.bind(this));
        }
    }

    about_hide_auth_and_reg_on_log_in()
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
}