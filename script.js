const product = cartObj()

TotalPrice = 0
let buyurtma = []
let kuryer = 8000

for (const key in product ) {
    const pk = product[key]
    TotalPrice += pk.price + kuryer
 buyurtma.push(`${key} ${pk.info} `);
}
console.log(`Sizning buyurtmangiz: ${buyurtma}  jami : ${TotalPrice} yetkazib berishnarxi : (${kuryer})`);