const customRender = (element, container) => {
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    domElement.setAttribute('href',reactELement.props.href)
    domElement.serAttribute('target',reactELement.props.target)
    container.appendChild(domELement)
}

const reactELement = {
    type:'a',
    props:{
        href : 'https://google.com',
        target : '_blank'
},
    children : 'Google.com'
}

const mainContainer = document.querySelector('#root') 

customRender(reactELement, mainContainer)
// customRender(what to inject, Where to inject)

// rendering a tag (u give me 'a' tag , i will display it on the sceen)np

