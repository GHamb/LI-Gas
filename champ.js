
fetch("http://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/champion.json")

    .then(res => res.json())
    .then(objson => {
        console.log(objson)
        var champs = $('#input_champ')
        for (champ in objson.data) {
            var opt = $('<option>').val(objson.data[champ]['id']).text(objson.data[champ]['name'])
            champs.append(opt)
        }

        $('#input_champ').change(function () {
            fetch(`http://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/champion/${$('#input_champ').val()}.json`)

                .then(res => res.json())
                .then(objson => {
                    for (champ in objson.data) {
                        var camp = objson.data[champ]
                        var passiva = camp.passive.name
                        var pasdesc = camp.passive.description
                        var pasimg = camp.passive.image.full
                        var hp = camp.stats.hp
                        var mp = camp.stats.mp
                        var hpregen = camp.stats.hpregen
                        var mpregen = camp.stats.mpregen
                        var armor = camp.stats.armor
                        var spblock = camp.stats.spellblock
                        var range = camp.stats.attackrange
                        var atkspd = camp.stats.attackspeed
                        var atk = camp.stats.attackdamage

                    }
                    var skn = []
                    for (skin in camp.skins) {

                        skn.push(camp.skins[skin].num)
                    }
                    $('#foto_champ').text('')
                    var imgcm = $("<img>").attr('src', `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${camp.id}_${skn[0]}.jpg`)
                    $('#foto_champ').append(imgcm)
                    var maxskn = skn.length
                    var contador = 0
                    console.log(imgcm)

                    $('#foto_champ').click(function () {

                        if (contador != maxskn - 1) {
                            contador++
                            $('#foto_champ').text('')
                            var mudaskn = $("<img>").attr('src', `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${camp.id}_${skn[contador]}.jpg`)
                            $('#foto_champ').append(mudaskn)



                        } else {
                            contador = 0
                            $('#foto_champ').text('')
                            var mudaskn = $("<img>").attr('src', `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${camp.id}_${skn[contador]}.jpg`)
                            $('#foto_champ').append(mudaskn)



                        }
                    })


                    var inp = $('<input>').attr('type', 'number').attr('placeholder', 'Nivel').attr('id', 'nivel').attr('max', '18').attr('min', '1')

                    var p = $('<p>').attr('id', 'atr')
                    $('#atributo').text('')

                    p.append(inp)
                    p.append('<br>' + 'HP :' + hp).append('<br>' + 'MP:' + mp).append('<br>' + 'HP regen:' + hpregen).append('<br>' + 'MP regen:' + mpregen).append('<br>' + 'Armor:' + armor).append('<br>' + 'Mr:' + spblock).append('<br>' + 'Range:' + range).append('<br>' + 'ATK Speed:' + atkspd).append('<br>' + 'Attack:' + atk)
                    $('#atributo').append(p)


                    document.getElementById('atr').addEventListener('change', function () {

                        var l = $('#nivel').val()
                        if (l >= 1 && l <= 18) {
                            var vathp = hp + ((l - 1) * (objson.data[champ].stats.hpperlevel))
                            console.log(vathp)

                            var vamp = mp + ((l - 1) * (objson.data[champ].stats.mpperlevel))

                            var vathpregen = hpregen + ((l - 1) * (objson.data[champ].stats.hpregenperlevel))

                            var varmpregen = mpregen + ((l - 1) * (objson.data[champ].stats.mpregenperlevel))

                            var atarm = armor + ((l - 1) * (objson.data[champ].stats.armorperlevel))

                            var atmr = spblock + ((l - 1) * (objson.data[champ].stats.spellblockperlevel))

                            var atrg = range

                            var atspd = atkspd + ((l - 1) * (objson.data[champ].stats.attackspeedperlevel * atkspd * 0.01))


                            var atatk = atk + ((l - 1) * (objson.data[champ].stats.attackdamageperlevel))


                            $('#atr').text('')
                            p.append(inp)
                            $('#atributo').text('')
                            p.append('<br>' + 'HP :' + parseFloat(vathp.toFixed(2))).append('<br>' + 'MP:' + vamp).append('<br>' + 'HPregen:' + parseFloat(vathpregen.toFixed(2))).append('<br>' + 'MPregen:' + parseFloat(varmpregen.toFixed(2))).append('<br>' + 'Armor:' + parseFloat(atarm.toFixed(2))).append('<br>' + 'Mr:' + parseFloat(atmr.toFixed(2))).append('<br>' + 'Range:' + atrg).append('<br>' + 'ATK Speed:' + parseFloat(atspd.toFixed(2))).append('<br>' + 'Attack:' + parseFloat(atatk.toFixed(2)))
                            $('#atributo').append(p)
                        }
                        if (l > 18) {
                            var vathp = hp + ((18 - 1) * (objson.data[champ].stats.hpperlevel))
                            console.log(vathp)

                            var vamp = mp + ((18 - 1) * (objson.data[champ].stats.mpperlevel))

                            var vathpregen = hpregen + ((18 - 1) * (objson.data[champ].stats.hpregenperlevel))

                            var varmpregen = mpregen + ((18 - 1) * (objson.data[champ].stats.mpregenperlevel))

                            var atarm = armor + ((18 - 1) * (objson.data[champ].stats.armorperlevel))

                            var atmr = spblock + ((18 - 1) * (objson.data[champ].stats.spellblockperlevel))

                            var atrg = range

                            var atspd = atkspd + ((18 - 1) * (objson.data[champ].stats.attackspeedperlevel * atkspd * 0.01))


                            var atatk = atk + ((18 - 1) * (objson.data[champ].stats.attackdamageperlevel))


                            $('#atr').text('')
                            p.append(inp)
                            $('#atributo').text('')
                            p.append('<br>' + 'HP :' + parseFloat(vathp.toFixed(2))).append('<br>' + 'MP:' + vamp).append('<br>' + 'HPregen:' + parseFloat(vathpregen.toFixed(2))).append('<br>' + 'MPregen:' + parseFloat(varmpregen.toFixed(2))).append('<br>' + 'Armor:' + parseFloat(atarm.toFixed(2))).append('<br>' + 'Mr:' + parseFloat(atmr.toFixed(2))).append('<br>' + 'Range:' + atrg).append('<br>' + 'ATK Speed:' + parseFloat(atspd.toFixed(2))).append('<br>' + 'Attack:' + parseFloat(atatk.toFixed(2)))
                            $('#atributo').append(p)

                        }
                        if (l < 1) {
                            $('#atr').text('')
                            $('#atributo').text('')

                            p.append(inp)
                            p.append('<br>' + 'HP :' + hp).append('<br>' + 'MP:' + mp).append('<br>' + 'HP regen:' + hpregen).append('<br>' + 'MP regen:' + mpregen).append('<br>' + 'Armor:' + armor).append('<br>' + 'Mr:' + spblock).append('<br>' + 'Range:' + range).append('<br>' + 'ATK Speed:' + atkspd).append('<br>' + 'Attack:' + atk)
                            $('#atributo').append(p)
                        }


                    })

                    $('#passiva').text('')
                    $('#q').text('')
                    $('#w').text('')
                    $('#e').text('')
                    $('#r').text('')

                    var passivaimg = $('<img>').attr('src', `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/passive/${pasimg}`)
                    console.log(passivaimg)
                    var psk = $('<p>').attr('class', 'skl').attr('id', 'psk')
                    psk.append(passiva).append(passivaimg).append(pasdesc)
                    $('#passiva').text('')
                    $('#passiva').append(psk)

                    var q = camp.spells[0]
                    var w = camp.spells[1]
                    var e = camp.spells[2]
                    var r = camp.spells[3]

                    var qfoto = $('<img>').attr('src', `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/spell/${q.image.full}`)
                    var wfoto = $('<img>').attr('src', `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/spell/${w.image.full}`)
                    var efoto = $('<img>').attr('src', `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/spell/${e.image.full}`)
                    var rfoto = $('<img>').attr('src', `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/spell/${r.image.full}`)

                    $('#q').append(q.name).append(qfoto).append(q.description)
                    $('#w').append(w.name).append(wfoto).append(w.description)
                    $('#e').append(e.name).append(efoto).append(e.description)
                    $('#r').append(r.name).append(rfoto).append(r.description)








                })

        })

    })
