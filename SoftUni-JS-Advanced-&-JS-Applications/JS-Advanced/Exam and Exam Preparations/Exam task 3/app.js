window.addEventListener("load", solve);

function solve() {
  let name = document.querySelector("#snowman-name");
  let height = document.querySelector("#snowman-height");
  let location = document.querySelector("#location");
  let creator = document.querySelector("#creator-name");
  let attributes = document.querySelector("#special-attribute");


  document.querySelector("#hero > div.snowman-container > form > button").addEventListener(`click`,addFn)
  function addFn(event){
    event.preventDefault();
    if (name.value == `` || height.value == `` || location.value == `` || creator.value == ``|| attributes.value == `` ){
      return;
    }
    let nameForLater = name.value;
    let heightForLater = height.value;
    let locationForLater = location.value;
    let creatorForLater = creator.value;
    let attributesForLater = attributes.value;

    let ulList = document.querySelector("#hero > div.snowballs-container > div.snowball > ul");
    let list = createList(`snowman-info`,name.value,height.value,location.value,creator.value,attributes.value);
    ulList.appendChild(list)
    let divForBtns = document.createElement(`div`);
    divForBtns.className = `btn-container`
    let btn1 = createBtn(`edit-btn`,`Edit`);
    let btn2 = createBtn(`next-btn`,`Next`);
    divForBtns.appendChild(btn1)
    divForBtns.appendChild(btn2);
    list.appendChild(divForBtns);


  name.value = ``
  height.value = ``
  location.value = ``
  creator.value = ``
  attributes.value = `` 

    document.querySelector("#hero > div.snowman-container > form > button").disabled = true;
    document.querySelector("#hero > div.snowballs-container > div.snowball > ul > li > div > button.edit-btn").addEventListener(`click`,editBtn);
    document.querySelector("#hero > div.snowballs-container > div.snowball > ul > li > div > button.next-btn").addEventListener(`click`,nextBtn);
    function editBtn(){
      name.value = nameForLater
      height.value = heightForLater
      location.value = locationForLater
      creator.value = creatorForLater
      attributes.value = attributesForLater
      document.querySelector("#hero > div.snowman-container > form > button").disabled = false;
      list.remove()
    }
    function nextBtn(){
      let ulListFinal = document.querySelector("#hero > div.snowballs-container > div.snow > ul");
      let listForFinal = document.createElement(`li`);
      listForFinal.className = `snowman-content`;
      ulListFinal.appendChild(listForFinal);
      let article = document.createElement(`article`);
      listForFinal.appendChild(article);
      let p1 = document.createElement(`p`);
      p1.textContent = `Name: ${nameForLater}`
      article.appendChild(p1);
      let p2 = document.createElement(`p`);
      p2.textContent = `Height: ${heightForLater}`;
      article.appendChild(p2);
      let p3 = document.createElement(`p`);
      p3.textContent = `Location: ${locationForLater}`;
      article.appendChild(p3);
      let p4 = document.createElement(`p`);
      p4.textContent = `Creator: ${creatorForLater}`;
      article.appendChild(p4);
      let p5 = document.createElement(`p`);
      p5.textContent = `Attribute: ${attributesForLater}`;
      article.appendChild(p5);
      let btn = createBtn(`send-btn`,`Send`);
      article.appendChild(btn);
      list.remove()

      document.querySelector("#hero > div.snowballs-container > div.snow > ul > li > article > button").addEventListener(`click`,lastBtn);
      function lastBtn(){
        document.querySelector("#hero").textContent = ``
        document.querySelector("#back-img").hidden = false;
        document.querySelector("#hero").remove();
        let backBtn = createBtn(`back-btn`,`Back`);
        document.querySelector("body").appendChild(backBtn);
        document.querySelector("body > button").addEventListener(`click`,finish);
        function finish(){
          window.location.reload();
        }

      }
    }
  
  }


  function createList(classForList,name,height,location,creator,attributes){
    let list = document.createElement(`li`);
    list.className = classForList
    let article = document.createElement(`article`);
    list.appendChild(article);
    let p1 = document.createElement(`p`);
    p1.textContent = `Name: ${name}`
    article.appendChild(p1);
    let p2 = document.createElement(`p`);
    p2.textContent = `Height: ${height}`;
    article.appendChild(p2);
    let p3 = document.createElement(`p`);
    p3.textContent = `Location: ${location}`;
    article.appendChild(p3);
    let p4 = document.createElement(`p`);
    p4.textContent = `Creator: ${creator}`;
    article.appendChild(p4);
    let p5 = document.createElement(`p`);
    p5.textContent = `Attribute: ${attributes}`;
    article.appendChild(p5);

    return list
  }
  function createBtn(classForBtn,nameForBtn){
    let btn = document.createElement(`button`);
    btn.className = classForBtn;
    btn.textContent = nameForBtn;
    return btn
  }
}
