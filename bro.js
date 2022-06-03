let i = 1
let price = 0

function itemButtonFunction(){
            let item = document.getElementById("item").value
            let itemprice = document.getElementById("itemprice").value
            document.getElementById("thetable").innerHTML += '<tr id="' + i + '">' + item + "   " + itemprice + "</tr>" ;
            i++
            price = parseInt(price) + parseInt(itemprice)
            document.getElementById("subtotal").innerHTML = "+ " + price

}

function newSubFunction(){
    let disc = document.getElementById("discountinput").value
    document.getElementById("discount").innerHTML = "- " + disc
    let newsub = parseInt(price) - parseInt(disc)
    document.getElementById("newsub").innerHTML = "= " + newsub
    let country = document.getElementById("vatcountry").value
    let vat = document.getElementById("vat").value
    let vatprice = newsub * vat / 100
    document.getElementById("wholevat").innerHTML = "- " + vatprice + " " + country
    document.getElementById("vatlabel").innerHTML = "VAT: "
    let total = newsub - vatprice
    document.getElementById("total").innerText = "= " + total
}

function confirm(){
    let fromcomp = document.getElementById("fromcomp").value
    document.getElementById("fromcompd").innerHTML = "From Company: " + fromcomp
    let fromaddress = document.getElementById("fromaddress").value
    document.getElementById("fromaddressd").innerHTML = "From Address: " + fromaddress
    let fromcsc = document.getElementById("fromcsc").value
    document.getElementById("fromcscd").innerHTML = "From Country/State/City: " + fromcsc
    let date = document.getElementById("date").value
    document.getElementById("dated").innerHTML = "Invoice Date: " + date
    document.getElementById("invoiceidd").innerHTML = "Invoice ID: " + Math.floor(Math.random() * 100000); 
    let tocomp = document.getElementById("tocomp").value
    document.getElementById("tocompd").innerHTML = "To Company: " + tocomp
    let toaddress = document.getElementById("toaddress").value
    document.getElementById("toaddressd").innerHTML = "To Address: " + toaddress
    let tocsc = document.getElementById("tocsc").value
    document.getElementById("tocscd").innerHTML = "To Country/State/City: " + tocsc
    
}


function pdf(){
    var everything = document.getElementById("all")

    html2pdf()
    .from(everything)
    .save();
}