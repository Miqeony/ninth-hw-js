//  Вам потрібно реалізувати функцію performBankOperations, яка приймає об'єкт з балансом рахунку та callback-функцію, яка виконує різні банківські операції, а саме: покалсти гроші на рахунок та зняти гроші з рахунку. Функції з банківськими  операціями  є колбеками

function performBankOperations(balance,callback) {
     callback(balance)
};
     function deposit(amount) {
    return function(balance) {
        console.log(`Покладено ${amount} грн`);
        console.log('Поточний баланс:', balance + amount);
    }
};

function withdraw(amount) {
    return function(balance) {
        if (balance >= amount) {
            console.log(`Знято ${amount} грн`);
            console.log('Поточний баланс:', balance - amount, 'грн');
        } else {
            console.log('Недостатньо коштів на рахунку!');
        }
    }
};

const currentBalance = 800;
console.log('Поточний баланс:', currentBalance);
performBankOperations(currentBalance, deposit(600));

performBankOperations(currentBalance, withdraw(369));
   