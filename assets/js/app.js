

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