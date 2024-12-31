class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }
}

function postFixEvaluation(exp) {
    let stack = new Stack();
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];
        if (!isNaN(c))
            stack.push(c - '0');
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();
            if (val1 == "Underflow" || val2 == "Underflow")
                return "Can not perform postfix evaluation";
            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;
                case '-':
                    stack.push(val2 - val1);
                    break;
                case '/':
                    stack.push(val2 / val1);
                    break;
                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }

    return stack.pop();
}

// calling the above method
// returns 9
console.log(postFixEvaluation("235*+8-")); 

// returns "Can not perform postfix evaluation"
console.log(postFixEvaluation("23*+"));