function formatEthAddress(address, length = 4) {
    if (!/^0x[0-9A-Fa-f]{40}$/.test(address)) {
        throw new Error("Invalid Ethereum address");
    }

    const prefix = address.slice(0, 2);
    const shortPart = address.slice(2, 2 + length);

    return `${prefix}${shortPart}...${address.slice(-4)}`;
}

export { formatEthAddress };
