//window.onload = () garante que o script só vai iniciar quando a tela estiver carregada
window.onload = () =>{
    //Selecionando cada elemento de acordo com id dado no html, o button é exceção pois só existe 1
    const notificationTemplate = document.querySelector('#notification');
    const notificationSection = document.querySelector('#notifications-section');
    const notificationButton = document.querySelector('button');
    const notificationSound = new Audio('/sounds/notification.wav')

    
    //Criando evento que fica "escutando" a ação da variável notificationButton, esperando o click
    notificationButton.addEventListener("click", () => {
        //Criando viariavel newNotification, que será um clone do que existe na tag template
        const newNotification = notificationTemplate.content.cloneNode(true);

        //Criando variável que será o id da notificação quando clicado no botão "Mostrar Notificação"
        const notificationId = `notification-${Date.now()}`;

        //Criando variável que será o que existe na variável newNotification
        const dialog = newNotification.querySelector("dialog");

        //Dando um id para a variável dialog, será util para sumir com o alerta
        dialog.id = notificationId;

        dialog.addEventListener('close', (ev) => {
            //Timeout para que o dialog seja fechado na section cloque no close, se não ia ficar um espaço em branco entre as notificações
            setTimeout(() => {
                ev.target.remove();
            }, 700) //O tempo é o mesmo do duration na classe da tag dialog
        })

        //Inserindo no section o que está no newNotification, que é o que está na tag dialog
        notificationSection.appendChild(newNotification)
        notificationSound.play()

        //Setando timout para remover a notificação que aparecer após 5 segundos
        // setTimeout(() => {
        //     document.getElementById(notificationId).close();
        // }, 3000);

        setTimeout(() => {
            const dialogToClose = document.getElementById(notificationId)
            if (dialogToClose) {
                dialogToClose.close()
            }
        }, 4000)
    })
};

