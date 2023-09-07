import jQuery from  'jquery';
import Hello from './mod/demo';
Hello()
let  data=await jQuery.getJSON('https://jsonplaceholder.typicode.com/todos')
data.forEach(element => {
    console.log(element.title);
});