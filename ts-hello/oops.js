//interface in typescripts.
/*




*/
var Point = /** @class */ (function () {
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
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) { };
    Point.prototype.getyAxis = function () {
        return this.yAxis;
    };
    return Point;
}());
var point = new Point(23, 56);
point.draw();
point.getyAxis();
var point2 = new Point(34, 45);
point2.draw();
