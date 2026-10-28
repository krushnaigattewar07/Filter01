const cl = console.log

var companies8 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//Arrayof companywho run for at last 10 years
//(end - start >= 10)
//[{name: "Company One", category: "Finance", start: 1981, end: 2003}]

let result12 =[];
for (let i=0; i< companies8.length; i++){
	let age =(companies8[i].end - companies8[i].start);
	if (age >= 10){
	result12.push(companies8[i]);
	}
}
cl (result12);

let result13 =[];
for (let i=0; i< companies8.length; i++){
	if(companies8[i].end - companies8[i].start>=10){
	result13.push(companies8[i]);
	}
}
cl (result13);

let result14=[];
companies8.forEach((param)=>{
	if (param.end - param.start>=10){
		result14.push(param);
	}
})
cl(result14);

let result15=companies8.filter(params=>{
	return(params.end - params.start >=10);
})
cl(result15);




var companies9 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//create a array of Company whos category is retail

let result16 =[];
for (let i=0; i< companies9.length; i++){
	if(companies9[i].category.toLowerCase().trim() === 'retail'){
		result16.push(companies9[i]);
	}
}
cl(result16);


let result19 =[];
for (let i=0; i< companies9.length; i++){
	if(companies9[i].category.toLowerCase().indexOf('retail')> -1){
		result19.push(companies9[i]);
	}
}
cl(result19);


let result20 =[];
for (let i=0; i< companies9.length; i++){
	if(companies9[i].category.toLowerCase().includes('retail')){
		result20.push(companies9[i]);
	}
}
cl(result20);




var companies9 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//create a array of Company whos category is retail


let result17 =[];
companies9.forEach((params)=>{
	if(params.category.toLowerCase().trim() === 'retail'){
		result17.push(params);
	}
})
cl(result17);


let result21 =[];
companies9.forEach((params)=>{
	if(params.category.toLowerCase().indexOf('retail')> -1){
		result21.push(params);
	}
})
cl(result21);

let result22 =[];
companies9.forEach((params)=>{
	if(params.category.toLowerCase().includes('retail')){
		result22.push(params);
	}
})
cl(result22);



var companies9 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//create a array of Company whos category is retail



let result18 = companies9.filter(params=>{
	return(params.category.toLowerCase().trim() === 'retail')
})
cl(result18)


let result23 = companies9.filter(params=>{
	return(params.category.toLowerCase().indexOf('retail')> -1)
})
cl(result23)


let result24 = companies9.filter(params=>{
	return(params.category.toLowerCase().includes('retail'))
})
cl(result24)



var companies10 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//create a array of Company whos category is retail

let result25 = companies10.filter(params=>{
	return(params.category.toLowerCase().includes('retail')||params.category.toLowerCase().includes('finance') )
})
cl(result25)

let result26 = companies10.filter(params=>{
	return(params.category.toLowerCase().trim()=== 'retail'||params.category.toLowerCase().trim('finance') === 'finance')
})
cl(result26)


let result27 = companies10.filter(params=>{
	return(params.category.toLowerCase().indexOf('retail')> -1||params.category.toLowerCase().indexOf('finance')> -1)
})
cl(result27)




var companies11 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//create a array of Company who start in 80s
//start >= 1980 && start <= 1989 // 80 to 89 decades

let result28 =[];
for(let i=0; i<companies11.length; i++){
	if(companies11[i].start >= 1980 && companies11[i].start <= 1989){
		result28.push(companies11[i]);
	}
}
cl(result28);

let result29=[];
companies11.forEach((param)=>{
	if(param.start >= 1980 && param.start <= 1989){
		result29.push(param);
	}
})
cl(result29);

let result30 = companies11.filter(params=>{
	return (params.start >= 1980 && params.start <= 1989);
})
cl(result30);



var companies12 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//create a array of obj = start in 80s and company run for at least 10 years



let result31 =[];
for(let i=0; i<companies12.length; i++){
	if((companies12[i].start >= 1980 && companies12[i].start <= 1989) && (companies12[i].end - companies12[i].start)>=10){
		result31.push(companies12[i]);
	}
}
cl(result31);

let result32=[];
companies12.forEach((param)=>{
	if((param.start >= 1980 && param.start <= 1989)&& (param.end - param.start)>=10){
		result32.push(param);
	}
})
cl(result32);

let result33 = companies12.filter(params=>{
	return ((params.start >= 1980 && params.start <= 1989) && (params.end - params.start)>=10);
})
cl(result33);





var companies13 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//start in 80s === 'retail'

let result34 =[];
for(let i=0; i< companies13.length; i++){
	if((companies13[i].start >= 1980 && companies13[i].start <= 1989) && (companies13[i].category.toLowerCase().trim() === 'retail')){
		result34.push(companies13[i]);
	}
}
cl(result34);

let result35 =[];
for(let i=0; i< companies13.length; i++){
	if ((companies13[i].start >= 1980 && companies13[i].start <= 1989) && (companies13[i].category.toLowerCase().indexOf('retail'))> -1){
		result35.push(companies13[i]);
	}
}
cl(result35);

let result36 =[];
for(let i=0; i< companies13.length; i++){
	if ((companies13[i].start >= 1980 && companies13[i].start <= 1989) && (companies13[i].category.toLowerCase().includes('retail'))){
		result36.push(companies13[i]);
	}
}
cl(result36);





var companies14 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//start in 80s === 'retail'

let result37 =[];
companies14.forEach(param =>{
	if((param.start >= 1980 && param.start <= 1989) && (param.category.toLowerCase().trim() === 'retail')){
		result37.push(param);
	}
})
cl(result37);

let result38 =[];
companies14.forEach(param =>{
	if((param.start >= 1980 && param.start <= 1989) && (param.category.toLowerCase().indexOf('retail'))> -1){
		result38.push(param);
	}
})
cl(result38);

let result39 =[];
companies14.forEach(param =>{
	if((param.start >= 1980 && param.start <= 1989) && (param.category.toLowerCase().includes('retail'))){
		result39.push(param);
	}
})
cl(result39);






var companies14 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//start in 80s === 'retail'

let result40 = companies14.filter(param =>{
	return(param.start >= 1980 && param.start <= 1989) && (param.category.toLowerCase().trim() === 'retail')
})
cl(result40);

let result41 = companies14.filter(param =>{
	return(param.start >= 1980 && param.start <= 1989) && (param.category.toLowerCase().indexOf('retail'))> -1
})
cl(result41);

let result42 = companies14.filter(param =>{
	return (param.start >= 1980 && param.start <= 1989) && (param.category.toLowerCase().includes('retail'))
})
cl(result42);





var companies15 = [
    { name: "Company One", id:1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id:2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id:3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id:4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", idd:5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id:6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id:7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id:8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id:9, category: "Retail", start: 1981, end: 1989 }
];

let givenId= 4;
let result43= companies15.find((param)=>{
	return param.id === givenId;
});
cl(result43);	

let result44= [];
for(let i=0; i<companies15.length; i++){
	if(companies15[i].id === givenId){
	result44.push(companies15[i]);
	 };
};
cl(result44);


let result45 = companies15.filter((comp)=>{
	return comp.id === givenId;
});
cl(result45);

let result46=[];
companies15.forEach(params=>{
	if(params.id === givenId){
		result46.push(params);	
	};
});
cl(result46);



var companies16 = [
    { name: "Company One", id:1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id:2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id:3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id:4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", idd:5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id:6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id:7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id:8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id:9, category: "Retail", start: 1981, end: 1989 }
];

//return the first company whos category is retail
 
let result47= companies16.find((param)=>{
	return param.category.toLowerCase().trim() === 'retail';	
})
cl(result47);

let result48 = companies16.filter((param)=>{
	return param.category.toLowerCase().indexOf('retail')> -1;
})
cl(result48[0]);

let result49 = companies16.filter((param)=>{
	return param.category.toLowerCase().includes('retail');
})
cl(result49[0]);

let result50=[];
for(let i=0;i<companies16.length; i++){
	if(companies16[i].category.toLowerCase().trim() === 'retail'){
		result50.push(companies16[i]);
		break;
	}
}
cl(result50);

let result51=[];
companies16.forEach((param)=>{
	if(param.category.toLowerCase().trim() === 'retail'){
		result51.push(param);
	}
})
cl(result51[0]);


let product = [
{id : 1, name : 'Laptop' , Price : 100000
},
{id : 2, name : 'phone' , price : 70000
},
{id : 3, name : 'laptop' , price : 80000
},
{id : 4, name : 'tablet' , Price : 50000
},
{id :5, name : 'hadephone' , price : 25000
},
]



let result52 = product.filter((param)=>{
	return param.name.toLowerCase().includes('laptop');
})
cl(result52[0]);

let result0 = product.filter((prod)=>{
    return prod.name.toLocaleLowerCase().trim() === 'laptop'
})
cl(result0[0]);

let result1 = product.filter((prod)=>{
    return prod.name.toLocaleLowerCase().indexOf('laptop')> -1
})
cl(result1[0]);

let result53=[];
for(let i=0;i<product.length; i++){
	if(product[i].name.toLowerCase().trim() === 'laptop'){
		result53.push(product[i]);
		break;
	}
}
cl(result53);

let result54=[];
product.forEach((params)=>{
	if(params.name.toLowerCase().indexOf('laptop')> -1){
		result54.push(params);
	}
})
cl(result54[0]);

let result = product.find((pro)=>{
    return pro.name.toLowerCase().includes('laptop')
});
cl(result);


let result2 = product.find((pro)=>{
    return pro.name.toLowerCase().indexOf('laptop')> -1
});
cl(result2);


let result3 = product.find((pro)=>{
    return pro.name.toLowerCase().trim() === 'laptop'
});
cl(result3);
