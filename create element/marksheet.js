function calculateresult(){
    const marks1 = parseFloat(document.getElementById("c").value)
    const marks2 = parseFloat(document.getElementById("c++").value)
    const marks3 = parseFloat(document.getElementById("database").value)
    const marks4 = parseFloat(document.getElementById("html").value)
    const marks5 = parseFloat(document.getElementById("css").value)
    const marks6 = parseFloat(document.getElementById("php").value)
    const marks7 = parseFloat(document.getElementById("corejava").value)

    const total = marks1 + marks2 + marks3 +marks4 + marks5 + marks6 + marks7;
    const percentage = (total / 350 )* 100

    document.getElementById("total").innerText = total + " / 350"
    document.getElementById("percentage").innerText = percentage.toFixed(0) + "%"

}