function offerSkill() {
    const skillInput = document.getElementById('skill-offer');
    const skill = skillInput.value.trim();
    if (skill) {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        document.getElementById('skills-list').appendChild(listItem);
        skillInput.value = ''; // Clear the input after adding
    } else {
        alert('Please enter a skill to offer.');
    }
}
