function loadNav(id){
    const htmlString = `
        <img src="https://izzzzthewiz.github.io/usm/img/logo.png" onclick="location.href = 'https://izzzzthewiz.github.io/usm/'">
        <a href="https://izzzzthewiz.github.io/usm/" id="home">Home</a>
        <a href="https://izzzzthewiz.github.io/usm/about" id="about">About</a>
        <a href="https://izzzzthewiz.github.io/usm/content" id="content">Content</a>
        <div class="dropdown" id="dropdown">
            <button id="links">Links<i class="fas fa-caret-right" id="arrow"></i></button>
            <div class="dropdown-content">
                <a href="https://izzzzthewiz.github.io/usm/discord" target="_blank" id="discord">Discord</a>
                <a href="https://izzzzthewiz.github.io/usm/roster" target="_blank" id="roster">Roster</a>
                <a href="https://izzzzthewiz.github.io/usm/sop" target="_blank" id="sop">SOP</a>
                <a href="https://izzzzthewiz.github.io/usm/apply" target="_blank" id="apply">Apply</a>
                <a href="https://izzzzthewiz.github.io/usm/report" target="_blank" id="report">Report Form</a>
            </div>
        </div>
    `
    document.getElementById('navcontent').innerHTML = htmlString
    document.getElementById(id).classList.add('active')
}



function loadFooter(){
    const htmlString = `
    <p>Copyright &copy <script>document.write(new Date().getFullYear())</script> United States Miltia</p>
    <a href="https://izzzzthewiz.github.io/usm/discord" target="_blank">Discord</a> | 
    <a href="https://izzzzthewiz.github.io/usm/roster" target="_blank">Roster</a> | 
    <a href="https://izzzzthewiz.github.io/usm/sop" target="_blank">SOP</a> | 
    <a href="https://izzzzthewiz.github.io/usm/apply" target="_blank">Apply</a> | 
    <a href="https://izzzzthewiz.github.io/usm/report" target="_blank">Report Form</a>
    `
    document.getElementById('footer').innerHTML = htmlString
}



function redirect(url){
    const link = document.getElementById('link')
    link.setAttribute('href', url)
    link.innerHTML = url
    location.href = url
}



function loadHomeModals(){
    const modal = document.getElementById('modal')
    const modalImg = document.getElementById('modalImg')
    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')
    const img3 = document.getElementById('img3')
    const img4 = document.getElementById('img4')
    const caption = document.getElementById('modal-caption')
    const modalclose = document.getElementById('modal-close')
    const imgs = [img1, img2, img3, img4]
    for (const img of imgs) {
        img.addEventListener('click', function() {
            modal.style.display = 'block'
            modalImg.src = this.src
            caption.innerHTML = this.alt
        })
    }
    modalclose.addEventListener('click', function() {
        modal.style.display = 'none'
    })
}