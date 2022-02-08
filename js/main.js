function loadNav(id){
    const htmlString = `
        <img src="./img/logo.png" onclick="location.href = './'">
        <a href="./" id="home">Home</a>
        <a href="./about" id="about">About</a>
        <div class="dropdown">
            <button id="links" onclick="location.href = '#links'">Links<i class="fas fa-caret-down"></i></button>
            <div class="dropdown-content">
                <a href="./discord" target="_blank" id="discord">Discord</a>
                <a href="./roster" target="_blank" id="roster">Roster</a>
                <a href="./sop" target="_blank" id="sop">SOP</a>
                <a href="./apply" target="_blank" id="apply">Apply</a>
                <a href="./report" target="_blank" id="report">Report Form</a>
            </div>
        </div>
    `
    document.getElementById('navcontent').innerHTML = htmlString
    document.getElementById(id).classList.add('active')
}
function loadFooter(){
    const htmlString = `
    <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> United States Miltia</p>
    <a href="./discord" target="_blank">Discord</a> | 
    <a href="./roster" target="_blank">Roster</a> | 
    <a href="./sop" target="_blank">SOP</a> | 
    <a href="./apply" target="_blank">Apply</a> | 
    <a href="./report" target="_blank">Report Form</a>
    `
    document.getElementById('footer').innerHTML = htmlString
}