console.log(`/search/search_them_all/${[18, 56]}/${[30, 70]}/${[300]}/${[]}/${[]}`)

var page = 1;
var trie = 0;
suggest_request(trie)

$('#button_page').click(() => { 
    page += 1;
    suggest_request(trie)
})

$('#age_up').click(() => {
    page = 1;
    trie = 1
    $('#users').empty()
    suggest_request(trie)
})

$('#age_down').click(() => { 
    page = 1;
    trie = 2
    $('#users').empty()
    suggest_request(trie)
})

$('#pop_up').click(() => {
    page = 1;
    trie = 3
    $('#users').empty() 
    suggest_request(trie)
})

$('#pop_down').click(() => { 
    page = 1;
    trie = 4 
    $('#users').empty()
    suggest_request(trie)
})

$('#loc_up').click(() => {
    page = 1;
    trie = 5
    $('#users').empty() 
    suggest_request(trie)
})

$('#loc_down').click(() => {
    page = 1;
    trie = 6
    $('#users').empty() 
    suggest_request(trie)
})

$('#tag_up').click(() => {
    page = 1;
    trie = 7
    $('#users').empty() 
    suggest_request(trie)
})

$('#tag_down').click(() => {
    page = 1;
    trie = 8
    $('#users').empty() 
    suggest_request(trie)
})

function suggest_request(order) {
    console.log(page)
    $.get(`/search/search_them_all/${JSON.stringify([18,56])}/${JSON.stringify([18,99])}/${JSON.stringify(1000)}/${JSON.stringify([])}/${JSON.stringify(page)}/${JSON.stringify(order)}`, null, (data, jqHXR) => { 
        console.log(data)              
        let i = 0
        data.forEach(element => {
            if (i >= page*10 - 10)   {
                $('#users').append('<div class="container py-3 col-md-10" style="height:250px;" id="'+element.id+'"><div class="card" style="height: 100%;cursor: pointer;border-radius: 500px 0;box-shadow: #484848 1px 2px 20px;"><div class="row" style="height: 100%;"><div class="col-md-4"><img src="/assets/pictures/'+element.picture+'" style="border-radius: 100px 100px 100px 100px; box-shadow: #404040 5px 5px 25px;" class="img-circle img-responsive w-100 h-100 picture_none" id="#img1"></a></div><div class="col-md-8 p-1 pl-2 muffin" style="padding-right: 15%"><div class="card-block "><h4 class="card-title text-center">'+element.username+'</h4><p class="card-text">'+element.age+' years old</p><p class="card-text">Popularité: '+Math.round(element.pop)+' points</p><p class="card-text">'+element.tag_name+'</p></div></div></a></div>')
                $("#"+element.id+"").click(() => {
                    window.location.replace("/user?uid="+element.id)
                })
            }
            i += 1
        });
    })
}
