function presente ( dinheiro, valor){
    if (dinheiro < valor) {
        return 'Não vai dar para comprar'
    } else {
        return 'você realemnte precisa disso??'
    }
}

var x = presente (50, 90)
console.log(x)