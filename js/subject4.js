function Calculate() {
    $(document).ready(function(){
        var sub1= parseInt(document.getElementById("s1").value);
        var sub2= parseInt(document.getElementById("s2").value);
        var sub3= parseInt(document.getElementById("s3").value);
        var sub4= parseInt(document.getElementById("s4").value);
        var cr1= parseInt(document.getElementById("c1").value);
        var cr2= parseInt(document.getElementById("c2").value);
        var cr3= parseInt(document.getElementById("c3").value);
        var cr4= parseInt(document.getElementById("c4").value);
        var cr= cr1+cr2+cr3+cr4;
        var sgpa = ((sub1*cr1)+(sub2*cr2)+(sub3*cr3)+(sub4*cr4))/cr;
        if(!isNaN(sgpa)) {
            var percentage = (sgpa - 0.5) * 10;
            $('#calculateModalToggle').modal('show');
            document.getElementById("sgpa").innerHTML= sgpa.toFixed(2);
            document.getElementById("total2").innerHTML= percentage.toFixed(2)+" %";
            return
        }
        
        alert("Please make your eye sight clear, and enter all the grades");
    })
}