function gramophone(band,album,song){
    let time = Number((album.length * band.length) * song.length / 2)

    console.log(`The plate was rotated ${Math.ceil(time/2.5)} times.`)

}
gramophone("Rammstein", "Sehnsucht","Engel")