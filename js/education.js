var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    noWrap: true
}).addTo(map);

var locations = [
    [14.1949, 121.1597, "Calamba, Laguna", "Rizal started his education in his hometown with his mother as his first teacher. He also had the following people as his private tutors: <br> - Leon Monroy <br> - Maestro Celestino <br> - Maestro Lucas"],
    [14.3146, 121.0832, "Biñan, Laguna", "In 1870, Rizal continued his education in Biñan, Laguna under Justiniano Aquino before returning to his hometown the following year."],
    [14.5937, 120.9771, "Colegio de San Juan de Letran", "Rizal took the entrance exams at Colegio de San Juan de Letran but did not enroll in the college."],
    [14.5893, 120.9737, "Ateneo Municipal de Manila", "In 1872, Rizal entered Ateneo Municipal de Manila where he studied under Fr. Jose Bech, S.J. He graduated with the highest honors and received a degree in Bachelor of Arts."],
    [14.6098, 120.9896, "University of Santo Tomas", "In 1877, Rizal entered University of Santo Tomas to continue his education. While he initially enrolled in Philosophy and Letters, he eventually shifted to Medicine because of his mother's declining eyesight. Unfortunately, he did not complete his medical degree due to discrimination and left in 1882."],
    [40.4454, -3.7299, "Universidad Central de Madrid", "In 1882, Rizal arrived in Spain and enrolled in Universidad Central de Madrid. He completed his medicine course on June 21, 1884 and received his Licentiate in Medicine. However, he did not receive his diploma due to his failure to submit his thesis and pay his fees. Rizal had also enrolled in Philosophy and Letters and received his Degree of Licentiate in Philosophy and Letters with higher grades on June 19, 1885."],
    [48.8556, 2.3316, "University of Paris", "In 1885, Rizal enrolled in University of Paris to continue studying ophthalmology."],
    [49.4107, 8.7066, "University of Heidelberg", "In 1886, Rizal enrolled in University of Heidelberg to continue studying ophthalmology under Dr. Otto Becker. He completed his course in 1887."],
    [51.3386, 12.3785, "University of Leipzig", "In 1886, Rizal attended some lectures on history and psychology at the University of Leipzig."],
];

locations.forEach(function(location) {
    L.marker([location[0], location[1]])
        .bindPopup("<b><center>" + location[2] + "</center></b>" + location[3])
        .addTo(map);
});