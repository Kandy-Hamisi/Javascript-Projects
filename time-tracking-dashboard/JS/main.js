

const cardTxt = document.querySelectorAll(".timeframe");
const progSect = document.querySelector(".progress-section");
const myCard = document.querySelector(".card-progress");

// const weekly = document.querySelector(".weekly");
// console.log(weekly);

console.log(progSect);

// profile card variables
const weeklySelector = document.querySelector(".weeklyTimeFrame");


weeklySelector.onclick = () => {
    
}

// fetch the json data

async function fetchData() {
    try {
        let response = await fetch("./data.json");
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
}



// rendering the cards for timeframes

async function renderCards() {
    let timeFrameData = await fetchData();
    // let html = ""

    progSect.innerHTML = timeFrameData.map(el => {
        let timeFrames = el.timeframes;
        
        return `
            <div class="card-progress ${(el.title === "Self Care" ? "SelfCare": el.title)}">
                <div class="img-bg">
                    <img src="images/${el.icon}" class="img-icons">
                </div>
                <div class="content">
                    <div class="menu-splitter">
                        <h4 class="task-title">${el.title}</h4>
                        <div class="vert-kebab-menu">
                            <img src="images/icon-ellipsis.svg" alt="kebab-menu">
                        </div>
                    </div>
                    <div class="timeframe daily">
                        <h5 class="currenthrs">
                            ${timeFrames['daily'].current}${(timeFrames['daily'].current) === 1 ? "hr" : "hrs"  }
                        </h5>
                        <h5 class="prev">
                            Last Day - ${timeFrames['daily'].previous}${(timeFrames['daily'].previous) === 1 ? "hr" : "hrs"}
                        </h5>
                    </div>
                    <div class="timeframe weekly">
                        <h5 class="currenthrs">
                            ${timeFrames['weekly'].current}${(timeFrames['weekly'].current) === 1 ? "hr" : "hrs"  }
                        </h5>
                        <h5 class="prev">
                            Last Week - ${timeFrames['weekly'].previous} ${(timeFrames['weekly'].previous) === 1 ? "hr" : "hrs"}
                        </h5>
                    </div>
                    <div class="timeframe monthly">
                        <h5 class="currenthrs">
                            ${timeFrames['monthly'].current}
                            ${(timeFrames['monthly'].current) === 1 ? "hr" : "hrs"  }
                        </h5>
                        <h5 class="prev">
                            Last Month - ${timeFrames['monthly'].previous} ${(timeFrames['daily'].previous) === 1 ? "hr" : "hrs"}
                        </h5>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

renderCards();


// 
const weekly = document.querySelector(".weekly");
console.log(weekly);