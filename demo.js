// Khai báo hàm function declaration
  //Khai báo hàm không đối số
    function xinChao(){
        console.log("Xin chào các bạn");
    }
    xinChao(); // Gọi hàm


    //Khai báo hàm có đối số
    function tinhTong(a, b){
        return a * b;
    }
    console.log("Tích là: " + tinhTong(5, 10));


//Khai báo hàm Function expression 
    //khai báo hàm có đối số
    let sum = function (a , b){
        return a + b;
    }

    console.log("Tổng là: " + sum(5, 15));

    //Khai báo hàm không đối số
    let XinChao = function (){
        console.log("Xin chào mọi người");
    }
    XinChao();


//Khai báo hàm Arrow function
    //Khai báo hàm có đối số
    let tong = (a, b) => {
        return a + b;
    }
    console.log("Tổng là: " + tong(20, 30));

    //Khai báo hàm không đối số 
    let chaoMung = () => {
        console.log("Chào mừng các bạn đến với React Js");
    }