<h1>Bilhete Único Digital Mobile Aplication</h1>

> ## Bilhete Único Digital is a mobile application designed to replace the single tickets provided by SPTrans in São Paulo, which are used daily by bus passengers. The application adheres to SPTrans' business rules and incorporates features such as viewing available tickets and seamless ticket integration. To support its functionality, a dedicated API was developed exclusively for the application


  
![Captura de tela 2024-03-20 213931](https://github.com/moiseshxs/Bilhete_Unico_Digital/assets/142733241/a66f1697-e6fb-49e5-ac6c-dbbaa3b2c087)
![Captura de tela 2024-03-20 213810](https://github.com/moiseshxs/Bilhete_Unico_Digital/assets/142733241/f5b98dc7-fda9-4b33-89e9-77e1a11e9134)
![Captura de tela 2024-03-20 205924](https://github.com/moiseshxs/Bilhete_Unico_Digital/assets/142733241/8a338fce-ba5f-4935-a96e-c7113546c298)

> # Turnstile prototype
> ## In addition to the [API](https://github.com/hucarvalho/bilhete-unico-digital-api), the application also integrates a developed [turnstile prototype](https://github.com/hucarvalho/bilhete_unico_digital_catraca) equipped with a QR code reader for ticket validation.  Passengers can simply place the QR code displayed in the Bilhete Único Digital app near the turnstile reader to validate access.

<details>
  <summary><h2>To better understand what Bilhete Único Digital is, click here.</h2></summary>
  
  ## Abstract

  > The "Digital Single Ticket" project proposes the implementation of an innovative application to replace the conventional single ticket system used in the city of São Paulo. Coupled with the application, a prototype of a low-cost electronic turnstile using Arduino has been developed, which will be capable of reading the QR code generated by the application, potentially replacing the conventional turnstiles used on buses in the city of São Paulo. This application aims to enhance the experience of public transportation users by offering a digitized and integrated solution for payment and access to transportation services. The Digital Single Ticket offers a mobile platform that allows users to conveniently load credits through secure online transactions, eliminating the dependence on physical recharge points. Additionally, the application provides an intuitive interface for credit management, trip history inquiries, and real-time notifications about available balance. Noteworthy is the integration of the Digital Single Ticket with various modes of transportation, including buses, subways, trains, and ride-hailing services, promoting a smoother and intermodal travel experience for users. In summary, the Digital Single Ticket represents an innovative and technologically advanced proposal to modernize the public transportation system in São Paulo, offering convenience, efficiency, and accessibility to users while driving the digitization and optimization of urban services offered by the city. 

Keywords: public transportation. Application. Arduino. single ticket. digitization.

  
</details>


> ## Some Implementations

- [X] Complete login system
- [X] User registration system with email code confirmation
- [X] It is possible to switch which ticket to use at any time.
- [X] It is possible to view the integration of the used ticket in real-time. In São Paulo, the integration lasts for two hours
- [X] Photo upload for passenger profile
- [X] It is possible to request new tickets.
      

> ## Instalation and Use
 ### Requirements: You will need to have XAMPP, Composer and Node Js installed on your computer.
1. Create the database using the [administrative section](https://github.com/hucarvalho/bilhete-unico-digital-adm) of Bilhete Único Digital. To do this, you need to clone the repository and follow the installation and usage steps.
2. You will need to clone the [API repository](https://github.com/hucarvalho/bilhete-unico-digital-api) and follow the usage instructions to proceed.
3. Clone the repository
4. Open the project folder in a terminal and type: "npm install".
5. After that, you will need to open the project in an IDE. In the files App.js and Api.ts, you will need to change the URL string to the port on which you are running the API.

   
![Captura de tela 2024-07-10 223506](https://github.com/moiseshxs/Bilhete_Unico_Digital/assets/142733241/b9e42acc-685b-4a54-95be-d8ea53930d82)
![Captura de tela 2024-07-10 223521](https://github.com/moiseshxs/Bilhete_Unico_Digital/assets/142733241/20056f0f-6b33-4b96-8d62-cde43201f9bd)


7. After that, type in the terminal "npm run web"
8. To log in, you can open the "passageiro" table in the database and use a CPF. The default password after the database migration will always be 123.



> ## Technologies Used
+ React Native

> ## Other Parts of the System and Their Repositories

+ Web Aplication : (<a href="https://github.com/hucarvalho/bilhete-unico-digital-adm">`https://github.com/hucarvalho/bilhete-unico-digital-api`</a>)
+ BackEnd API: (<a href="https://github.com/hucarvalho/bilhete-unico-digital-api">`https://github.com/moiseshxs/Bilhete_Unico_Digital`</a>)

> ## Arduino and Python Code for Turnstile Prototype

- **Arduino and Python Code:** Repository link [here](https://github.com/hucarvalho/bilhete_unico_digital_catraca)



