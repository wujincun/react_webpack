/**
 * Created by wujincun on 2016/10/17.
 */
var fn = () =>{
    console.log(123)
};
fn();

class Student{
    hello(){
        console.log("hello")
    }
}
var s = new Student;
s.hello();

class leo extends Student{

}
var l = new leo;
l.hello();

