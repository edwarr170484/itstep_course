const calc = {
    sum: function(a, b) {
        console.log(a + b);
        return this;
    },
    sub: function(a, b) {
        consoli.log(a - b);
        return this;
    },
    mul: function(a, b) {
        console.log(a * b);
        return this;
    },
    div: function(a, b) {
        if(b == 0) {
            console.log(0);
        } else {
            console.log(a / b);
        }
        
        return this;
    }
}


calc.sum(2, 2).div(2, 2).mul(2, 2);