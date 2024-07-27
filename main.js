fetch("https://jsonplaceholder.typicode.com/users")
 .then(res => res.json())
 .then(data =>{
    data.forEach(element => {
        const bigWrapper = document.querySelector("div") 
        const wrapper = document.createElement("div");
        wrapper.className = "card";
        const Id = document.createElement("h2");
        const Name = document.createElement("p");
        const UserName = document.createElement("p");
        const Manzil = document.createElement("p");
        Manzil.textContent = (`Manzil: ${element.address.street}`)
        UserName.textContent = (`UserName: ${element.username}`)
        Name.className = "Name";
        const Email = document.createElement("p");
        Name.textContent = (`Ism: ${element.name}`)
        Email.textContent = (`Email:${element.email}`)
        document.body.appendChild(Name)
        document.body.appendChild(Email)    
        Id.textContent = element.id
        wrapper.append(Name,UserName,Manzil,Email);
        bigWrapper.appendChild(wrapper);
    });
 })





