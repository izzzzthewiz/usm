

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
        let embed
        if (video.platform == 'youtube') embed = `<iframe width="640" height="360" src="https://www.youtube.com/embed/${video.url.replace('https://www.youtube.com/watch?v=', '')}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        if (video.platform == 'medal') embed = `<iframe width='640' height='360' style='border: none;' src='${video.url}' allow='autoplay' allowfullscreen></iframe>`
        return `
        <div class="box lightred blue-border">
            <div class="center">
                <a class="red-text contenttitle" href="${video.url}" target="_blank">
                    ${video.title}
                </a>
                ${embed}
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