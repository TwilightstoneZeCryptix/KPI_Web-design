export default class register_model {
    constructor (frm_n, frm_m, rbtns_g, frm_bd, frm_p) {
    this.frm_n = frm_n;
    this.frm_m = frm_m;
    this.rbtns_g = rbtns_g;
    this.frm_bd = frm_bd;
    this.frm_p = frm_p;
    }

    submit()
    {
        if (this.frm_n.value == '' || this.frm_m.value == '' || this.frm_bd.value == '' || this.frm_p.value == '')
        {
            return "Registration failed: some or all fields aren't filled";
        }

        if (this.rbtns_g[0].checked == false && this.rbtns_g[1].checked == false && this.rbtns_g[2].checked == false)
        {
            return "Registration failed: gender not selected";
        }

        let g = "";
        if (this.rbtns_g[0].checked)
        {
            g = "Male";
        }
        else if (this.rbtns_g[1].checked)
        {
            g = "Female";
        }
        else if (this.rbtns_g[2].checked)
        {
            g = "Other";
        }

        const account = {
            username: this.frm_n.value,
            gender: g,
            birth_date: this.frm_bd.value,
            password: this.frm_p.value,
            history: [] 
        };

        if (localStorage.length == 0)
        {
            localStorage.setItem(this.frm_m.value, JSON.stringify(account));
        }
        else
        {
            for(let i = 0; i < localStorage.length; i++)
            {
                if (localStorage.key(i) == this.frm_m.value)
                {
                    return "Registration failed:Account on this email is already registered";
                }
            }

            localStorage.setItem(this.frm_m.value, JSON.stringify(account));
        }

        return "Registration successfull, you can return to main page and log in to your account"
    }
}