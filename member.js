function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.createElement("div");
    skillsMember.setAttribute("class", "skillsMember");
    skills.appendChild(skillsMember);

    var skillsMemberImg = document.createElement("img");
    skillsMemberImg.setAttribute("src", "img/1.jpg");
    skillsMemberImg.setAttribute("class", "skillsMemberImg");
    skillsMember.appendChild(skillsMemberImg);

    var skillsMemberName = document.createElement("h2");
    skillsMemberName.setAttribute("class", "skillsMemberName");
    skillsMemberName.innerHTML = "Name";
    skillsMember.appendChild(skillsMemberName);

    var skillsMemberJob = document.createElement("h3");
    skillsMemberJob.setAttribute("class", "skillsMemberJob");
    skillsMemberJob.innerHTML = "Job";
    skillsMember.appendChild(skillsMemberJob);

    var skillsMemberText = document.createElement("p");
    skillsMemberText.setAttribute("class", "skillsMemberText");
    skillsMemberText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.";
    skillsMember.appendChild(skillsMemberText);
}