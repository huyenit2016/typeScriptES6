let employee = {
    id : 10001,
    greet : function()
    {
        let self = this;
        setTimeout(function()
        {
            console.log("employee[id] = "+self.id);
        },1000);
        setTimeout(()=>console.log("employee[id1] = "+self.id),1000);
    }
}
employee.greet();