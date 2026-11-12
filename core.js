export const donuts=[
['believe','Believe It!','Naruto','Orange glaze, vanilla cream, and citrus crunch.','Fruity',425,'#ff7b31','#ffce60'],
['limitless','Limitless Glaze','Gojo','Blueberry vanilla glaze with a white chocolate swirl.','Creamy',475,'#5ea9f5','#ffffff'],
['gear','Gear Five Glaze','Luffy','Coconut cream, vanilla icing, and a mango center.','Creamy',475,'#fff3df','#ffbf42'],
['concentration','Total Concentration','Tanjiro','Matcha glaze, dark chocolate, and strawberry filling.','Chocolate',450,'#77ae6b','#302339'],
['flash','Final Flash','Vegeta','Lemon glaze, blackberry filling, and popping candy.','Fruity',475,'#f6d839','#7852b8'],
['moon','Moon Prism Sprinkle','Sailor Moon','Strawberry milk glaze and pastel sugar stars.','Creamy',450,'#f39bba','#fff5a3'],
['rocket','Rocket Fuel','Astro Boy','Espresso chocolate glaze, vanilla cream, and chocolate crunch.','Chocolate',450,'#765044','#ffe6bd'],
['time','Time for Another','Dio Brando','Golden caramel glaze, dark chocolate filling, and cocoa crumble.','Chocolate',475,'#e5ad49','#4d2a24'],
['wild','Wild Potential','Gon Freecss','Green apple glaze, mango filling, and lime sugar.','Fruity',450,'#8ac94d','#ffad36'],
['ghost','Ghost in the Glaze','Motoko Kusanagi','Black sesame glaze, vanilla cream, and raspberry drizzle.','Unexpected',500,'#72717e','#f45da7'],
['clean','Clean Cut','Levi Ackerman','Earl Grey glaze, lemon cream, and a dark chocolate stripe.','Unexpected',475,'#e0c9b0','#55413e'],
['copy','Copy That, Cocoa','Kakashi','Cookies and cream filling with vanilla and chocolate glaze.','Chocolate',450,'#efe4d4','#443d47'],
['lost','Lost Again','Roronoa Zoro','Matcha, pistachio, and white chocolate stripes. Contains pistachio.','Unexpected',500,'#629c62','#e6ecc8'],
['gentle','A Gentle Slice','Himura Kenshin','Cherry glaze, vanilla cream, and crossing white chocolate lines.','Fruity',450,'#db5d77','#fff5e5']
].map(([id,name,character,description,family,price,color,accent])=>({id,name,character,description,family,price,color,accent}));
export const money=c=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(c/100);
export const byId=id=>donuts.find(d=>d.id===id);
export function total(box){const subtotal=box.reduce((s,id)=>s+(byId(id)?.price||0),0);const tax=Math.round(subtotal*.06);return{subtotal,tax,total:subtotal+tax};}
export function restore(raw){try{const s=JSON.parse(raw);if(!s||![6,12].includes(s.size)||!Array.isArray(s.box))return{size:6,box:[]};return{size:s.size,box:s.box.filter(id=>byId(id)).slice(0,s.size)};}catch{return{size:6,box:[]};}}
export function add(box,id,size){return byId(id)&&box.length<size?[...box,id]:box;}
export function move(box,from,to){if(from<0||from>=box.length||to<0||to>=box.length)return box;const n=[...box];[n[from],n[to]]=[n[to],n[from]];return n;}
export function ready(box,size,soldout=[]){return box.length===size&&box.every(id=>byId(id)&&!soldout.includes(id));}

export const drinks=[
{id:'matcha',name:'Strawberry Cloud Matcha',description:'Iced matcha, strawberry, and milk. Creamy with a gentle tea finish.',price:550,caffeine:'Contains caffeine',allergens:'Contains milk. Shared equipment handles soy and nuts.',sprite:0},
{id:'coffee',name:'Vanilla Power Up',description:'Iced coffee with milk and a soft vanilla finish.',price:500,caffeine:'Contains caffeine',allergens:'Contains milk. Shared equipment handles soy and nuts.',sprite:1},
{id:'yuzu',name:'Yuzu Spark',description:'Sparkling yuzu lemonade over ice. Bright, citrusy, and refreshing.',price:450,caffeine:'No caffeine in this concept recipe',allergens:'Shared equipment handles milk, soy, and nuts.',sprite:2}
];
export function safeDrinks(value){const result={};if(!value||typeof value!=='object')return result;for(const d of drinks){const q=value[d.id];if(Number.isInteger(q)&&q>0)result[d.id]=Math.min(q,12);}return result;}
export function orderTotal(box,beverages={}){const donutSubtotal=total(box).subtotal;const clean=safeDrinks(beverages);const drinkSubtotal=drinks.reduce((s,d)=>s+d.price*(clean[d.id]||0),0);const subtotal=donutSubtotal+drinkSubtotal,tax=Math.round(subtotal*.06);return{donutSubtotal,drinkSubtotal,subtotal,tax,total:subtotal+tax};}
export function suggested(size,soldout=[],family='All'){const available=donuts.filter(d=>!soldout.includes(d.id)&&(family==='All'||d.family===family));if(!available.length)return[];return Array.from({length:size},(_,i)=>available[i%available.length].id);}
