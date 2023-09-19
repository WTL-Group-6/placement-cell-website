function sendMail(){
  var params ={
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };
  const serviceID =  "service_09mj4t9";
  const templateID =  "template_8w1lqwi";

emailjs
  .send(serviceID,templateID,params)
  .then((res)=>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("subject").value="";
    document.getElementById("message").value="";
    console.log(res);
    alert("your message send sucessfully");
  })
  .catch((err) => console.log(err));
}