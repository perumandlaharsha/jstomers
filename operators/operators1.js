    if(true || false){
        console.log("True");
    }
    else{
        console.log("False");
        }

        if(!true && true){
            console.log("True");
        }
        else{
            console.log("False");
            }


            console.log(true && false || true);
            console.log(false || false && true);
            console.log(!true);
            console.log(!" ");
            console.log(!null);
            console.log(!undefined);
            console.log(!4);
            console.log("Hello" && 5);
            console.log(true || 3  );


            let s = +5;
            console.log(s);
            let s1 = "5";
            console.log(s1);
            let s2 = +"5";
            console.log(s2);
            let s3 = +"Hello"
            console.log(s3);

            let n = -5;
            console.log(n);
            let n1 = -"5";
            console.log(n1);
            let n2 = -"Hello";
            console.log(n2);


            let i = 10;
            //i++;//10--->11
            console.log(i++);//a=11
            console.log(++i);//12
            console.log(i--);//12--->11
            console.log(--i);//10


            console.log(+"10" + 1);
            console.log(typeof typeof 5);
            console.log(typeof typeof "5");


            let i1 = 1
            console.log(i1++ + ++i1 + --i1 + --i1 - i1-- );//
            console.log(--i1);

            let age =  18;
            let nationality = "indian";
            if(age>=18){
                console.log("eligible for Vote");
                if(nationality == "indian"){
                    console.log("eligible for Indian Vote");
                }

            }
            else{
                console.log("not eligible for vote");
            }

console.log(age>18 ? "Adult" : age === 18 ? "just Adult":"Miinor");

let b3 = 5;
let b4 = -4;
console.log(~b3);
console.log(~b4);
console.log(5>>2);

let admin="admin";
let pass=1122334455;
if(true){
    if(admin==="admin"&&pass ===1122334455){
    console.log("Welcome Admin");
}
else{
    console.log("Invalid User");
    }
}
 else{
        console.log("Not logged In")
    }
    console.log(true ? admin==="admin"&&pass ===1122334455 ? "Welcome admin":"invalid user" :"not logged in");

