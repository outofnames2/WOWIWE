function changeImage() {
    if (document.getElementById("imgClickAndChange1").src == "https://c.tenor.com/Cp7jVolZe0YAAAAC/chayanne.gif" && 
        document.getElementById("imgClickAndChange2").src == "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WC2LW0H6pCA_RC8_1l-3h0dAXS8aBoglQ6kzEJbE9N3JBFwY1CRyZQP_SRq-xeBEQAg&usqp=CAU" &&
        document.getElementById("imgClickAndChange3").src == "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OHW2i55UzAAo34XKinmoeBuiXASSOebR0wC-PplxUrA_xVgzVCcaB65LO-QoTU0q128&usqp=CAU" &&
        document.getElementById("imgClickAndChange4").src == "https://i.pinimg.com/originals/9e/46/3f/9e463f19ab225fe2785fd789368015a4.gif"){

        document.getElementById("imgClickAndChange1").src = "https://cdn.discordapp.com/attachments/831197610546430004/991044291688280094/chaloko.jpg";
        document.getElementById("imgClickAndChange2").src = "https://cdn.discordapp.com/attachments/831197610546430004/991057024756367390/MOSHED-2022-6-27-16-6-23.gif";
        document.getElementById("imgClickAndChange3").src = "https://cdn.discordapp.com/attachments/831197610546430004/991057584582717550/MOSHED-2022-6-27-16-8-36.gif";
        document.getElementById("imgClickAndChange4").src = "https://web.archive.org/web/20091021201554/http://www.geocities.com/flowers4thedevil/evil_dead.gif";
        
    } else {
        document.getElementById("imgClickAndChange1").src = "https://c.tenor.com/Cp7jVolZe0YAAAAC/chayanne.gif";
        document.getElementById("imgClickAndChange2").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WC2LW0H6pCA_RC8_1l-3h0dAXS8aBoglQ6kzEJbE9N3JBFwY1CRyZQP_SRq-xeBEQAg&usqp=CAU";
        document.getElementById("imgClickAndChange3").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OHW2i55UzAAo34XKinmoeBuiXASSOebR0wC-PplxUrA_xVgzVCcaB65LO-QoTU0q128&usqp=CAU";
        document.getElementById("imgClickAndChange4").src = "https://i.pinimg.com/originals/9e/46/3f/9e463f19ab225fe2785fd789368015a4.gif";
    }
}
