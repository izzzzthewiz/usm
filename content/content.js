

const loadVideos = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/izzzzthewiz/usm/main/content/generator/api/videos.json')
        let videos = await res.json()
        displayVideos(videos)
        console.log(videos)
    } catch (e) {
        console.error(e)
    }
}

const displayVideos = (videos) => {
    const contentwrap = document.getElementById('contentwrap')
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

loadVideos()