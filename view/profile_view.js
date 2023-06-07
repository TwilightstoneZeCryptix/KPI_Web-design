export default class profile_view {
    constructor (tab_pr_inf) {
        this.tab_pr_inf = tab_pr_inf;
        if ("http://localhost:5500/profile.html" == window.location.href) {
            window.addEventListener('pageshow', this.show_profile_info.bind(this));
        }
    }

    show_profile_info()
    {
        let row = document.createElement("tr");
        
        let col_n = document.createElement("td");
        let col_bd = document.createElement("td");
        let col_m = document.createElement("td");

        let usr_acc = JSON.parse(localStorage.getItem(sessionStorage.getItem("email")));

        col_n.innerText = usr_acc["username"];
        col_bd.innerText = usr_acc["birth_date"];
        col_m.innerText = sessionStorage.getItem("email");

        row.appendChild(col_n);
        row.appendChild(col_bd);
        row.appendChild(col_m);

        this.tab_pr_inf.appendChild(row);
    }
}