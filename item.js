fetch("https://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/item.json")
    .then(res => res.json())
    .then(objson => {
        console.log(objson.data)
        var itens
        for (var cn in objson.data) {

            itens = document.getElementById('d1')
            itens.innerHTML += `<a onclick="itemdesc(${cn})"><img  id="${cn}"width="45px" src="http://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/${cn}.png" )"></a>`
            $("#d1").append(itens)
        }
    })

function itemdesc(item) {
    $('#div2').text('')
    fetch("https://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/item.json")
        .then(res => res.json())
        .then(objson => {
            console.log(objson.data)
            var obj = objson.data
            var nome = obj[item].name
            var description = obj[item].description

            $('#div2').append(nome).append('<br>' + description)
            var intos = []
            console.log(obj)
            console.log(obj[item])
            console.log(obj[item].into)
            if (intos.length != 0) {
                for (var i; i < intos.length; i++) {
                    intos.pop()
                }
            }

            upgitem = document.getElementById('into')
            upgitem.innerHTML = ""

            if (obj[item].into != undefined) {
                for (var ups = 0; ups < obj[item].into.length; ups++) {
                    intos.push(obj[item].into[ups])

                }

                console.log(intos)
                var upgitem
                upgitem = document.getElementById('into')

                for (var pin = 0; pin < intos.length; pin++) {
                    upgitem.innerHTML += `<a onclick="itemdesc(${intos[pin]})"><img  id="${intos[pin]}"width="45px" src="https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/${intos[pin]}.png" )"></a>`


                }

            }
            else {
                upgitem.innerHTML = 'Não possui upgrades'
            }




        })
}



