const getData = async() => {
    var y = await " Hi Shrilakshmi";
    console.log(y);
}
 
console.log(1);
getData();
console.log(2);



//2)
function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => resolve("Hiiiii"));
    let second_promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello Shrilakshmi");
      }, 1000);
    });
    let combined_promise = Promise.all([first_promise, second_promise]);
    return combined_promise;
  }
   
  async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
  }
   
  display();