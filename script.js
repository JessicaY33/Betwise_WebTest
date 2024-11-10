let currentBetAmount = 0;
let totalSpent = 0;
let totalRoll = 0;
let currentBalance = 10000;
let textSize = 24;

let buttonHoldTime;

let imageArray = new Array();
imageArray[0] = "images/BAR_slot_Expanded.png";
imageArray[1] = "images/Bell_slot_Expanded.png";
imageArray[2] = "images/Cherry_slot_Expanded.png";
imageArray[3] = "images/Diamond_slot_Expanded.png";
imageArray[4] = "images/Grape_slot_Expanded.png";
imageArray[5] = "images/Lemon_slot_Expanded.png";
imageArray[6] = "images/Orange_slot_Expanded.png";
imageArray[7] = "images/Seven_slot_Expanded.png";

function Roll()
{
    currentBalance -= currentBetAmount;

    document.getElementById("SlotResult1").innerHTML = "";
    document.getElementById("SlotResult2").innerHTML = "";
    document.getElementById("SlotResult3").innerHTML = "";

    if(currentBetAmount != 0)
    {
        var num1 = Math.floor(Math.random() * 8);
        var num2 = Math.floor(Math.random() * 8);
        var num3 = Math.floor(Math.random() * 8);
        while(num1 == num2 && num2 == num3)
        {
            num3 = Math.floor(Math.random() * 8);
        }
        totalSpent += currentBetAmount;
        totalRoll++;

        var img = imageArray[num1];
        document.getElementById("SlotResult1").innerHTML = ('<img src="' + img + '" width="250px">')

        img = imageArray[num2];
        document.getElementById("SlotResult2").innerHTML = ('<img src="' + img + '" width="250px">')

        img = imageArray[num3];
        document.getElementById("SlotResult3").innerHTML = ('<img src="' + img + '" width="250px">')
        
        displayBalance();
    }
    else
    {
        SlotMachineSays("Place in a bet to roll!");
    }
}

function startButtonHoldTime(method)
{
    buttonHoldTime = setInterval(method, 200);
}

function resetButtonHoldTime()
{
    clearInterval(buttonHoldTime);
}

function Add()
{
    if(currentBetAmount < 1000)
    {
        currentBetAmount += 50;
    }
    displayBet();
}

function Sub()
{
    if(currentBetAmount > 0)
    {
        currentBetAmount -= 50;
    }
    displayBet();
}

function displayBet()
{
    BetAmount.innerHTML = currentBetAmount;
}

function displayBalance()
{
    let balanceString = "$"
    if(currentBalance < 0)
    {
        balanceString = "-$"
        MoneyDisplay.style.color = "#ff0000";
        MoneyDisplay.style.fontSize = (textSize + Math.floor(Math.abs(currentBalance) / 5000)) + "px";
    }
    balanceString += Math.abs(currentBalance);
    MoneyDisplay.innerHTML = balanceString;
}

function SlotMachineSays(line)
{
    SpeechBubble.style.visibility = "visible";
    SlotSays.innerHTML = line;
    setTimeout(CloseSpeechBubble, 3000);
}

function CloseSpeechBubble()
{
    SpeechBubble.style.visibility = "hidden";
    SlotSays.innerHTML = "";
}