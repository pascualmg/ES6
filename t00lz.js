/**
 * Created by passh on 17/6/17.
 */
function ponGuayElTextArea(textArea)
{

    textArea.setAttribute('autofocus' , true);
    textArea.setAttribute('cols' , 80);
    textArea.setAttribute('rows' , 40);


    textArea.style.backgroundColor = "black";
    textArea.style.color = "green";

}

function log(val = "")
{

    console.log(val);



    textArea = document.getElementById('textArea4log');
    if (val === ""){
        textArea.value = "";
    }

    textArea.value += '\n';

    textArea.value += val;

    ponGuayElTextArea(textArea);

    textArea.onkeydown = function (){console.log(`pulsada key`)};

}