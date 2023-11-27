module.exports = async function (context, req) {

    context.log('Vaccine Validation Microservice'); 
 
    var message, name, vendor 
 
    if (context.bindings.tableVaccination.length == 1) { 
 
         name = context.bindings.tableVaccination[0].Name 
         vendor = context.bindings.tableVaccination[0].Vendor 
         message = `<h2>Hi, ${name}</h2> 
                    <h3>${vendor}</h3> 
                    <img src="https://courserastudentsfiles.blob.core.windows.net/students-files/badge_ok.png">` 
     } else { 
         message = `<h2>Record not found</h2> 
                    <img src="https://courserastudentsfiles.blob.core.windows.net/students-files/badge_nok.png">` 
     } 
 
     context.res = { 
         status: 200,  
         body: `<html> 
                 <body> 
                     <div align="center"> 
                         ${message} 
                     </div> 
                 </body> 
                </html>`, 
         headers: { 
             'Content-Type': 'text/html' 
         } 
     }; 
 
 }