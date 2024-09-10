const formatarCPF = (input) => {
    if (input.length > 3 && input[3] !== '.') {
        input = input.slice(0, 3) + '.' + input.slice(3);
    }
    if (input.length > 7 && input[7] !== '.') {
        input = input.slice(0, 7) + '.' + input.slice(7);
    }
    if (input.length > 11 && input[11] !== '-') {
        input = input.slice(0, 11) + '-' + input.slice(11);
    }
    return input.slice(0, 14);
};

const handleCPFChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 11);
    const cpfFormatado = formatarCPF(input);
    return cpfFormatado; // Retorna o CPF formatado
};



export { handleCPFChange, formatarCPF };

