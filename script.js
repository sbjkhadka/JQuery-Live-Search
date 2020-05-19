$('#search').keyup(function(){
    var searhField=$('#search').val();
    var myExp=new RegExp(searhField,"i");
    $.getJSON('data.json',function(data){
        var output='<ul class="searchresults">';
        $.each(data,function(key,val){
            if((val.name.search(myExp)!=-1)||(val.description.search(myExp)!=-1)){
                output+="<li>"
                output+="<h2>"+val.name+"</h2>"
                output+=`<img src=images/${val.name}.png alt=${val.name} width="100"/>`
                output+=`<p>${val.description}</p>`
                output+="</li>"
            }
        })
        output+="</ul>";
        $('#update').html(output)
    
    })
})

//display everything at the beginning
displayall();
function displayall(){
    $.getJSON('data.json',function(data){
        var output='<ul class="searchresults">';
        $.each(data,function(key,val){
                output+="<li>"
                output+="<h2>"+val.name+"</h2>"
                output+=`<img src=images/${val.name}.png alt=${val.name} width="100"/>`
                output+=`<p class="description">${val.description}</p>`
                output+="</li>"
            
        })
        output+="</ul>";
        $('#update').html(output)
    
    })
}