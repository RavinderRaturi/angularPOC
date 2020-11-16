/*
Modules : each file in the TS is potentially a module. 
If we add the keywork export to the class defination, it becomes available
 to the others parts of your application and also becomes a MODULE.
 When we have a Import or Export keyword in the file, that file is a module for Typescript 
 point of view.
 */

export class Point {
    //Constructor
    /*
    we cannot create multipe constructor in typescritps like other languages.
    what we can insted do is, make the parameter optional by adding ? after parameter name.
    So if you prefix a Constructor parameter with an access modifier whether private or public
    TypeScript Compiler will generate a field with the exact same name and it will also initialize 
    that field with the value of this argument.
    */
    // constructor(x: number, y?: number) {
    //     this.yAxis = x;
    //     if (y != undefined) {
    //         this.xAxis = y;
    //     }
    // }
    constructor(private x: number, private y: number) {

    }
    //add access modifier to contorl the exposer
    // public private protected
    private yAxis!: number;
    private xAxis!: number;
    draw() {
        console.log('x: ' + this.x + ', Y: ' + this.y)
    }
    getDistance(another: Point) { }

    getyAxis()
    {
        return this.yAxis;
    }
//how to define properties
/*
the property  looks like a field from the outside, but internally 
it's really a method in the class. But more accurately, it's either
one method which is a getter or a setter, or a combination of a getter
and a setter.
*/
get X()
{return this.x;}

set X(value){
    if(value<0)
    throw new Error('Value cannot be less than 0.');

    this.x = value;
}

    
}