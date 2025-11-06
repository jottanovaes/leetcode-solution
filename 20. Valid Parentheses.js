/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // verifica se string é impar, já garantindo falha
    if (s.length % 2 === 1) return false;

    // possíveis pares
    const parenthesis = "()"
    const brackets = "[]"
    const curly = "{}"
    const closing = [")", "]", "}"]

    const aux = s.split("")
    // pilha auxiliar
    const s1 = [];

    for (var i = 0; i <= s.length - 1;) {
        // se não for fechamento, empilha
        if (!closing.includes(aux[i])) {
            s1.push(aux[i])
        }
        else if (s1.length > 0) {
            const pair = s1[s1.length - 1] + aux[i]
            // se for fechamento e pilha não estiver vazia, desempilha se par
            if (pair === parenthesis || pair === brackets || pair === curly) {
                s1.pop()
            } else {
                break;
            }
        } else {
            return false
        }
        i++
    }

    return !s1.length
};
