function Calculate(){
    $(document).ready(function(){
        var sub1= parseInt(document.getElementById("s1").value);
        var sub2= parseInt(document.getElementById("s2").value);
        var sub3= parseInt(document.getElementById("s3").value);
        var sub4= parseInt(document.getElementById("s4").value);
        var sub5= parseInt(document.getElementById("s5").value);
        var sub6= parseInt(document.getElementById("s6").value);
        var sub7= parseInt(document.getElementById("s7").value);
        var sub8= parseInt(document.getElementById("s8").value);
        var cr1= parseInt(document.getElementById("c1").value);
        var cr2= parseInt(document.getElementById("c2").value);
        var cr3= parseInt(document.getElementById("c3").value);
        var cr4= parseInt(document.getElementById("c4").value);
        var cr5= parseInt(document.getElementById("c5").value);
        var cr6= parseInt(document.getElementById("c6").value);
        var cr7= parseInt(document.getElementById("c7").value);
        var cr8= parseInt(document.getElementById("c8").value);
        var cr= cr1+cr2+cr3+cr4+cr5+cr6+cr7+cr8;
        var sgpa = ((sub1*cr1)+(sub2*cr2)+(sub3*cr3)+(sub4*cr4)+(sub5*cr5)+(sub6*cr6)+(sub7*cr7)+(sub8*cr8))/cr;
        
        if(!isNaN(sgpa)) {
            var percentage = (sgpa - 0.5) * 10;
            $('#calculateModalToggle').modal('show');
            document.getElementById("sgpa").innerHTML= sgpa.toFixed(2);
            document.getElementById("total2").innerHTML= percentage.toFixed(2)+" %";
            return
        }
    
        alert("Enter all the grades");
    })
    
}