document.addEventListener("DOMContentLoaded", function() {

    let x = document.getElementById("next");

    const gen = ["video", "heating", "medicine", "outings", "random"]

    const video = "Have you tried cancelling your "

    const videoSubs = ["Netflix subscription?", "Amazon Prime subscription?", "Youtube Premium subscription?", "Disney+ subscription?", "Now TV subscription?", "Discovery+ subscription?", "Apple TV subscription?", "BritBox subscription?", "Starz subscription?", "Rakuten TV subscription?", "Paramount+ subscription?", "ITVX Premium subscription?", "Graze subscription?"];

    const heating = "If you can’t afford to put the heating on, why not simply "

    const heatingOpts = ["start a bonfire outside your local flat roof pub?", "fire up the wood burning stove? You have got one, right?", "turn off the heating at whichever home you're not currently at?", "use your BBQ as a firepit in the front room? Crack a door a jar, obviously.", "go somewhere warmer?", "get a reasonably cheap BA flight to the middle east for a few weeks?", "dig around for an old unexploded bomb from the second world war? Toasty."]

    const medicine = "You can save money on fancy medicines by "

    const medicineOpts = ["going for a brisk walk.", "getting some sunshine.", "getting some fresh air.", "breathing in the countryside air.", "owning an electric car.", "placing large bushes outside the house. Mmm Oxygen.", "borrowing some antibiotics from a friend.", "filling your home with Peace Lillies, Bamboo and Snake Plants.", "using a bar of soap.", "following your local conspiracy theory Facebook group.", "burning down your local 5G mast."]

    const outings = "Avoid getting "

    const outingsOpts = ["takeout", "Just Eat", "Deliveroo", "Dominos", "Papa Johns", "Burger King", "KFC", "Pizza Hut", "Mcdonalds", "Chinese takeout", "Indian", "Fish & chips", "Kebabs", "M&S", "Tesco Finest", "your local farm shop food"]

    const goings = [" in, & you could probably stick the central heating on for a little while.", ". Instead, get yourself a Nigella cookbook.", ". Plan your weekly shop & get it delivered from Ocado or Waitrose.", " in. Waitrose has a budget range."]

    const help = ["Feel... Helped, yet?", "Yo Dawg, I heard you need help", "SNP COL CRISIS", "CRISIS HELP", "More Advice Generated"]

    const randomOpts = ["Just get a better job - there's plenty of jobs that surely must pay better than your current one, so the simplest advice has got to be to just get one of those ones.", "If you get a second job, and save really hard, eventually you will have enough to pay for your funeral. You may then die.", "Why weren't you born in an earlier decade. It's your fault you were born when you were.", "Get your parents to loan you a small amount to cover these “costs” or whatever, can’t be more than a few thousand, can it? You can pay them back after you cancel those subscriptions.", "Move into one of your parents properties for a while until you can get your spending under control.", "YOU'RE NEVER TOO OLD TO BE A STRIVER! A month picking fruit in one of multi-millionaire tory, Farmer Giles fields - and who knows, you may even have strived enough to pay off a week's gas bill.", "Have you tried using less washing up liquid? Avoid rinsing the dishes, just reuse them."]
    
    let count = 0

    function randomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min) + min);
    } 

    function SetToString(varString) {
        var newValue = "string";
        eval(varString + " = " + "'" + newValue + "'");
    
    }
    x.addEventListener("click", function(e) {

        let text = ""
        let category =  gen[randomNumber(0, gen.length)];

        if(count > 3 && randomNumber(0, 6) == 5){     
            document.getElementById("help").innerHTML = help[randomNumber(0, help.length)].toUpperCase();
        }


        console.log(category);

        switch(category){
            case "video":
            text = video + videoSubs[randomNumber(0, videoSubs.length)];
            break;

            case "heating":
            text = heating + heatingOpts[randomNumber(0, heatingOpts.length)];
            break;

            case "medicine":
            text = medicine + medicineOpts[randomNumber(0, medicineOpts.length)];
            break;

            case "outings":
            text = outings + outingsOpts[randomNumber(0, outingsOpts.length)] + goings[randomNumber(0, goings.length)];
            break;

            case "random":
            text = randomOpts[randomNumber(0, randomOpts.length)];
            break;

        }

        document.getElementById("lead").innerHTML = text;
        count = count + 1;
    });

    x.click();

})