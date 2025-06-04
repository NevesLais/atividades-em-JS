let ano = 2024; 
if( (ano%400 == 0) || (ano%4==0 && ano%100!=0) )
    console.log("É bissexto");
   else
    console.log("Não é bissexto")
   
  // ou ||

  /*Regras para um ano ser bissexto:
  Se o ano for divisível por 400, então ele é bissexto.
  
  Exemplo: 1600, 2000, 2400 são bissextos.
  
  Se o ano não for divisível por 400, mas for divisível por 4, então ele é bissexto, desde que não seja divisível por 100.
  
  Exemplo: 1996, 2020 são bissextos, pois são divisíveis por 4 e não por 100.
  
  Se o ano for divisível por 100, mas não for divisível por 400, então ele não é bissexto.
  
  Exemplo: 1700, 1800, 1900 não são bissextos, pois são divisíveis por 100, mas não por 400.*/
  


