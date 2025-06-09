const testimonials=[
    {
        name:"Cherise G",
        photoUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",text:"Apple makes me more productive and gets the job done in a fraction of the time. I'm glad I found Apple."
    },
    {
        name:"Rosetta Q",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",text:"I would recommend Apple for anyone trying to get the word out about their business. It has saved me so much time!"
    },
    {
        name:"Constantine V",
        photoUrl:"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",text:"We don’t need to spend as much time in meetings now that we use Apple."
    }
];

const imgE1=document.querySelector("img");
const textE1=document.querySelector(".text");
const usernameE1=document.querySelector(".username");



let idx=0;

updateTestimonial()

function updateTestimonial() {
    const {name,photoUrl,text} =testimonials[idx];
    imgE1.src=photoUrl
    textE1.innerText =text;
    usernameE1.innerText=name;
    idx++
    if(idx === testimonials.length){
        idx=0;
    }
    setTimeout(() =>{
        updateTestimonial()

    }, 10000);
}