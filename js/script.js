function getData() {
  let Name = document.getElementById("Name").value;
  let Email = document.getElementById("Email").value;
  let Phone = document.getElementById("Phone").value;
  let Subject = document.getElementById("Subject").value;
  let Message = document.getElementById("Message").value;

  //   validation
  if (Name == "") {
    return alert("nama harus di isi");
  } else if (Email == "") {
    return alert("Email Harus Di isi");
  } else if (Phone == "") {
    return alert("phone harus di isi");
  } else if (Subject == "") {
    return alert("phone harus di isi");
  } else if (Message == "") {
    return alert("message harus di isi");
  }

  const destination = "rimbadaffa14@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto: ${destination}?Subject=${Subject}&body= hallo nama saya ${Name}, saya ingin ${Message}, bisakah anda menghubungi saya ${Phone}`;
  a.click();

  console.log(Name);
  console.log(Email);
  console.log(Phone);
  console.log(Subject);
  console.log(Message);
}
