function product1()
{
    var p_select = document.getElementById("brand1").value;
    
    if(p_select=="IPHONE X")
    {
        document.getElementById("productimgchange1").src = "https://urbangalleria.com/cdn/shop/files/WhatsAppImage2024-03-18at4.07.23PM_1_1024x1024.jpg?v=1710846090";
        document.getElementById("p_title").innerHTML = "Wooden Dark Blue Three Seater Sofa";
        document.getElementBpyId("_detail").innerHTML = "<li>title</li>"
        + "<li>price</li>" + "<li>Descibtion</li>"; 
    }
    
    else if(p_select=="IPHONE 11")
    {
        document.getElementById("productimgchange1").src = "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTF8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
        document.getElementById("p_title").innerHTML = "IPHONE 11";
        document.getElementById("p_detail").innerHTML = "<li>title</li>"
        + "<li>price</li>" + "<li>Descibtion</li>"; 
    }

   else if(p_select=="IPHONE 12")
    {
        document.getElementById("productimgchange1").src = "https://www.91-img.com/gallery_images_uploads/a/4/a4cd5ffe4c9a8bd71731aee7b5541f6ec071653f.jpg?tr=h-630,c-at_max,q-80";
        document.getElementById("p_title").innerHTML = "IPHONE 12";
        document.getElementById("p_detail").innerHTML = "<li>title</li>"
        + "<li>price</li>" + "<li>Descibtion</li>"; 
    }

}




function product2()
{
    var p_selects = document.getElementById("brand2").value;

    if(p_selects=="samsung s4")
    {
        document.getElementById("productimgchange2").src = "https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/L/Y/140063_1535866407.jpg";
        document.getElementById("p_title2").innerHTML = "samsung s4";
        document.getElementById("p_detail2").innerHTML = "<li>title</li>"
        + "<li>price</li>" + "<li>Descibtion</li>"; 
    }


    else if(p_selects=="samsung s5")
    {
        document.getElementById("productimgchange2").src = "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTF8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
        document.getElementById("p_title2").innerHTML = "samsung s5";
        document.getElementById("p_detail2").innerHTML = "<li>title</li>"
        + "<li>price</li>" + "<li>Descibtion</li>"; 
    }

    else if(p_selects=="samsung s6")
    {
        document.getElementById("productimgchange2").src = "https://www.91-img.com/gallery_images_uploads/a/4/a4cd5ffe4c9a8bd71731aee7b5541f6ec071653f.jpg?tr=h-630,c-at_max,q-80";
        document.getElementById("p_title2").innerHTML = "samsung s6";
        document.getElementById("p_detail2").innerHTML = "<li>title</li>"
        + "<li>price</li>" + "<li>Descibtion</li>"; 
    }

}