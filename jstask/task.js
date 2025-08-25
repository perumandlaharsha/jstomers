/* Task-1 */
let marks = 78;
let age = 15;
if(marks >= 90)
{
    console.log("Grade A");
    if(age < 18)
    {
        console.log("Eligible for scholarship");
    }
    if(age > 21)
    {
        console.log("Try again next year");
    }
}
else if(marks >= 70)
{
    console.log("Grade B");
     if(age < 18)
    {
        console.log("Eligible for scholarship");
    }
    if(age > 21)
    {
        console.log("Try again next year");
    }
}
else
{
    console.log("Fail");
}

/* Task-2 */
let userName = "admin";
let pwd = 1234;
let device = "Desktop";
if(userName === "admin" && pwd === 1234)
{
    console.log("Login Success");
    if(device === "mobile")
    {
        console.log("Mobile dashboard");
    }
    else
    {
        console.log("Desktop Dashboard");
    }
}
else{
    console.log("please login");
}

/* Task-3 */
let cartValue = 501;
let primeStatus = true;
let coupon = true;
if(cartValue > 500)
{
    if(primeStatus === true)
    {
        console.log("20% discount");
    }
    else
    {
        if(coupon === true)
        {
            console.log("10% discount");
        }
        else
        {
            console.log("5% discount");
        }
    }
}
else
{
    console.log("No discount");
}

/* Task-4 */

let temp = 35.5;
let time = "afternoon";
if(temp > 35)
{
    if(time === "afternoon")
    {
        console.log("Extreme heat Warning");
    }
    else
    {
        console.log("Hot Weather");
    }
}
else if(temp > 25)
{
    console.log("Normal");
}
else
{
    console.log("Cold");
}

/* Task-5 */

let destination = "metro";
let passenger = "student";
if(destination === "metrocity")
{
    if(passenger === "senior")
    {
        console.log("40% off");
    }
    else
    {
        console.log("Full Fare");
    }
}
else
{
    if(passenger === "student")
    {
        console.log("50% off");
    }
    else
    {
        console.log("Full Fare");
    }
}

/* Task-6 */

let language = "en";
let day = "evening";
switch(language)
{
    case "en" :
        if(day == "morning")
        {
            console.log("Good morning");
            break;
        }
        else
        {
            console.log("Good Evening");
            break;
        }
    case "hi" :
        if(day == "morning")
        {
            console.log("Good morning");
            break;
        }
        else
        {
            console.log("Good Evening");
            break;
        }
    case "fr" :
        if(day == "morning")
        {
            console.log("Good morning");
            break;
        }
        else
        {
            console.log("Good Evening");
            break;
        }
}

/* Task-7 */

let currency = "INR";
let amount = 1001;
switch(currency)
{
    case "USD" :
        if(amount >1000)
        {
            console.log("Add Bouns Amount");
            break;
        }
        else
        {
            console.log("use Standard conversion");
            break;
        }
    case "EUR" :
        if(amount >1000)
        {
            console.log("Add Bouns Amount");
            break;
        }
        else
        {
            console.log("use Standard conversion");
            break;
        }
    case "INR" :
        if(amount >1000)
        {
            console.log("Add Bouns Amount");
            break;
        }
        else
        {
            console.log("use Standard conversion");
            break;
        }
}

/* Task-8 */

let role = "admin";
let dept = "Emp";
switch(role)
{
    case "admin" :
        if(dept == "HR")
        {
            console.log("edit Access Granted");
            break;
        }
        else
        {
            console.log("View only access");
            break;
        }
    case "manager" :
        if(dept == "HR")
        {
            console.log("edit Access Granted");
            break;
        }
        else
        {
            console.log("View only access");
            break;
        }
    case "employee" :
        if(dept == "HR")
        {
            console.log("edit Access Granted");
            break;
        }
        else
        {
            console.log("View only access");
            break;
        }
}

/* Task-9 */

let weather = "sunny";
let temperature = "normal";
switch(weather)
{
    case "rainy" :
        if(temperature < "threshold")
        {
            console.log("Stay Inside");
            break;
        }
        else
        {
            console.log("Wear protection");
            break;
        }
    case "sunny" :
        if(temperature < "threshold")
        {
            console.log("Stay Inside");
            break;
        }
        else
        {
            console.log("Wear protection");
            break;
        }
    case "snow" :
        if(temperature < "threshold")
        {
            console.log("Stay Inside");
            break;
        }
        else
        {
            console.log("Wear protection");
            break;
        }
}

/* Task-10 */

let mobilePlan = "premium";
let user = "senior";
switch(mobilePlan)
{
    case "basic" :
        if(user === "student")
        {
            console.log("entra discount applied");
            break;
        }
        else
        {
            console.log("standard price");
            break;
        }
    case "standard" :
        if(user === "student")
        {
            console.log("entra discount applied");
            break;
        }
        else
        {
            console.log("standard price");
            break;
        }
    case "premium" :
        if(user === "student")
        {
            console.log("entra discount applied");
            break;
        }
        else
        {
            console.log("standard price");
            break;
        }
}

/* Task-11 */

let cart = 601;
let prime = true;
if(cart >= 1000)
{
    if(prime === true)
    {
        console.log("Free delivery and 20% discount");
    }
    else
    {
        console.log("Free delivery and 10% discount");
    }
}
else if(cart >= 500)
{
    if(prime === true)
    {
        console.log("10% discount");
    }
    else
    {
        console.log("50 rupees delivery charges");
    }
}
else
{
    console.log("No offers avaliable");
}

/* Task-12 */

let name = "Jeevan";
let pass = 1234;
let OTP = true;
if(name === true && pass === true)
{
    if(OTP === true)
    {
        console.log("Login successful");
    }
    else
    {
        console.log("Invalid OTP");
    }
}
else
{
    console.log("Invalid");
}


/* Task-13 */

let theme = "blue";
let timer = 4;
if(theme == "light")
{
    console.log("Light theme applied ");
}
else if(theme == "dark")
{
    console.log("dark theme applied");
}
else
{
    if(timer < 6)
    {
        console.log("Light theme");
    }
    else
    {
        console.log("dark theme");
    }
}

/* Task-14 */

let userAge = 21;
let intrest = "coding";
if(userAge < 18)
{
    console.log("Try begineer bootcamp");
}
else
{
    switch(intrest)
    {
        case "coding" :
            console.log("Full Stack");
            break;
        case "design" :
            console.log("UI UX design");
            break;
        case "marketing" :
            console.log("Digital Marketing");
            break;
    }
}

/* Task-15 */

let prefLang = "hi";
let region = "USA";
switch(prefLang)
{
    case "en" :
        if(region == "India")
        {
            console.log("Hello Namasthe");
        }
        break;
    case "hi" :
        console.log("Namasthe");
        break;
    case "fr" :
        console.log("Bonjour");
        break;
    case "es" :
        console.log("Hola");
        break;
}

/* Task-16 */

let prefType = "standard";
let cityType = "normal";
switch(prefType)
{
    case "fragile" :
        if(cityType === "metro")
        {
            console.log("2 days");
        }
        else
        {
            console.log("4 days");
        }
        break;
    case "express" :
        if(cityType === "metro")
        {
            console.log("1 days");
        }
        else
        {
            console.log("2 days");
        }
        break;
    case "standard" :
        if(cityType === "metro")
        {
            console.log("3 days");
        }
        else
        {
            console.log("5 days");
        }
        break;
}

/* Task-17 */

let billAmount = 600;
let people = 5;
let promo = "PERCENT10";
let paid=billAmount*0.1;
if(promo === "FLAT50")
{
    console.log(billAmount - 50);
}
else if(promo === "PERCENT10")
{
    console.log(billAmount-=paid);
}
else
{
    console.log("No discount");
}
let final = billAmount/people;
console.log(final);


/* Task-18 */

let amt = 700;
let crnc = "INR";
let code = "PERCENT10";
switch(crnc)
{
    case "INR" :
        if(code === "FLAT100")
        {
            console.log(amt-100);
        }
        if(code === "PERCENT10")
        {
            console.log(amt = amt-(amt*0.1));
        }
        break;
    case "USD" :
        if(code === "FLAT100")
        {
            console.log(amt-10);
        }
        if(code === "PERCENT10")
        {
            console.log(amt = amt-(amt*0.1));
        }
        break;
    case "EUR" :
        if(code === "FLAT100")
        {
            console.log(amt-10);
        }
        if(code === "PERCENT10")
        {
            console.log(amt = amt-(amt*0.1));
        }
        break;
}
console.log("Final amount: " + amt);


/* Task-19 */

let mrk = 82
let section = "B";
if(mrk >= 90)
{
    if(section === "A")
    {
        console.log("Outstanding in Section A");
    }
    if(section === "B")
    {
        console.log("Excellent in Section B");
    }
}
if(mrk >= 70)
{
    console.log("Good performance");
}
if(mrk < 70)
{
    console.log("Needs improvement");
}

/* Task-20 */

let bro = 19;
let gender = "male";
if(bro < 13)
{
    if(gender === "male")
    {
        console.log("Hey young Boy");
    }
    else
    {
        console.log("Hey Little girl");
    }
}
if(bro>=13 && bro <= 19)
{
    console.log("Hello Teens");
}
if(bro >= 20)
{
    console.log("Welcome adult");
}