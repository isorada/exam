const body = document.body

// Header
    const hDiv = document.createElement('div') 
    hDiv.id = "hDiv"
    {
    // Socials, PFP
        const gif = document.createElement('img')
        {
            gif.id = 'gif'
            gif.src = './misc/pfp.gif'
            gif.width = '50'
            gif.height = '50'
            
            body.append(gif)
        }
    // PFP    
        const h1 = document.createElement('h1')
        h1.id = "title"
        h1.title = "Welcome to Greem!"

        h1.innerHTML = "Welcome to Greem!"

        const hr = document.createElement('hr')
// Display output
    hDiv.append(h1, hr)
    };
// Container
    const cDiv = document.createElement('div') 
    cDiv.id = "cDiv"
    {
    // Time
        const h1 = document.createElement('h1')
        h1.id = "time"
        h1.title = "time"
        function sTime() {

            var time = new Date();
            
            let h = time.getHours();
            let m = time.getMinutes();
            let s = time.getSeconds();
            let ampm = (h-12) >= 12 ? "AM" : "PM";
            m = checkTime(m);
            s = checkTime(s);
        
            function checkTime(i) {
                if (i < 10) {i = "0" + i};
                return i;
            }

           h1.innerHTML = "Time: " + (parseInt(h+6) >= "-" ? h : h) + ':' + m + ':' + s + " " + ampm;
            setTimeout(sTime, 1000);
        };
    // Loop
        const lDiv = document.createElement('span')
        lDiv.id="lDiv"
        {
            const p = document.createElement('p')
            p.id = "loop"
            p.title = "array_length"
            
            const p1 = document.createElement('p')
            p1.id = "array"
            p1.title = "array"

            const array = [ "Hello!", "Run!", "...", "Huh?" ]
            let pop = array.pop();

            p1.innerHTML = pop

            var n = 0; // default 0
            if (n == pop.length)
            {
                p.innerHTML = "Same Length!"
            } else {
                p.innerHTML = "Error!" + " " + n + " length!"
            } while (pop.length > n) {
                n++
                p.innerHTML = "Automatically incremented"
            }
        // Display output
            lDiv.append(p, p1, "Length: " + n)
        };
    // Jquery
        const qDiv = document.createElement('div')
        qDiv.id = "qDiv"
        {
            const h1 = document.createElement('h1')
            h1.id = "h1"
            h1.innerHTML = "This is Jquery"
        
        // Drop down panel
            const cAtt = document.createElement('div')
            cAtt.id = "cAtt"
            cAtt.innerHTML = "Click me to receive something"
           
            const aDrop = document.createElement('div')
            aDrop.id = "aDrop"
            aDrop.innerHTML = "Have a nice day!" 

            $(document).ready(function() {
                $('#h1').fadeOut(4000).fadeIn(4000)
                
                $("#aDrop").css("display", "none")
                $("#aDrop").css("color", "red")
                $("#cAtt").css("color", "lightblue")
                
                $('#cAtt').click(function(){
                    $('#aDrop').slideDown();
                });
            });
            const br = document.createElement("br")
            const hr = document.createElement("hr")
        // Display output
            qDiv.append(h1, cAtt, aDrop, br,hr)
        };
// New Contents
        const ncDiv = document.createElement('div')
        ncDiv.id="ncDiv"
        {
            const ncButton = document.createElement('button')
            ncButton.id="ncButton"
            ncButton.innerText="Click for new content"

            $(document).ready(function(){        
                $('#calcDiv').hide(); 
                $('#openFButton').hide();
                $('#ncButton').click(function(){
                    $('#lDiv').fadeOut();
                    $('#qDiv').fadeOut();
                    $('#cAtt').fadeOut();
                    $('#progButton').fadeOut();
                    $('#fDiv').fadeOut();
                    $('#calcDiv').fadeIn();
                    $('#openFButton').fadeIn();
                    $(this).fadeOut();
                })
            })
            const br = document.createElement("br")
        // Calculator    
            const calcDiv = document.createElement('div')
            calcDiv.id="calcDiv"
            {
                const aButton = document.createElement('button')
                const sButton = document.createElement('button')
                const dButton = document.createElement('button')
                const mButton = document.createElement('button')

                const txt = document.createElement('h2')
                txt.innerHTML="Calculator"
                const form = document.createElement('input')
                form.id="form"
                form.placeholder="Input 1st number!"
                
                const form1 = document.createElement('input')
                form1.id="form1"
                form1.placeholder="Input 2nd number!"
                
                const br = document.createElement("br")
                const br1 = document.createElement("br")

                aButton.innerText="+"
                sButton.innerText="-"
                dButton.innerText="/"
                mButton.innerText="*"

                aButton.onclick = function(){
                    txt.innerHTML=(parseInt(form.value)+parseInt(form1.value))
                }
                sButton.onclick = function(){
                    txt.innerHTML=(parseInt(form.value)-parseInt(form1.value))
                }
                dButton.onclick = function(){
                    txt.innerHTML=(parseInt(form.value)/parseInt(form1.value))
                }
                mButton.onclick = function(){
                    txt.innerHTML=(parseInt(form.value)*parseInt(form1.value))
                }
                calcDiv.append(txt, form, br, aButton, sButton, dButton, mButton, br1, form1)
            }
            const cfDiv = document.createElement('span')
            cfDiv.id='cfDiv'
            {
                let h2 = document.createElement('h2')
                h2.id="h2"
                const openFButton= document.createElement('button')
                openFButton.id="openFButton"
                    openFButton.innerText="Back"
                    $(document).ready(function() {
                        $('#openFButton').click(function(){
                            $('#calcDiv').hide(); 
                            $('#lDiv').fadeIn();
                            $('#qDiv').fadeIn();
                            $('#cAtt').fadeIn();
                            $('#progButton').fadeIn();
                            $('#fDiv').fadeIn();
                            $('#calcDiv').fadeOut();
                            $('#ncButton').fadeIn();
                            $(this).fadeOut();
                        })
                    })
                cfDiv.append(h2, openFButton)
            }
            ncDiv.append(br, ncButton, calcDiv, cfDiv)
        }
// Programming 5
        const pDiv = document.createElement('div')
        {
            const progButton =  document.createElement('button')
            
            progButton.id="progButton"
            progButton.title="Comp Programming 5"
            progButton.innerText="Comp Programming 5"

            progButton.onclick = function() {
                window.open('https://github.com/isorada/exam/tree/main/cp5')
            }
        // Display output
            pDiv.append(progButton)
        };
// Display output
    cDiv.append(h1, lDiv,  qDiv, pDiv, ncDiv)
    };
// Footer
    const fDiv = document.createElement('div') 
    fDiv.id = "fDiv"
    {
        const h1 = document.createElement('h1')
        h1.id = "h1"
        h1.title = "Hello World!"

        h1.innerHTML = "Hello World!"
        
        const hr = document.createElement('hr')
// Display output
    fDiv.append(hr, h1)
    };
// Output
body.append(hDiv, cDiv, fDiv)
