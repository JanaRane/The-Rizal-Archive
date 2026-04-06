function openModal(person) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const text = document.getElementById("modal-text");

    //family
    if (person === "teodora") {
        title.innerText = "Teodora Alonso Realonda y Quintos";
        text.innerText = "She is the mother of Jose Rizal, also known as Donya Lolay. She was a talented and well-educated woman who graduated from Colegio de Santa Rosa. She was Jose Rizal's first teacher, and a big inspiration to him. As her eyesight degraded, she was the reason Jose Rizal took up ophthalmology later in life.";
    }
    else if (person === "francisco") {
        title.innerText = "Francisco Rizal Mercado y Alejandro";
        text.innerText = "He is the father of Jose Rizal, also known as Don Kiko. He was a remarkable man who graduated from Colegio de San Juan. He became a Cabeza de Barangay and a well-respected figure. He was called as \"a model of fathers\" by Jose Rizal.";
    }
    else if (person === "saturnina") {
        title.innerText = "Saturnina Rizal";
        text.innerText = "Saturnina Rizal is the eldest child in the Rizal family. As the eldest, she was in charge of managing family affairs and taking care of her siblings, including financially supporting Jose Rizal’s education. She was married to Manuel Hidalgo.";
    }
    else if (person === "paciano") {
        title.innerText = "Paciano Rizal";
        text.innerText = "Paciano Rizal is the 2nd child in the Rizal family. He was influenced by Father Jose Burgos, and was deeply affected by the Gomburza execution. He financially supported Jose Rizal’s education and became an inspiration to him. Later, he became a general during the Philippine Revolution, and then spent his days as a farmer after the war.";
    }
    else if (person === "narcisa") {
        title.innerText = "Narcisa Rizal";
        text.innerText = "Narcisa Rizal is the 3rd child in the Rizal family. She has a strong sense of artistic talent, and became a teacher and a musician. She was the one who searched for and found Jose Rizal’s grave after his execution.";
    }
    else if (person === "olimpia") {
        title.innerText = "Olimpia Rizal";
        text.innerText = "Olimpia Rizal is the 4th child in the Rizal family. Unlike her siblings, she lived a quieter life married to Silvestre Ubaldo, a telegraph operator. She was schoolmates with Jose Rizal’s first love, Segunda Katigbak, and often became a mediator between the two.";
    }
    else if (person === "lucia") {
        title.innerText = "Lucia Rizal";
        text.innerText = "Lucia Rizal is the 5th child in the Rizal family. She was married to Matriano Herbosa. Unfortunately, her husband was denied a Christian burial after his death. She shared a close bond with Jose Rizal, and traveled to support him when he was exiled in Dapitan.";
    }
    else if (person === "maria") {
        title.innerText = "Maria Rizal";
        text.innerText = "Maria Rizal is the 6th child in the Rizal family. She had a close bond with Jose Rizal and became his trusted confidante, giving him advice after listening to his personal matters. She was the one who preserved Jose Rizal’s letters after his death.";
    }
    else if (person === "jose") {
        title.innerText = "Jose Rizal";
        text.innerText = "National Hero";
    }
    else if (person === "concepcion") {
        title.innerText = "Concepcion Rizal";
        text.innerText = "Concepcion Rizal is the 8th child in the Rizal family. Unfortunately, she died at 3 years old due to an illness. Despite her short life, her death left a mark on Jose Rizal as it was one of the first losses he had experienced.";
    }
    else if (person === "josefa") {
        title.innerText = "Josefa Rizal";
        text.innerText = "Josefa Rizal is the 9th child in the Rizal family. She joined and became a member of the Katipunan. She remained unmarried as she had dedicated her life to the revolution.";
    }
    else if (person === "trinidad") {
        title.innerText = "Trinidad Rizal";
        text.innerText = "Trinidad Rizal is the 10th child in the Rizal family. During Jose Rizal’s last moments, he entrusted her with “Mi Último Adiós”, which was his farewell poem to the Filipino people.";
    }
    else if (person === "soledad") {
        title.innerText = "Soledad Rizal";
        text.innerText = "Soledad Rizal is the youngest child in the Rizal family. She was well-educated and became a teacher. She was married to Pantaleon Quintero.";
    }

    //lovers
    else if (person === "katigbak") {
        title.innerText = "Segunda Katigbak";
        text.innerText = "Segunda Katigbak was Rizal's first love. When Rizal was 16 years old, he went to visit his grandmother with Mariano Katigbak, who was his friend and Segunda's brother. Rizal met Segunda at his grnadmother's house and fell in love at first sight. With the help of his sister Olympia, who was Segunda's schoolmate, Rizal was able to get close with her. Unfortunately, Rizal stopped pursuing her as she was already engaged to someone else.";
    }
    else if (person === "valenzuela") {
        title.innerText = "Leonor Valenzuela";
        text.innerText = "Leonor Valenzuela was Rizal's second love. Rizal met her as she was his neighbor at the boarding house he lived in during his time in UST. He used to send her secret letters made with invisible ink that had to be heated up in order to be read. While their relationship had to end due to Rizal's departure to Spain, they were still able to keep in touch with the help of Rizal's friend, Jose Cecilio.";
    }
    else if (person === "rivera") {
        title.innerText = "Leonor Rivera";
        text.innerText = "Leonor Rivera was Rizal's third love and second cousin. They held deep affection for one another and continued their relationship even as Rizal went abroad. Despite this, Leonor's parents disapproved of their relationship and arranged for her to marry Henry Kipping. It was believed that she was Rizal's inspiration for the character of Maria Clara in Noli Me Tangere.";
    }
    else if (person === "rey") {
        title.innerText = "Consuelo Ortega Y Rey";
        text.innerText = "Consuelo Ortega Y Rey was Rizal's fourth love, whom he meet in Madrid. She was the daughter of Don Pablo Ortiga Y Rey, who was the mayor of Manila. While Rizal had shown interest in her, he was not serious in his pursuit due to his relationship with Leonor Rivera and his friend Eduardo de Lete's feelings for Consuelo.";
    }
    else if (person === "usui") {
        title.innerText = "Seiko Usui";
        text.innerText = "Seiko Usui, also known as O-Sei-San, was Rizal's fifth love. Rizal went to Japan to take a job offer at the Spanish Legation and met O-Sei-San as she was passing by. She was well-versed in both English and French, which helped Rizal build a relationship with her. Unfortunately, their relationship ended as Rizal left Japan.";
    }
    else if (person === "beckett") {
        title.innerText = "Gertrude Beckett";
        text.innerText = "Gertrude Beckett was Rizal's sixth love. Rizal met her in London as she was the daughter of his landlord. While Gertrude held deep affection for him, Rizal, unfortunately, did not return her feelings.";
    }
    else if (person === "jacoby") {
        title.innerText = "Suzanne Jacoby";
        text.innerText = "Suzanne Jacoby was Rizal's seventh love. Rizal met her in Belgium as she was the niece of the caretakers of the boarding house he stayed at. His relationship with Suzanne was short-lived and ended after he left the country the same year.";
    }
    else if (person === "boustead") {
        title.innerText = "Nellie Boustead";
        text.innerText = "Nellie Boustead was Rizal's eigth love. Rizal met her in Biarritz as he stayed in her family's residence. While they were close to getting married, the marriage did not happen as Rizal refused Nellie's request to convert to Protestantism.";
    }
    else if (person === "bracken") {
        title.innerText = "Josephine Bracken";
        text.innerText = "Josephine Bracken was Rizal's ninth and last love. She was the adopted daughter of George Taufer. She had met Rizal after seeking his help for her adopted father's blindness. The two of them had married and had a son who unfortunately died after birth.";
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}