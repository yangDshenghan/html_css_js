function change_pic_source(pic) {
  let img = document.getElementById('img')
  let src = pic.getAttribute('href')
  img.setAttribute('src',src)
}
