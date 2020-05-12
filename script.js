const key = "AIzaSyAsMk24GkL5r7Z35D04-IdYIPAa6HyRPoQ";
const id = "UCi4s3kO1-xxCDaw8yX56umw"
const api_url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${key}`;
const counter_wrap = document.querySelector('#live-count-wrap')
const counter = document.querySelector('#live-sub-count')
async function getSubs() {
    const response = await fetch(api_url);
    const data = await response.json();
    const data_items = data.items
    console.log(data)
    data_items.map((info) => {
        const { statistics } = info;
        const subCount = statistics.subscriberCount;
        counter.innerText = subCount
    })

}
getSubs()
setInterval(getSubs, 2000);
