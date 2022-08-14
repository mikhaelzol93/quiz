function handleSectionClick(event) {
    const parent = event.target.parentElement
    if (parent.classList.contains('green')) {
        parent.classList.remove('green')
    } else {
        parent.classList.add('green')
    }
}

window.onload = () => {
    const sectionList = document.getElementsByTagName('section')

    for (let i = 0; i < sectionList.length; ++i) {
        sectionList[i].addEventListener('click', handleSectionClick)
    }
}

