function openLegacy(section) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const text = document.getElementById("modal-text");

    if (section === "identity") {
        title.innerText = "National Identity";
        text.innerText = "José Rizal is recognized as a national hero who embodies Filipino pride, unity, and the pursuit of freedom.";
    } else if (section === "education") {
        title.innerText = "Education";
        text.innerText = "Rizal believed in education as a tool for liberation, advocating learning, critical thinking, and social awareness.";
    } else if (section === "nationalism") {
        title.innerText = "Nationalism";
        text.innerText = "His writings and activism inspired reform and independence movements, fueling the rise of Filipino nationalism.";
    } else if (section === "literature") {
        title.innerText = "Literature";
        text.innerText = "Through Noli Me Tangere and El Filibusterismo, Rizal exposed societal injustices and shaped the foundation of Philippine literature.";
    } else if (section === "martyrdom") {
        title.innerText = "Martyrdom";
        text.innerText = "Rizal’s execution on December 30, 1896, turned him into a symbol of courage, sacrifice, and the struggle for justice.";
    } else if (section === "modern") {
        title.innerText = "Modern Influence";
        text.innerText = "Rizal’s legacy endures in Rizal Day, monuments, educational curricula, and his continued influence on Filipino values and national identity.";
    } else {
        title.innerText = "Unknown Section";
        text.innerText = "No information available for this section.";
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}