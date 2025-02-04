// export function dbTimeForHuman(str) {
//     return str.replace('T', ' ').substring(0, 16);
// }

export function dbTimeForHuman(str) {
    const date = new Date(str);

    const month = date.toLocaleString('default', { month: 'short' });
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12; // Convert to 12-hour format

    return `${month}/${day}/${year}, ${hours12}:${minutes}:${seconds} ${period}`;
}
