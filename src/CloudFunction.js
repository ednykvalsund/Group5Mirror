const helloFunction = await Parse.Cloud.run("hello");


const params1 = {number1:3, number2:4}
const sum = await Parse.Cloud.run('sumNumbers', params1);


const params2 = {title:"Launch my App", done:true}
const createToDo = await Parse.Cloud.run('createToDo', params2);


const getToDos = await Parse.Cloud.run('getListToDo');