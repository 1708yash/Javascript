// context and prototyping
const vehicle = function (make, model) {

  this.make = make;
  this.model = model;
  this.print = function () {
    return `${this.make} ${this.model}`;
  };
};
const charger = new vehicle("dodge", "charger");
const prius = new vehicle("toyota", "prius");
console.log(prius.print());
prius.__proto__ === charger.__proto__ // true
vehicle.prototype.getmaxspeed = function () {
  return 100;
};
console.log(charger.getmaxspeed());

console.log('asynchrony and callbacks')
// used for adjusting server communication and latency in the fetch and request
// example of callback

const config={

    acceptreq:true
}
const promise=new Promise((resolve,reject)=>{
    if(config.acceptreq){
        resolve('accepted')
        console.log('accepted')
    }else{
        reject('rejected')
        console.log('rejected')
    }
})
const lala = function(){
    console.log('lala')
}
//example of async function
const userprofile= async function(){
    let user= await promise
    let userprofiles= await fetch('https://jsonplaceholder.typicode.com/users')

}