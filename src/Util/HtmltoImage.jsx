import nodeHtmlToImage from "node-html-to-image";

export const getDataImg= ()=> nodeHtmlToImage({
  output: "./image.png",
  html: `<html>
  <head>
  @import url('http://fonts.cdnfonts.com/css/the-ticket');

body{
  color:black;
}
.card__container
{
   background-image:url("https://picsum.photos/200/300");
  height: 500px;
  width: 500px;
/*   background: black; */
/*   display: flex; */
  border-radius: 10px;
  padding: 20px;
  opacity: 0.6;
  background-size: cover;
  font-family: 'The Ticket', sans-serif;
font-family: 'The Ticket-Eroded', sans-serif;
font-family: 'The Ticket-Inverse', sans-serif;
}
.img
{
  opacity: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.hello
{
  padding-top: 20px;
  font-size: 30px;
}
.name
{
  color:  rgba(56, 178, 172, 1);
  font-weight: bold;
  padding-top: 10px;
  padding-left: 65px;
  letter-spacing: 2px;
}
.join
{
  padding-top: 5px;
  padding-left: 65px;
}
.loc
{
  padding-left: 65px;
  padding-top: 5px;
  color:  rgba(39, 124, 120, 1);
}
.route
{
  font-weight: bold;
  padding-top: 25px;
/*   text-align: center; */
}
.chart
{
  padding-top:20px;
  text-align: center;
}
.sal
{
  padding-top: 60px;
  display:flex;
  justify-content: flex-end;
}

  </head>
  <body>
  <div class="card__container">
  <div class="hello">
      Hello,
  <div class="name">
    
      Irshit Mukherjee
    </div>
  <div class="join">
      join us on board to
      </div>
  <div class="loc">
      FARIDABAD
    </div>


    <div class="route">
      Route
    </div>
  <div class="chart">
      Bandel -- Howrah -- New Delhi-- Faridabad
  
  </div>
    <div class="sal">
      Regards, <p>
      <em>HypeTheHike</em> </p>
    </div>
</div>
</body>
  </html>
  `,
}).then(() => console.log("The image was created successfully!"));
