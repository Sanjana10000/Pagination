
let body=document.querySelector('body');
let setcontainer=(container,id)=>{
    container.setAttribute('class','container p-2 bg-light');
    container.style.border="5px solid black";
    container.id=`${id}`;
}
let container1=document.createElement('div');
let container2=document.createElement('div');
setcontainer(container1,'container1');
setcontainer(container2,'container2');
body.append(container1);
let con2row1=document.createElement('div');
con2row1.setAttribute('class','row');
let page=document.createElement('h4');
page.setAttribute('id','page');
page.style.color='black';
page.style.textAlign='center';
con2row1.append(page);
container2.append(con2row1);
let con2row2=document.createElement('div');
con2row2.setAttribute('class','row p-0 m-0 justify-content-center');
let con2row2col1=document.createElement('div');
con2row2col1.setAttribute('class','col-2 col-lg-1 p-0 m-0');
let con2row2col1row=document.createElement('div');
con2row2col1row.setAttribute('class','row p-0 m-0');
con2row2col1row.setAttribute('id','prev');
con2row2col1.append(con2row2col1row);
con2row2.append(con2row2col1);
let con2row2col2=document.createElement('div');
con2row2col2.setAttribute('class','col-7 col-lg-4 p-0 m-0');
con2row2col2.setAttribute('id','buttons');
con2row2col2.style.textAlign="center";
con2row2.append(con2row2col2);
let con2row2col3=document.createElement('div');
con2row2col3.setAttribute('class','col-2 col-lg-1 p-0 m-0');
let con2row2col3row=document.createElement('div');
con2row2col3row.setAttribute('class','row p-0 m-0');
con2row2col3row.setAttribute('id','next');
con2row2col3.append(con2row2col3row);
con2row2.append(con2row2col3);
container2.append(con2row2);
body.append(container2);



