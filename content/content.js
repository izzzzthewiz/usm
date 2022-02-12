const api = 'https://raw.githubusercontent.com/izzzzthewiz/usm/main/content/generator/api/videos.json'

const searchbar = document.getElementById('searchbar')
const contentwrap = document.getElementById('contentwrap')
const searchbtn = document.getElementById('searchbtn')
const clearbtn = document.getElementById('clearbtn')
const cleardiv = document.querySelector('.searchclear')

const loadVideos = async () => {
    try {
        const res = await fetch(api)
        let videos = await res.json()
        displayVideos(videos)
        console.log(videos)
    } catch (e) {
        console.error(e)
    }
}

const displayVideos = (videos) => {
    const htmlString = videos
    .map((video) => {
        return `
        <div class="box lightred blue-border">
            <div class="center">
                <a class="red-text contenttitle" href="${video.url}" target="_blank">
                    ${video.title}
                </a>
                <iframe width="640" height="360" style="border: none;" src="${video.url.replace('watch?v=', 'embed/')}" allow="autoplay" allowfullscreen></iframe>
                <p>
                    Creator: ${video.creator}
                </p>
            </div>
        </div>
        `
    })
    .join('')
    contentwrap.innerHTML = htmlString
}

async function search(searchString) {
    if (searchbar.value == '') return clearSearch()
    try {
        const res = await fetch(api);
        let videos = await res.json();
        const filteredVideos = videos.filter((video) => {
            return (
                video.title.toLowerCase().includes(searchString) || video.creator.toLowerCase().includes(searchString)
            );
        });
        displayVideos(filteredVideos);
        if (filteredVideos.toString() == ''){
            contentwrap.innerHTML = `<h2 class="center red-text" id="noresults">No videos found!</h2>`;
        }
        cleardiv.classList.add('show')
    } catch(err) {
        console.log(err);
    }
}

searchbar.addEventListener('keydown', (e) => {
    if (e.keyCode == 13){
        search(e.target.value)
    }
});

searchbtn.addEventListener('click', () => {
    search(searchbar.value)
})

function clearSearch(){
    loadVideos()
    searchbar.value = ''
    cleardiv.classList.remove('show')
}

clearbtn.addEventListener('click', () => {
    clearSearch()
})

loadVideos()