// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let _currency = currency;
    let exchange = {};
    const H = 50;
    const Q = 25;
    const D = 10;
    const N = 5;
    const P = 1;
    let h, q, d, n, p;

    if (_currency <= 10000) {
        if (_currency >= H) {
            h = (_currency / H).toString().split('.')[0];
            _currency = _currency - (h * H);
            exchange.H = h;
        }
        if (_currency >= Q) {
            q = (_currency / Q).toString().split('.')[0];
            _currency = _currency - q * Q;
            exchange.Q = q;
        }
        if (_currency >= D) {
            d = (_currency / D).toString().split('.')[0];
            _currency = _currency - d * D;
            exchange.D = d;
        }
        if (_currency >= N) {
            n = (_currency / N).toString().split('.')[0];
            _currency = _currency - n * N;
            exchange.N = n;
        }
        if (_currency >= P) {
            p = (_currency / P).toString().split('.')[0];
            _currency = _currency - p * P;
            exchange.P = p;
        }
    } else {
        exchange.error = "You are rich, my friend! We don\'t have so much coins for exchange";
    }
    return exchange;
}
