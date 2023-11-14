//window.onload = () garante que o script só vai iniciar quando a tela estiver carregada
window.onload = () =>{
    //Selecionando cada elemento de acordo com id dado no html, o button é exceção pois só existe 1
    const notificationTemplate = document.querySelector('#notification');
    const notificationSection = document.querySelector('#notifications-section');
    const notificationButton = document.querySelector('button');

    //Criando variável que será o id da notificação quando clicado no botão "Mostrar Notificação"
    const notificationId = 'notification-${Date.now()}';

    //Criando evento que fica "escutando" a ação da variável notificationButton, esperando o click
    notificationButton.addEventListener("click", () => {
        //Criando viariavel newNotification, que será um clone do que existe na tag template
        const newNotification = notificationTemplate.content.cloneNode(true);

        //Criando variável que será o que existe na variável newNotification
        const dialog = newNotification.querySelector("dialog");

        //Dando um id qualquer para a variável newNotification, será util para sumir com o alerta
        dialog.id = notificationId;

        dialog.addEventListener('close', (ev) => {
            ev.target.remove();
        });

        //Inserindo no section o que está no newNotification, que é o que está na tag dialog
        notificationSection.appendChild(newNotification);

        //Setando timout para remover a notificação que aparecer após 5 segundos
            setTimeout(() => {
                document.getElementById(notificationId).close();
            }, 5000);
    });
};

