const bus = {
    whichBtn: '',
    list: [],
    subscribe: function(cb){
        this.list.push(cb)
    },
    publish: function(){
        this.list.forEach(item => item && item())
    }
}