export default class app_model {
    constructor() {
        this.output = "";
    }

    save_in_history(expr, res)
    {
        let usr_acc = JSON.parse(localStorage.getItem(sessionStorage.getItem("email")));

        const record = {
            number: usr_acc["history"].length + 1,
            expression: expr,
            result: res
        };

        usr_acc.history.push(record);
        localStorage.setItem(sessionStorage.getItem("email"), JSON.stringify(usr_acc));
    }

    calculation(expr, num_sys)
    {    
        let op1 = /-?[0-9A-Fa-f]+/;
        let op2 = / -?[0-9A-Fa-f]+/;
        let operation = / [+*/-] /;

        op1 = op1.exec(expr);
        op2 = op2.exec(expr);
        operation = operation.exec(expr);

        if (op1 == null)
        {
            return "Error: first operand is absent";
        }
        else if (op2 == null)
        {
            return "Error: second operand is absent";
        }
        if (operation == null)
        {
            return "Error: operator is absent";
        }

        op2 = /-?[0-9A-Fa-f]+/.exec(op2[0]);
        operation = /[+*/-]/.exec(operation[0]);

        op1 = op1[0];
        op2 = op2[0];
        operation = operation[0];

        if (num_sys == "d")
        {
            if ((/[A-F]/.test(op1) == true) || (/[A-F]/.test(op2) == true)) 
            {
                return "Error: value isn't decimal";
            }

            if ((op1.search("0") == 0) || (op2.search("0") == 0)) 
            {
                if ((op1.length > 1) || (op2.length > 1))
                {
                    return "Error: 0 can't be the first digit in operand";
                } 
            }

            if ((op1.search("-") == 0) || (op2.search("-") == 0)) 
            {
                if ((op1.search("0") == 1) || (op2.search("0") == 1)) 
                {
                    if ((op1.length > 2) || (op2.length > 2))
                    {
                        return "Error: 0 can't be the first digit in operand";
                    } 
                } 
            }
        }
        else if (num_sys == "b")
        {
            if ((/[2-9A-F]/.test(op1) == true) || (/[2-9A-F]/.test(op2) == true))
            {
                return "Error: value isn't binary";
            }

            if ((op1.search("0") == 0) || (op2.search("0") == 0)) 
            {
                if ((op1.length > 1) || (op2.length > 1))
                {
                    return "Error: 0 can't be the first digit in operand";
                } 
            }

            if ((op1.search("-") == 0) || (op2.search("-") == 0)) 
            {
                return "Error: '-' is not allowed in this format";
            }

            op1 = "0b" + op1;
            op2 = "0b" + op2;
        }
        else if (num_sys == "h")
        {
            if ((op1.search("0") == 0) || (op2.search("0") == 0)) 
            {
                if ((op1.length > 1) || (op2.length > 1))
                {
                    return "Error: 0 can't be the first digit in operand";
                } 
            }

            if ((op1.search("-") == 0) || (op2.search("-") == 0)) 
            {
                return "Error: '-' is not allowed in this format";
            }

            op1 = "0x" + op1;
            op2 = "0x" + op2;
        }

        op1 = Number(op1);
        op2 = Number(op2);

        switch (operation) {
            case "+":
                this.output = op1 + op2;
                break;

            case "-":
                this.output = op1 - op2;
                break;

            case "*":
                this.output = op1 * op2;
                break;
            case "/":
                if (op2 == 0)
                {
                    return "Error: division by zero";
                }
                else
                {
                    this.output = op1 / op2;
                    break;
                }
        }

        if (num_sys == "d")
        {
           this.output = this.output.toString(10);
        }
        else if (num_sys == "b")
        {
            this.output = this.output.toString(2);
        }
        else if (num_sys == "h")
        {
            this.output = this.output.toString(16);
        }

        if (sessionStorage.getItem("email") != null)
        {
            this.save_in_history(expr, this.output);
        }

        return this.output;
    }
}