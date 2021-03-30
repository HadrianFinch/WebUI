function onLoad()
{
    let input = document.getElementById("CMDinput");
    input.focus();
    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) 
    {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) 
        {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("btn").click();
        }
    });

    setInterval(function(){ 
        input.focus() }, 1500);
}
function inputgo()
{
    console.log("clicked");

    var consoleElm = document.getElementById("console");
    console.log(consoleElm);

    var input = document.getElementById("CMDinput");
    printLn("H:/Home> " + input.innerHTML);
    if(input.innerHTML != "")
    {
        // printLn("commnad recieved. It was: " + input.innerHTML);
        if (input.innerHTML.search("help") == 0)
        {
            if (input.innerHTML.search("animation test") == 5)
            {
                printHeadder("WebUI Console Help for the 'animation test' command");
                printLn("this command opens the animationTest.webapp in a new window");
                printBr();
                printHeadder2("**OPTIONS & SWITCHES**");
                printLn("   -i / --iframe: opens the animationTest inside the current console window.");
                printLn("   --redirect: redivects the current page to animationTest.webapp");
                printLn("   --newtab: opens animationTest in a new browser tab");
                printBr();
            }
            else
            {
                printHeadder("WebUI Console Help");
            }
        }
        else if (input.innerHTML.search("animation test") == 0)
        {
            // switches and options
            if (input.innerHTML.search("--redirect") == 15)
            {
                window.location.href = "./animationTest.html";
            }
            else if(input.innerHTML.search("--newtab") == 15)
            {
                window.open("./animationTest.html");
            }
            else if(input.innerHTML.search("-i") == 15 ||
                    input.innerHTML.search("--iframe") == 15)
            {
                printLn("loading animationTest.webapp...");
                printLn("launching animationTest.webapp...");
                printLn("generating iframe...");
                printLn("launching animationTest.webapp in iframe...");
                printLn("Running...");
                var frame = document.createElement("iframe");
                frame.src = "./animationTest.html";
                frame.width = "1550px";
                frame.height = "800px";
                frame.style.border = "none";
                consoleElm.appendChild(frame);
            }
            // default opens in new window
            else
            {
                var popup = window.open("./animationTest.html", "", 
                "width=1550, height=800");
            }

            // iff sucessfull
            if (popup != null)
            {
                printLn("animationTest.webapp launched sucessfully");
            }
        }
    }

    input.innerHTML = "";
}

function printLn(textToPrint)
{
    var consoleElm = document.getElementById("console");
    var output = document.createElement("p");
    output.innerHTML = textToPrint;
    consoleElm.appendChild(output);
}
function printBr()
{
    var consoleElm = document.getElementById("console");
    var output = document.createElement("br");
    consoleElm.appendChild(output);
}
function printHeadder(textToPrint)
{
    var consoleElm = document.getElementById("console");
    var output = document.createElement("h2");
    output.innerHTML = textToPrint;
    consoleElm.appendChild(output);
}
function printHeadder2(textToPrint)
{
    var consoleElm = document.getElementById("console");
    var output = document.createElement("h3");
    output.innerHTML = textToPrint;
    consoleElm.appendChild(output);
}