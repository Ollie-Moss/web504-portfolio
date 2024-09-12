window.onload = async () => {
    await loadComponent('header', '../components/header/header.html')
    await loadComponent('footer', '../components/footer/footer.html')
    await loadComponent('main', '../components/home/home.html')
    window.dispatchEvent(componentsLoaded)
}
