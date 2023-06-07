export default class history_view {
    constructor (tab_calc_hst) {
        this.tab_calc_hst = tab_calc_hst;
        if ("http://localhost:5500/history.html" == window.location.href) {
            window.addEventListener('pageshow', this.show_calculation_history.bind(this));
        }
    }

    show_calculation_history()
    {
        let usr_acc = JSON.parse(localStorage.getItem(sessionStorage.getItem("email")));

        for (let i = 0; i < usr_acc["history"].length; i++)
        {
            let row = document.createElement("tr");
        
            let col_n = document.createElement("td");
            let col_e = document.createElement("td");
            let col_r = document.createElement("td");
    
            col_n.innerText = usr_acc["history"].at(i)["number"];
            col_e.innerText = usr_acc["history"].at(i)["expression"]
            col_r.innerText = usr_acc["history"].at(i)["result"];
    
            row.appendChild(col_n);
            row.appendChild(col_e);
            row.appendChild(col_r);
    
            this.tab_calc_hst.appendChild(row);
        }
    }
}