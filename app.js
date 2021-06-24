const nodemailer = require ('nodemailer')
//const fs = require('fs');



let transporter = nodemailer.createTransport({
  service:'gmail' ,
  auth:{
 user:'tamplates0@gmail.com',
 pass:'tamplates2020',
}
})


let mailOptions={
 from: '"Fred Foo 👻" <foo@example.com>',
 cc:'wlevsonsamuel@gmail.com',
 bcc: 'wlevsonsamuel@gmail.com',
 to: "maxinosamx@gmail.com,  annitajulian@gmail.com,mayajane665@gmail.com,  girdonresys@gmail.com,  jesusmysaviourfabian@gmail.com, mathasheeba@gmail.com, danelcraig4@gmail.com, dondannyo459@gmail.com,  jesusmysaviourfabian@gmail.com,  amunonesta@gmail.com,tamplates0@gmail.com  ",

 subject: "Welcome to chase Bank",
 
 html:`<!DOCTYPE html>
 <html lang="en">
   <head>
     <!-- Required meta tags -->
     <meta charset="utf-8" />
     <meta
       name="viewport"
       content="width=device-width, initial-scale=1, shrink-to-fit=no"
     />
 
     <!-- Bootstrap CSS -->
     <link
       rel="stylesheet"
       href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
       integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
       crossorigin="anonymous"
     />
     <link rel="stylesheet" type="text/css" href="style.css" />
     <link
       href="https://fonts.googleapis.com/css?family=Open+Sans"
       rel="stylesheet"
       type="text/css"
     />
     <title></title>
   </head>
   <body>
     <style>
       h4 {
         font-family: "Helvetica";
       }
       .container {
         max-width: 600px;
       }
       header {
         background-color: #fff;
         padding: 10px;
         width: 100%;
       }
       footer {
         background-color: #fff;
         color: #000;
         width: 100%;
         font-size: 12px;
         padding: 5px;
       }
     </style>
     <div class="container">
       <header>
         <center>
           <img src="https://fabian01.netlify.app/image/download.png" width="150" />
           <!-- 
  <hr style="border-bottom: 5px solid #0071BD;"> -->
         </center>
       </header>
       <hr style="background-color: #1b75bc;" />
       <p><b>Account locked notification.</b></p>
       <p>
         We had to lock your CHASE Account. to protect your security.<br />
         To unlock your account you need to complete the security process.
       </p>
       <p>
         To complete this process
 
         
         <a href="#">
       
 
           Click Here</a
         >
       </p>
       <p>
         Please make sure you enter same information as in the account, changing
         information on the account with other information can result on
         permanent locking and it request new procedure for unlocking
       </p>
       <p>Thank you!</p>
       <p>CHASE Department</p>
       <!--  <hr style="border-bottom: 5px solid #1B559B;">
  -->
       <hr style="background-color: #1b75bc;" />
 
       <footer>
         <div class="row" style="margin-top: 5px;">
           <div class="col">
             <span>Contact Us| Statement | Department</span><br />
           </div>
           <div class="col">
             <center>
               <img src="https://fabian01.netlify.app/image/download.png" width="100" />
             </center>
           </div>
           <div class="col">
             <span style="float: right;">©2009-2020 CHASE BANK </span>
           </div>
         </div>
       </footer>
     </div>
 
     
     <!-- jQuery first, then Popper.js, then Bootstrap JS -->
     <script
       src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
       integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
       crossorigin="anonymous"
     ></script>
     <script
       src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
       integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
       crossorigin="anonymous"
     ></script>
     <script
       src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
       integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
       crossorigin="anonymous"
     ></script>
   </body>
 </html>
 `
}


transporter.sendMail(mailOptions , function(err, data){
    if(err){
     console.log('error occured')
 }else{
         console.log('email sent')
     }

})
