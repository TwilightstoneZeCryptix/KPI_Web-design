export default class log_in_model {
    constructor (frm_m, frm_p) {
        this.frm_m = frm_m;
        this.frm_p = frm_p;
    }

    submit()
    {
        if (localStorage.getItem(this.frm_m.value) == null)
        {
            return "Log-in failed: there is no account registered by this email";
        }
        else
        {
            let usr_acc = JSON.parse(localStorage.getItem(this.frm_m.value));
            if (this.frm_p.value == usr_acc["password"])
            {
                sessionStorage.setItem("email", this.frm_m.value);
                return "Log-in successfull, now, your calculation history will be stored, you can acces it from profile page";
            }
            else
            {
                return "Log-in failed: invalid password";
            }
        }
    }
}