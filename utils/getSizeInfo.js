function getSizeInfo(data) {
    const jsonString = JSON.stringify(data);
    const byteArray = new TextEncoder().encode(jsonString);
    const byteLength = byteArray.length;
    const kb = byteLength / 1024;
    const mb = kb / 1024;
    return {
        bytes: byteLength,
        kb: kb.toFixed(2),
        mb: mb.toFixed(4),
    };
}

module.exports = getSizeInfo;
