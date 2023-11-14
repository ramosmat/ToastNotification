//window.onload = () garante que o script só vai iniciar quando a tela estiver carregada
window.onload = () =>{
    const notificationTemplate = document.querySelector('#notification');
    const notificationSection = document.querySelector('#notifications-section');
    const notificationButton = document.querySelector('button');

    notificationButton.addEventListener("click", () => {
        const newNotification = notificationTemplate.content.cloneNode(true);
        notificationSection.appendChild(newNotification);
    });
};
