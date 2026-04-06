const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;

        document.querySelectorAll(".accordion-content").forEach(c => {
            if (c !== content) {
                c.style.maxHeight = null;
                c.classList.remove("active");
            }
        });

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.classList.remove("active");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add("active");
        }
    });
});

function openModal(work) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const text = document.getElementById("modal-text");

    if (work === "noli-description") {
        title.innerText = "Noli Me Tangere - Description";
        text.innerText = "A novel by José Rizal that exposes the social injustices and abuses of Spanish colonial rule through the story of Crisostomo Ibarra.";
    }
    else if (work === "noli-analysis") {
        title.innerText = "Noli Me Tangere - Analysis";
        text.innerText = "The novel criticizes corruption in the church and government while promoting education and reform as solutions to societal problems.";
    }
    else if (work === "elfili-description") {
        title.innerText = "El Filibusterismo - Description";
        text.innerText = "A sequel to Noli Me Tangere that follows Simoun, a man seeking revenge against the corrupt colonial system.";
    }
    else if (work === "elfili-analysis") {
        title.innerText = "El Filibusterismo - Analysis";
        text.innerText = "It presents a darker tone, showing the failure of peaceful reform and suggesting that oppression can lead to revolution.";
    }
    else if (work === "amor-description") {
        title.innerText = "El Amor Patrio - Description";
        text.innerText = "An essay emphasizing the importance of love for one's country and national identity.";
    }
    else if (work === "amor-analysis") {
        title.innerText = "El Amor Patrio - Analysis";
        text.innerText = "Rizal highlights patriotism as a foundation for unity and progress, encouraging Filipinos to value their nation.";
    }
    else if (work === "filipinas-description") {
        title.innerText = "The Philippines a Century Hence - Description";
        text.innerText = "A series of essays predicting the future of the Philippines under Spanish rule.";
    }
    else if (work === "filipinas-analysis") {
        title.innerText = "The Philippines a Century Hence - Analysis";
        text.innerText = "Rizal warns that continued oppression would lead to unrest and possible revolution, showing his insight into social conditions.";
    }
    else if (work === "indolence-description") {
        title.innerText = "The Indolence of the Filipinos - Description";
        text.innerText = "An essay defending Filipinos from accusations of laziness by examining historical and social factors.";
    }
    else if (work === "indolence-analysis") {
        title.innerText = "The Indolence of the Filipinos - Analysis";
        text.innerText = "Rizal argues that colonial policies and lack of opportunities caused this perception, not the nature of Filipinos.";
    }
    else if (work === "women-description") {
        title.innerText = "To the Young Women of Malolos - Description";
        text.innerText = "A letter praising the women of Malolos for their courage in advocating for education.";
    }
    else if (work === "women-analysis") {
        title.innerText = "To the Young Women of Malolos - Analysis";
        text.innerText = "It emphasizes the importance of education and the role of women in shaping society and national progress.";
    }
    else if (work === "vision-description") {
        title.innerText = "La Visión del Fray Rodríguez - Description";
        text.innerText = "A satirical work criticizing friars and their influence over society.";
    }
    else if (work === "vision-analysis") {
        title.innerText = "La Visión del Fray Rodríguez - Analysis";
        text.innerText = "Rizal uses satire to expose religious hypocrisy and abuse of power within the colonial system.";
    }
    else if (work === "adios-description") {
        title.innerText = "Mi Último Adiós - Description";
        text.innerText = "A farewell poem written by Rizal before his execution, expressing his love for his country.";
    }
    else if (work === "adios-analysis") {
        title.innerText = "Mi Último Adiós - Analysis";
        text.innerText = "The poem reflects deep patriotism and sacrifice, showing Rizal’s willingness to give his life for the nation.";
    }
    else if (work === "youth-description") {
        title.innerText = "A la Juventud Filipina - Description";
        text.innerText = "A poem encouraging the youth to use their talents for the betterment of the nation.";
    }
    else if (work === "youth-analysis") {
        title.innerText = "A la Juventud Filipina - Analysis";
        text.innerText = "It highlights the importance of education and the role of young people in shaping the country’s future.";
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function searchWorks() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const works = document.querySelectorAll(".work");
    const header = document.getElementById("header");
    let anyVisible = false;

    const hasSearch = input.length > 0;

    works.forEach(work => {
        const title = work.querySelector(".accordion-header").innerText.toLowerCase();
        if (title.includes(input)) {
            work.style.display = "block";
            anyVisible = true;
        } else {
            work.style.display = "none";
        }
    });

    document.getElementById('noResults').style.display = anyVisible ? "none" : "block";

    header.style.display = hasSearch ? "none" : "block";
}