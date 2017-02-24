### getter 和 setter  
JavaScript高级程序设计第714页如是说：  
ES6中类语法支持直接为属性定义getter和setter,从而避免了调用Object.defineProperty()的麻烦。为新属性定义getter和setter与定义方法类似，只不过要在方法名前加上get和set关键。

       class Person{
         constructor(name,age){
           public name = name;
           public age = age;
           private innerTitle ="";

           get title(){
             return innerTitle;
           }

           set title(value){
             alert(this.name);
           }

           getOlder(years){
             this.age += years;
           }
         }
       }    


Pserson类为title属性定义了一个getter和setter。这两个操作innerTitle变量的函数都定义在构造函数中。要为原属性定义getter和setter,语法相同，但要在构造函数外部定义。  
